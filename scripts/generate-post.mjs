#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, join } from 'path';

function generatePost(title, template = 'technical-post', targetDir = 'drafts') {
  // Generate filename from title
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')  // Remove special characters
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/^-+|-+$/g, '');     // Remove leading/trailing hyphens

  const filename = `${date}-${slug}.md`;
  const filePath = join(targetDir, filename);

  // Check if file already exists
  if (existsSync(filePath)) {
    console.error(`❌ File already exists: ${filePath}`);
    process.exit(1);
  }

  // Read template
  const templatePath = join('templates', `${template}-template.md`);

  if (!existsSync(templatePath)) {
    console.error(`❌ Template not found: ${templatePath}`);
    console.log('Available templates:');
    console.log('  • technical-post-template.md');
    console.log('  • tutorial-template.md');
    console.log('  • announcement-template.md');
    console.log('  • opinion-template.md');
    process.exit(1);
  }

  let templateContent = readFileSync(templatePath, 'utf-8');

  // Replace placeholder values in template
  templateContent = templateContent
    .replace(/title: ".*?"/, `title: "${title}"`)
    .replace(/Your Technical Post Title/g, title)
    .replace(/How to \[Do Something\]: A Complete Guide/g, title)
    .replace(/Announcing \[Product\/Feature Name\]/g, title)
    .replace(/Why I Think \[Your Opinion\/Position\]/g, title);

  // Write the new post
  writeFileSync(filePath, templateContent);

  console.log(`✅ Created new post: ${filePath}`);
  console.log(`📝 Template used: ${template}`);
  console.log(`📂 Location: ${targetDir}/`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Edit the post content and frontmatter');
  console.log('2. Create a branch: git checkout -b post/' + slug);
  console.log('3. Validate: npm run validate ' + filePath);
  console.log('4. Create PR when ready for review');
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: generate-post.mjs <title> [options]

Options:
  --template, -t    Template to use (default: technical-post)
  --target, -d      Target directory (default: drafts)
  --help, -h        Show this help message

Available templates:
  • technical-post   Technical tutorials with code examples
  • tutorial         Step-by-step how-to guides
  • announcement     Product/feature announcements
  • opinion          Thought leadership and opinion pieces

Examples:
  generate-post.mjs "How to Build a REST API"
  generate-post.mjs "React Hooks Guide" --template tutorial
  generate-post.mjs "My thoughts on AI" --template opinion --target drafts/ideas
  `);
  process.exit(0);
}

const title = args[0];
let template = 'technical-post';
let targetDir = 'drafts';

// Parse options
for (let i = 1; i < args.length; i++) {
  if (args[i] === '--template' || args[i] === '-t') {
    template = args[i + 1];
    i++; // Skip next argument
  } else if (args[i] === '--target' || args[i] === '-d') {
    targetDir = args[i + 1];
    i++; // Skip next argument
  }
}

if (!title) {
  console.error('❌ Please provide a post title');
  process.exit(1);
}

generatePost(title, template, targetDir);