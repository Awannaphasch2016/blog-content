# Blog Content Repository

This repository manages blog content using a content-as-code approach, integrating with a CLI tool for automated publishing to Dev.to.

## 📁 Repository Structure

```
blog-content/
├── posts/                    # Published blog posts
├── drafts/                   # Work-in-progress posts
│   └── ideas/               # Post ideas and outlines
├── templates/                # Post templates for consistency
├── assets/                   # Images, diagrams, code samples
│   ├── images/
│   ├── diagrams/
│   └── code-samples/
├── .github/workflows/        # GitHub Actions automation
├── scripts/                  # Content management scripts
└── docs/                    # Documentation
```

## 🚀 Quick Start

### Creating a New Post

1. **Choose a template** from the `templates/` directory
2. **Copy to drafts** with a descriptive filename: `YYYY-MM-DD-post-title.md`
3. **Create a branch** for your post: `git checkout -b post/your-post-title`
4. **Write your content** following our [writing guidelines](CONTRIBUTING.md)
5. **Create a Pull Request** for review

### Using Templates

We provide several templates to ensure consistency:

- **`technical-post-template.md`** - For technical tutorials with code
- **`tutorial-template.md`** - Step-by-step how-to guides
- **`announcement-template.md`** - Product/feature announcements
- **`opinion-template.md`** - Thought leadership and opinion pieces

## 📝 Writing Guidelines

### Frontmatter Requirements

Every post must include proper frontmatter:

```yaml
---
title: "Your Post Title"                    # Required
tags: ["javascript", "tutorial"]           # Recommended (max 4 tags)
description: "Brief post description"       # Recommended for SEO
published: false                           # Start as draft
canonical_url: null                        # Optional
series: "Series Name"                      # Optional
---
```

### Content Standards

- **Clear structure** with proper headings (H2, H3)
- **Code examples** with syntax highlighting
- **Working code** that readers can copy and use
- **Images and diagrams** stored in `assets/` folder
- **Links** verified to be working

## 🔄 Workflow

### Content Review Process

1. **Draft Phase**: Write in `drafts/` folder
2. **Pull Request**: Create PR when ready for review
3. **Review & Edit**: Collaborate on improvements
4. **Approval**: Get PR approval from maintainers
5. **Publishing**: Merge triggers automated publication to Dev.to

### Branch Naming Convention

- `post/title-of-post` - New blog posts
- `update/existing-post-title` - Updates to published posts
- `fix/post-title` - Bug fixes or corrections
- `assets/feature-name` - Asset updates

## 🤖 Automation

### GitHub Actions

- **Content Validation**: Checks frontmatter and markdown syntax
- **Link Checking**: Verifies all links are working
- **Auto-Publishing**: Publishes approved content to Dev.to
- **Asset Optimization**: Compresses images automatically

### CLI Integration

This repository works with our blog CLI tool:

```bash
# Publish a post
blog publish posts/2024-01-15-my-post.md

# Check status
blog status posts/2024-01-15-my-post.md

# Validate before publishing
blog validate drafts/upcoming-post.md
```

## 📊 Content Analytics

Published posts are tracked with:

- Publication date and platform
- Performance metrics (when available)
- Version history and changes
- Reader engagement data

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:

- Writing standards and style guide
- Review process and expectations
- Technical requirements
- Content quality standards

## 📋 Content Calendar

We use GitHub Projects to manage our content calendar:

- **Ideas**: Tracked as issues with the `content-idea` label
- **In Progress**: Posts currently being written
- **Review**: Posts awaiting editorial review
- **Scheduled**: Approved posts scheduled for publication

## 🛠️ Local Development

### Prerequisites

- Node.js (for scripts and validation)
- Git (for version control)
- Blog CLI tool (for publishing)

### Setup

```bash
# Clone the repository
git clone [repository-url]
cd blog-content

# Install dependencies
npm install

# Validate a post
npm run validate posts/example-post.md

# Run local preview server
npm run serve
```

## 📚 Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [Dev.to API Documentation](https://developers.forem.com/api)
- [Writing Great Technical Content](https://example.com)
- [SEO Best Practices for Developers](https://example.com)

## 🆘 Support

- **Issues**: Use GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub discussions for questions and ideas
- **Review**: Tag `@maintainers` for urgent review needs

---

**Made with ❤️ for better technical writing**