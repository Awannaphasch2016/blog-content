# Contributing to Blog Content

Thank you for contributing to our blog! This guide will help you create high-quality content that provides value to readers.

## 📋 Content Standards

### Writing Quality

- **Clear and concise**: Write in simple, accessible language
- **Well-structured**: Use headings, lists, and paragraphs effectively
- **Actionable**: Provide practical value readers can apply
- **Original**: Share your unique insights and experiences
- **Evidence-based**: Support claims with examples or data

### Technical Requirements

- **Working code**: All code examples must be tested and functional
- **Complete examples**: Provide enough context for readers to reproduce
- **Syntax highlighting**: Use proper language tags for code blocks
- **Dependencies**: List all required packages and versions
- **Error handling**: Include common issues and solutions

### SEO and Discoverability

- **Descriptive titles**: Clear, specific, and search-friendly
- **Meta descriptions**: Compelling 150-160 character summaries
- **Strategic tags**: Use relevant, popular tags (maximum 4)
- **Internal linking**: Link to related content when appropriate
- **Image alt text**: Descriptive alt text for all images

## 📝 Writing Process

### 1. Planning Phase

Before writing, create an outline:

- **Target audience**: Who will read this?
- **Learning objectives**: What will readers gain?
- **Key points**: 3-5 main takeaways
- **Structure**: Logical flow from introduction to conclusion

### 2. Draft Phase

- Start with a template from `/templates/`
- Write in `/drafts/` folder
- Use descriptive filename: `YYYY-MM-DD-descriptive-title.md`
- Focus on getting ideas down first, polish later

### 3. Review Phase

Self-review checklist:

- [ ] Title is clear and compelling
- [ ] Introduction hooks the reader
- [ ] Content delivers on the title's promise
- [ ] Code examples work and are complete
- [ ] Conclusion summarizes key takeaways
- [ ] Grammar and spelling are correct
- [ ] Links work and are relevant

### 4. Publication Phase

- Move from `/drafts/` to `/posts/`
- Create pull request for review
- Address reviewer feedback
- Get approval before merging

## 🎯 Content Guidelines by Type

### Technical Tutorials

**Structure:**
1. Problem statement and context
2. Prerequisites and setup
3. Step-by-step implementation
4. Testing and validation
5. Conclusion and next steps

**Requirements:**
- Include complete, working code examples
- Explain complex concepts simply
- Provide troubleshooting section
- Link to full code repository

### How-To Guides

**Structure:**
1. Clear learning objectives
2. Required tools and knowledge
3. Sequential steps with explanations
4. Expected outcomes for each step
5. Troubleshooting common issues

**Requirements:**
- Each step should be actionable
- Include screenshots where helpful
- Test all instructions thoroughly
- Provide alternative approaches when relevant

### Opinion/Analysis Posts

**Structure:**
1. Clear thesis statement
2. Supporting arguments with evidence
3. Address counterarguments
4. Real-world examples
5. Implications and conclusions

**Requirements:**
- Back up opinions with reasoning
- Acknowledge different perspectives
- Use data and examples to support points
- Encourage discussion and debate

## 🔧 Technical Specifications

### Frontmatter Format

```yaml
---
title: "Exact Title (60 chars max for SEO)"
tags: ["primary-tag", "secondary-tag", "specific-tag"]
description: "Compelling description under 160 characters for search results"
published: false  # Always start as false
canonical_url: null  # Only if cross-posting
series: "Series Name"  # If part of a series
---
```

### Code Block Standards

```javascript
// Always include language identifier
// Add comments explaining complex parts
function exampleFunction() {
  // Use meaningful variable names
  const meaningfulVariable = "Clear example";
  return meaningfulVariable;
}
```

### Image Guidelines

- Store in `/assets/images/post-name/`
- Use descriptive filenames: `react-hooks-diagram.png`
- Optimize for web (under 500KB when possible)
- Include alt text: `![React hooks lifecycle diagram](../assets/images/react-hooks-diagram.png)`
- Use diagrams for complex concepts

### Link Standards

- Use descriptive anchor text
- Verify all links work before publishing
- Prefer HTTPS links
- Link to authoritative sources
- Include publication dates for time-sensitive content

## 👥 Review Process

### Self-Review

Before submitting, ask yourself:

1. **Value**: Does this teach something useful?
2. **Clarity**: Can a beginner follow along?
3. **Completeness**: Are all necessary details included?
4. **Accuracy**: Is all information correct and up-to-date?
5. **Originality**: Does this offer a unique perspective?

### Peer Review

Reviewers will check for:

- **Technical accuracy**: Code works and follows best practices
- **Content quality**: Clear writing and logical structure
- **SEO optimization**: Title, description, and tags are effective
- **Brand consistency**: Tone and style match our standards
- **Reader experience**: Content is engaging and valuable

### Review Feedback

When receiving feedback:

- **Be open**: Constructive criticism improves content quality
- **Ask questions**: Clarify unclear feedback
- **Iterate**: Make requested changes thoughtfully
- **Learn**: Apply lessons to future content

## 🚀 Publishing Workflow

### Branch Strategy

```bash
# Create feature branch
git checkout -b post/your-post-title

# Make your changes
git add .
git commit -m "Add new post: Your Post Title"

# Push and create PR
git push origin post/your-post-title
```

### Pull Request Template

When creating a PR, include:

- **Content summary**: Brief overview of the post
- **Target audience**: Who this is written for
- **Key takeaways**: Main points readers will learn
- **Review focus**: Specific areas where you want feedback
- **Checklist**: Confirm you've followed all guidelines

### Merge Requirements

Before merging:

- [ ] All automated checks pass
- [ ] At least one approving review
- [ ] All feedback addressed
- [ ] Content moved to `/posts/` folder
- [ ] Frontmatter `published` set to `true`

## 📊 Success Metrics

We measure content success by:

- **Reader engagement**: Comments, shares, reactions
- **Search performance**: Organic traffic and rankings
- **Educational value**: Feedback and testimonials
- **Technical accuracy**: Corrections needed post-publication
- **Community impact**: References and citations

## 🆘 Getting Help

### Questions About Content

- **Writing questions**: Ask in GitHub discussions
- **Technical issues**: Create GitHub issue
- **Review feedback**: Comment on your PR
- **Urgent matters**: Tag `@maintainers`

### Resources

- [Writing Technical Content](https://example.com)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [SEO for Developers](https://example.com)
- [Code Style Guide](https://example.com)

## 🏆 Recognition

Great contributors get:

- **Author attribution**: On all published content
- **Contributor highlights**: In monthly updates
- **Review privileges**: Ability to review others' content
- **Template creation**: Help shape content standards

---

**Thank you for helping create valuable content for the developer community!** 🎉