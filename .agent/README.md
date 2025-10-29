# GS Web Landing Page - Documentation Index

Welcome to the GS Web landing page documentation. This folder contains all essential information for developers working on this project.

## Quick Start

**New to this project?** Start here:
1. Read [Project Architecture](System/project_architecture.md#project-overview) for high-level understanding
2. Review [Development Workflow](SOP/development_workflow.md#local-development-setup) to set up your environment
3. Check [CLAUDE.md](../CLAUDE.md) for quick reference while coding

**Making changes?**
- [Development Workflow SOP](SOP/development_workflow.md) has step-by-step guides for common tasks
- [CONVENTIONS.md](../CONVENTIONS.md) lists critical coding rules to follow

## Documentation Structure

### System Documentation (`/System`)

Comprehensive technical documentation about the project architecture, design decisions, and system state.

#### [project_architecture.md](System/project_architecture.md)
**When to read:** Getting started, understanding system design, or making architectural decisions

**Contains:**
- Project overview and goals
- Complete tech stack breakdown
- Project structure and file organization
- Architecture patterns and design decisions
- Integration points (Formspree, WhatsApp, Netlify)
- Key features implementation details with line references
- Responsive design strategy
- Performance and security considerations
- Contact information management (critical reference)
- Browser support matrix

**Key sections:**
- [Tech Stack](System/project_architecture.md#tech-stack) - What technologies are used
- [Project Structure](System/project_architecture.md#project-structure) - File and folder layout
- [Integration Points](System/project_architecture.md#integration-points) - External service integrations
- [Key Features](System/project_architecture.md#key-features--implementation) - How major features work
- [Contact Information Management](System/project_architecture.md#contact-information-management) - Where contact details are stored

### Standard Operating Procedures (`/SOP`)

Step-by-step guides for common development tasks and workflows.

#### [development_workflow.md](SOP/development_workflow.md)
**When to read:** Before making any changes to the codebase

**Contains:**
- Local development setup
- How to make common changes (contact info, sections, animations, colors, images)
- Component patterns and code examples
- Testing checklist
- Git workflow and deployment process
- Troubleshooting common issues
- Performance optimization tips
- Security best practices

**Key sections:**
- [Making Changes](SOP/development_workflow.md#making-changes) - Step-by-step for common tasks
- [Component Patterns](SOP/development_workflow.md#component-patterns) - Reusable code patterns
- [Testing Checklist](SOP/development_workflow.md#testing-checklist) - What to test before committing
- [Troubleshooting](SOP/development_workflow.md#troubleshooting) - Fix common issues

### Tasks Documentation (`/Tasks`)

**Current status:** No tasks documented yet

**Purpose:** This folder will contain:
- Product Requirement Documents (PRDs) for new features
- Implementation plans for complex changes
- Feature specifications
- Sprint planning documents

**When to add:** Before implementing significant new features or major changes

### Root Documentation Files

#### [CLAUDE.md](../CLAUDE.md)
**Quick reference guide for AI-assisted development**

Condensed, action-oriented documentation optimized for Claude Code (or other AI assistants). Contains:
- Development commands
- Key implementation details with line numbers
- CSS design system patterns
- Common tasks quick reference
- Critical contact information locations

**Use this when:** You need quick answers while coding

#### [CONVENTIONS.md](../CONVENTIONS.md)
**Development rules and conventions**

Critical rules to follow when making changes:
- Verification requirements
- Code change patterns
- Communication style (no apologies)
- Code preservation guidelines
- Variable naming conventions
- Security requirements
- Edge case handling

**Use this when:** Before making any code changes

#### [README.md](../README.md)
**Project README (root)**

Basic project information:
- Project description
- Local development instructions
- Deployment info

## Documentation Usage Guide

### For Different Scenarios

#### "I'm new and need to understand the project"
1. [Project Architecture - Overview](System/project_architecture.md#project-overview)
2. [Project Architecture - Tech Stack](System/project_architecture.md#tech-stack)
3. [Project Architecture - Key Features](System/project_architecture.md#key-features--implementation)

#### "I need to update contact information"
1. [Project Architecture - Contact Information Management](System/project_architecture.md#contact-information-management) (see all locations)
2. [Development Workflow - Updating Contact Information](SOP/development_workflow.md#1-updating-contact-information) (step-by-step)

#### "I need to add a new section to the page"
1. [Development Workflow - Adding a New Section](SOP/development_workflow.md#2-adding-a-new-section) (step-by-step)
2. [Development Workflow - Component Patterns](SOP/development_workflow.md#component-patterns) (code examples)
3. [Project Architecture - CSS Architecture](System/project_architecture.md#css-architecture) (understand design system)

#### "I need to modify animations"
1. [Development Workflow - Modifying Animations](SOP/development_workflow.md#3-modifying-animations) (how-to)
2. [Project Architecture - Animation System](System/project_architecture.md#css-architecture) (existing animations)

#### "I need to change the color scheme"
1. [Development Workflow - Changing Theme Colors](SOP/development_workflow.md#4-changing-theme-colors) (step-by-step)
2. [Project Architecture - CSS Design System](System/project_architecture.md#css-architecture) (variables reference)

#### "Something isn't working"
1. [Development Workflow - Troubleshooting](SOP/development_workflow.md#troubleshooting) (common issues)
2. [Project Architecture - Integration Points](System/project_architecture.md#integration-points) (external services)

#### "I'm deploying to production"
1. [Development Workflow - Deployment Checklist](SOP/development_workflow.md#deployment-checklist) (pre/post deploy)
2. [Development Workflow - Git Workflow](SOP/development_workflow.md#git-workflow) (commit and push)

## File Organization Rules

### When to Create New Documentation

**Create new System documentation when:**
- Adding new third-party integrations
- Implementing complex features requiring architectural explanation
- Making significant changes to project structure
- Adding backend/database components (if project evolves)

**Create new SOP documentation when:**
- Developing a repetitive task that needs standardization
- Fixing the same issue multiple times (create troubleshooting guide)
- Establishing new development patterns
- Onboarding requires specific procedures

**Create Tasks documentation when:**
- Planning new features or major changes
- Documenting implementation decisions
- Tracking feature requirements and acceptance criteria

### Documentation Maintenance

**Update documentation when:**
- Contact information changes (update both architecture and workflow docs)
- New features are added (update architecture, add to workflow if needed)
- Tech stack changes (new libraries, services, tools)
- Deployment process changes
- New common issues discovered (add to troubleshooting)

**Review documentation:**
- After each major feature implementation
- Before onboarding new developers
- Quarterly (or when project scope changes)

## Documentation Standards

### All documentation should:
- Include "Related Documentation" section at bottom
- Use specific line numbers when referencing code
- Provide actionable information (not generic best practices)
- Avoid duplication (reference other docs instead of repeating)
- Stay accurate to current codebase state

### Linking between docs:
- Use relative paths: `[link text](../System/filename.md)`
- Link to specific sections: `[link text](../System/filename.md#section-name)`
- Always verify links work after creating

### Code examples:
- Use syntax highlighting (```css, ```javascript, ```html)
- Keep examples minimal and focused
- Include context (where in codebase to use)

## Getting Help

### Internal Resources
1. Search this documentation (use your IDE's search across files)
2. Check [CONVENTIONS.md](../CONVENTIONS.md) for coding rules
3. Review [CLAUDE.md](../CLAUDE.md) for quick reference

### External Resources
- **Formspree Docs:** https://help.formspree.io/
- **Netlify Docs:** https://docs.netlify.com/
- **MDN Web Docs:** https://developer.mozilla.org/ (HTML/CSS/JS reference)
- **Font Awesome:** https://fontawesome.com/icons

### When Documentation is Missing
If you can't find information you need:
1. Check if it belongs in existing docs
2. Add it to appropriate section
3. Update this README index if you create new files
4. Follow documentation standards above

## Contributing to Documentation

### Making Updates
1. Edit relevant documentation file
2. Update this README if adding new files or sections
3. Verify all links still work
4. Commit with clear message: "Update docs: [what changed]"

### Questions to Ask
- Is this information accurate to current codebase?
- Will this help the next developer?
- Am I duplicating information from another doc?
- Are my code examples correct and tested?
- Did I include line numbers for code references?

---

**Last Updated:** 2025-10-29
**Documentation Version:** 1.0
**Project Version:** Production (Netlify deployed)
