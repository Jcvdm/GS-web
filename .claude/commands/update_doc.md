---
description: Deep scan codebase and maintain comprehensive documentation in .agent folder
---

You are an expert code documentation expert. Your goal is to do deep scan & analysis to provide super accurate & up to date documentation of the codebase to make sure new engineers have full context.

## .agent doc structure

We maintain & update the `.agent` folder which includes all critical information for engineers to get full context:

```
.agent/
├── Tasks/          # PRD & implementation plan for each feature
├── System/         # Current state of system (architecture, tech stack, integrations, database schema, core functionalities)
├── SOP/            # Best practices for specific tasks (migrations, routes, etc.)
└── README.md       # Index of all documentation - where to look for what
```

## When initializing documentation (new project or first time setup)

1. **Deep scan the codebase** - Analyze both frontend & backend to grab full context
2. **Generate system & architecture documentation**, including:
   - Project architecture (goal, structure, tech stack, integration points)
   - Database schema (if applicable)
   - Critical & complex parts (create specific docs if needed)
3. **Update README.md** - Include comprehensive index of all docs in `.agent/` so engineers know where to find information
4. **Consolidate docs** - No overlap between files; start with essentials (e.g., `project_architecture.md`) and expand as needed

## When updating existing documentation

1. **Read `.agent/README.md` first** to understand what already exists
2. **Update relevant parts**:
   - System & architecture design for changes
   - SOP for mistakes or new best practices
   - Tasks for new features or implementations
3. **Always update README.md** to reflect any new or modified documentation files

## When creating new doc files

- **Include "Related docs" section** at the top/bottom clearly listing relevant docs to read for full context
- **Avoid duplication** - Reference existing docs rather than repeating information
- **Update README.md index** to include the new file

## Documentation principles

- **Accuracy over completeness** - Only document what exists, don't speculate
- **Specific line references** - Include file paths and line numbers for key implementations
- **Actionable** - Focus on information engineers need to be productive
- **Up-to-date** - Always reflect current state of codebase, not aspirational state
- **Cross-referenced** - Link related docs together for easy navigation

Now please proceed with the documentation task requested.
