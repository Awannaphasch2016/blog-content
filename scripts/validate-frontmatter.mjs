#!/usr/bin/env node

import { readFileSync } from 'fs';
import matter from 'gray-matter';

function validateFrontmatter(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const parsed = matter(content);

    const errors = [];
    const warnings = [];

    // Check required fields
    if (!parsed.data.title) {
      errors.push('Missing required field: title');
    }

    // Validate title
    if (parsed.data.title) {
      if (typeof parsed.data.title !== 'string') {
        errors.push('title must be a string');
      } else {
        if (parsed.data.title.length > 60) {
          warnings.push(`title is long (${parsed.data.title.length} chars) - consider shortening for SEO`);
        }
        if (parsed.data.title.length < 10) {
          warnings.push(`title is short (${parsed.data.title.length} chars) - consider being more descriptive`);
        }
      }
    }

    // Validate tags
    if (parsed.data.tags) {
      if (!Array.isArray(parsed.data.tags)) {
        errors.push('tags must be an array');
      } else {
        if (parsed.data.tags.length > 4) {
          warnings.push(`too many tags (${parsed.data.tags.length}) - Dev.to recommends 4 or fewer`);
        }
        parsed.data.tags.forEach((tag, index) => {
          if (typeof tag !== 'string') {
            errors.push(`tag at index ${index} must be a string`);
          }
        });
      }
    }

    // Validate description
    if (parsed.data.description) {
      if (typeof parsed.data.description !== 'string') {
        errors.push('description must be a string');
      } else {
        if (parsed.data.description.length > 160) {
          warnings.push(`description is long (${parsed.data.description.length} chars) - may be truncated in search results`);
        }
      }
    } else {
      warnings.push('missing description - consider adding for better SEO');
    }

    // Validate published field
    if (parsed.data.published !== undefined) {
      if (typeof parsed.data.published !== 'boolean') {
        errors.push('published must be a boolean (true/false)');
      }
    }

    // Validate canonical_url
    if (parsed.data.canonical_url && parsed.data.canonical_url !== null) {
      if (typeof parsed.data.canonical_url !== 'string') {
        errors.push('canonical_url must be a string or null');
      } else {
        try {
          new URL(parsed.data.canonical_url);
        } catch {
          errors.push('canonical_url must be a valid URL');
        }
      }
    }

    // Validate series
    if (parsed.data.series && parsed.data.series !== null) {
      if (typeof parsed.data.series !== 'string') {
        errors.push('series must be a string or null');
      }
    }

    // Check content length
    const wordCount = parsed.content.split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < 100) {
      warnings.push(`content is short (${wordCount} words) - consider expanding`);
    }

    // Output results
    if (errors.length > 0) {
      console.error(`❌ Validation failed for ${filePath}:`);
      errors.forEach(error => console.error(`  • ${error}`));
      process.exit(1);
    }

    if (warnings.length > 0) {
      console.warn(`⚠️  Warnings for ${filePath}:`);
      warnings.forEach(warning => console.warn(`  • ${warning}`));
    }

    console.log(`✅ Frontmatter validation passed for ${filePath}`);

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`❌ File not found: ${filePath}`);
    } else {
      console.error(`❌ Error validating ${filePath}: ${error.message}`);
    }
    process.exit(1);
  }
}

// Get file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: validate-frontmatter.mjs <file-path>');
  process.exit(1);
}

validateFrontmatter(filePath);