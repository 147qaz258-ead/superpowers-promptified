# Superpowers Promptified - Cross-platform Compatible AI Programming Workflow

> **Core Concept**: Translate all script logic from superpowers into prompts to achieve true cross-platform compatibility.

---

## 🎯 What is this?

This is the promptified version of **superpowers**.

**Original superpowers**: Requires hooks + scripts; primarily supports Claude Code/Codex/OpenCode.

**This version**: Pure prompt implementation; supports **any** AI tool that allows custom prompts.

---

## ✨ Core Features

### 1. True Cross-Platform Support

✅ **Claude Code** - via CLAUDE.md
✅ **Cursor** - via .cursorrules or project prompts
✅ **Windsurf** - via project configuration
✅ **Antigravity** - via custom prompts
✅ **Any tool supporting pasted prompts** - Direct copy-paste

### 2. Zero Dependencies

- ❌ No hooks required
- ❌ No bash/cmd scripts required
- ❌ No polyglot wrapper required
- ✅ Only prompts required

### 3. Easy Customization

Customize directly by modifying `CLAUDE.md` without needing programming knowledge.

---

## 📦 Project Structure

```
superpowers-promptified/
├── CLAUDE.md                   # Core: User-level prompt file
├── README.md                   # This file
├── skills/                     # Superpowers skills (copied from original)
│   ├── brainstorming/
│   ├── writing-plans/
│   └── ...
├── agents/                     # Agent configurations
└── commands/                   # Command configurations
```

---

## 🚀 Quick Start

### Method 1: Claude Code (Recommended)

```bash
# 1. Clone or download this project
git clone https://github.com/your-username/superpowers-promptified.git

# 2. Copy CLAUDE.md to the user directory
cp superpowers-promptified/CLAUDE.md ~/.claude/

# 3. Copy skills to the global skills directory
cp -r superpowers-promptified/skills/* ~/.claude/skills/

# 4. Restart Claude Code
```

### Method 2: Cursor/Windsurf

```bash
# 1. Copy CLAUDE.md to the project root
cp superpowers-promptified/CLAUDE.md your-project/

# 2. Copy skills to the project skills directory
mkdir -p your-project/.claude/skills/
cp -r superpowers-promptified/skills/* your-project/.claude/skills/

# 3. Use within the project
```

### Method 3: Antigravity/Other Tools

```bash
# Directly copy the contents of CLAUDE.md into the tool's "System Prompt" or "User Prompt" area.
```

---

## 💡 Comparison with Original Superpowers

| Dimension | Original superpowers | Promptified Version |
|-----------|----------------------|---------------------|
| **Installation** | Plugin market or manual copy | Direct copy of CLAUDE.md |
| **Hooks Dependency** | ✅ Required | ❌ Not Required |
| **Script Dependency** | ✅ Requires bash/cmd | ❌ Not Required |
| **Platform Support** | Claude Code/Codex/OpenCode | **All Platforms** |
| **Cross-platform Compatibility** | Requires polyglot wrapper | 100% Compatible |
| **Customizability** | Requires modifying scripts | Direct modify CLAUDE.md |
| **Update Method** | git pull | git pull |

---

## 🔧 Core Principle

### How original superpowers works

```bash
# hooks/session-start.sh
1. Reads using-superpowers/SKILL.md
2. Converts to JSON
3. Injects into additionalContext
```

### How the promptified version works

```markdown
# CLAUDE.md
All rules are written directly in the prompt and loaded automatically for every session.
```

**Benefits**:
- No hooks required
- No script execution needed
- Fully transparent (you can see all rules)
- Cross-platform compatible

---

## 📋 Available Skills

This version includes all skills from the original superpowers:

### Planning & Design
- **brainstorming** - Brainstorming and requirement exploration
- **writing-plans** - Writing implementation plans

### Development Execution
- **subagent-driven-development** - Sub-agent development
- **using-git-worktrees** - Git worktrees isolation
- **executing-plans** - Executing implementation plans

### Quality Assurance
- **test-driven-development** - Test-Driven Development (TDD)
- **requesting-code-review** - Requesting code reviews
- **verification-before-completion** - Verification before completion

### Debugging & Fixing
- **systematic-debugging** - Systematic debugging
- **receiving-code-review** - Receiving code reviews

### Completion & Integration
- **finishing-a-development-branch** - Completing a development branch
- **dispatching-parallel-agents** - Dispatching parallel agents

---

## 🎯 Standard Development Workflow

```
1. brainstorming
   ↓
2. writing-plans
   ↓
3. using-git-worktrees (Create workspace)
   ↓
4. executing-plans
   ↓
5. test-driven-development (TDD)
   ↓
6. requesting-code-review
   ↓
7. finishing-a-development-branch
```

**Important**: Do not skip steps!

---

## 🛠️ Customization

### Modifying Skill Priority

Edit `CLAUDE.md` to adjust the order or descriptions of skills.

### Adding Personal Skills

Create your skills in `~/.claude/skills/` or `project/.claude/skills/`:

```markdown
---
name: my-custom-skill
description: Use when [condition] - [what it does]
---

# My Custom Skill

Skill content goes here...
```

### Modifying Workflow

Edit the "Standard Development Workflow" section in `CLAUDE.md`.

---

## 📚 Usage Examples

### Example 1: Developing a New Feature

**User**: Help me write a user login feature.

**AI should**:
1. Use `superpowers:brainstorming` skill.
2. Explore requirements and design.
3. Once user approval is received, use `superpowers:writing-plans` skill.
4. Then begin implementation.

### Example 2: Fixing a Bug

**User**: I encountered a bug.

**AI should**:
1. Use `superpowers:systematic-debugging` skill.
2. Systematically analyze the problem.
3. Propose a fix.

### Example 3: Code Review

**User**: Help me review this code.

**AI should**:
1. Use `superpowers:requesting-code-review` skill.
2. Check code quality.
3. Provide suggestions for improvement.

---

## ❓ FAQ

### Q: Is this functionally the same as original superpowers?

**A**: The core functionality is the same, but dependencies on hooks and scripts have been removed. All logic has been translated into prompts.

### Q: Can I use this in Antigravity?

**A**: Yes! As long as Antigravity supports custom prompts, you can use it.

### Q: Do I need to know how to program?

**A**: No. All customization is done by modifying `CLAUDE.md`.

### Q: Do I still need the original superpowers?

**A**: 
- If you are a **Claude Code user**, the original might be more convenient (via plugin market installation).
- If you want **cross-platform usage**, this version is more flexible.

### Q: How do I update?

**A**:
```bash
cd superpowers-promptified
git pull
```
Then re-copy `CLAUDE.md` and the `skills/` directory.

---

## 🤝 Contributing

Issues and Pull Requests are welcome!

### How to Contribute

1. Fork this project.
2. Create your feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a Pull Request.

---

## 📄 License

This project is based on the original [superpowers](https://github.com/obra/superpowers) and follows the same license.

---

## 🙏 Acknowledgments

- **Original superpowers**: [obra/superpowers](https://github.com/obra/superpowers)
- **Claude Code**: [Anthropic](https://code.claude.com)
- **Agent Skills Specification**: [Agent Skills](https://agentskills.io/specification)

---

## 📮 Contact

- **GitHub Issues**: Submit problems or suggestions.
- **Original Project Discussions**: [superpowers discussions](https://github.com/obra/superpowers/discussions)

---

**Remember**: This project enables the superpowers workflow to be used in any AI tool without hooks or scripts, powered entirely by prompts.
