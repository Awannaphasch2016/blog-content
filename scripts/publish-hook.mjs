#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

/**
 * Git hook script to be called when posts are moved to the posts/ directory
 * This script handles the transition from draft to published status
 */

function processPublishHook(filePath) {
  try {
    // Read the file
    const content = readFileSync(filePath, 'utf-8');
    const parsed = matter(content);

    let modified = false;
    const changes = [];

    // Set published to true if it's false or missing
    if (parsed.data.published !== true) {
      parsed.data.published = true;
      modified = true;
      changes.push('Set published: true');
    }

    // Add publication date if missing
    if (!parsed.data.published_at) {
      parsed.data.published_at = new Date().toISOString();
      modified = true;
      changes.push('Added published_at timestamp');
    }

    // Validate required fields for publication
    const requiredFields = ['title', 'published'];
    const missingFields = requiredFields.filter(field => !parsed.data[field]);

    if (missingFields.length > 0) {
      console.error(`❌ Missing required fields for publication: ${missingFields.join(', ')}`);
      process.exit(1);
    }

    // Check for common publication issues
    const warnings = [];

    if (!parsed.data.tags || parsed.data.tags.length === 0) {
      warnings.push('No tags specified - consider adding relevant tags');
    }

    if (!parsed.data.description) {
      warnings.push('No description provided - this helps with SEO and social sharing');
    }

    const wordCount = parsed.content.split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < 300) {
      warnings.push(`Content is quite short (${wordCount} words) - consider expanding`);
    }

    // Show warnings but don't block publication
    if (warnings.length > 0) {
      console.warn('⚠️  Publication warnings:');
      warnings.forEach(warning => console.warn(`  • ${warning}`));
      console.warn('');
    }

    // Write back modified content if changes were made
    if (modified) {
      const updatedContent = matter.stringify(parsed.content, parsed.data);
      writeFileSync(filePath, updatedContent);

      console.log(`✅ Processed ${filePath} for publication:`);
      changes.forEach(change => console.log(`  • ${change}`));
    }

    console.log(`📝 Post ready for publication: ${parsed.data.title}`);

    // Output metadata for use by CI/CD systems
    const metadata = {
      title: parsed.data.title,
      tags: parsed.data.tags || [],
      description: parsed.data.description || '',
      wordCount,
      published: parsed.data.published,
      publishedAt: parsed.data.published_at
    };

    console.log('📊 Post metadata:');
    console.log(JSON.stringify(metadata, null, 2));

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    process.exit(1);
  }
}

function validateMovedFiles() {
  // This would be called by a git hook when files are moved to posts/
  // For now, we'll process files passed as arguments

  const filePaths = process.argv.slice(2);

  if (filePaths.length === 0) {
    console.log(`
Usage: publish-hook.mjs <file-path> [file-path...]

This script is designed to be called when markdown files are moved to the posts/ directory.
It performs final validation and preparation for publication.

Examples:
  publish-hook.mjs posts/2024-03-01-my-post.md
  publish-hook.mjs posts/*.md
    `);
    process.exit(0);
  }

  console.log('🚀 Processing files for publication...\n');

  filePaths.forEach(filePath => {
    console.log(`Processing ${filePath}...`);
    processPublishHook(filePath);
    console.log('');
  });

  console.log('✅ All files processed successfully!');
  console.log('\nNext steps:');
  console.log('1. Commit the changes');
  console.log('2. Push to trigger automated publication');
  console.log('3. Monitor the GitHub Actions workflow');
}

// Main execution
validateMovedFiles();