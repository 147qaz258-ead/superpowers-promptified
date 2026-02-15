# Superpowers 提示词化版 - 全平台兼容的 AI 编程工作流

> **核心理念**：将 superpowers 的所有脚本逻辑翻译成提示词，实现真正的全平台兼容。

---

## 🎯 这是什么？

这是 **superpowers** 的提示词化版本。

**原版 superpowers**：需要 hooks + 脚本，主要支持 Claude Code/Codex/OpenCode

**本版本**：纯提示词实现，支持**任何**能自定义提示词的 AI 工具

---

## ✨ 核心特性

### 1. 真正的全平台支持

✅ **Claude Code** - 通过 CLAUDE.md
✅ **Cursor** - 通过 .cursorrules 或项目提示词
✅ **Windsurf** - 通过项目配置
✅ **Antigravity** - 通过自定义提示词
✅ **任何支持粘贴提示词的工具** - 直接复制粘贴

### 2. 零依赖

- ❌ 不需要 hooks
- ❌ 不需要 bash/cmd 脚本
- ❌ 不需要 polyglot wrapper
- ✅ 只需要提示词

### 3. 易于定制

直接修改 `CLAUDE.md` 就可以定制，不需要懂编程。

---

## 📦 项目结构

```
superpowers-promptified/
├── CLAUDE.md                   # 核心：用户级提示词文件
├── README.md                   # 本文件
├── skills/                     # Superpowers 技能（从原版复制）
│   ├── brainstorming/
│   ├── writing-plans/
│   └── ...
├── agents/                     # 代理配置
└── commands/                   # 命令配置
```

---

## 🚀 快速开始

### 方式 1：Claude Code（推荐）

```bash
# 1. 克隆或下载本项目
git clone https://github.com/你的用户名/superpowers-promptified.git

# 2. 复制 CLAUDE.md 到用户目录
cp superpowers-promptified/CLAUDE.md ~/.claude/

# 3. 复制 skills 到全局技能目录
cp -r superpowers-promptified/skills/* ~/.claude/skills/

# 4. 重启 Claude Code
```

### 方式 2：Cursor/Windsurf

```bash
# 1. 将 CLAUDE.md 复制到项目根目录
cp superpowers-promptified/CLAUDE.md 你的项目/

# 2. 将 skills 复制到项目技能目录
mkdir -p 你的项目/.claude/skills/
cp -r superpowers-promptified/skills/* 你的项目/.claude/skills/

# 3. 在项目中使用
```

### 方式 3：Antigravity/其他工具

```bash
# 直接将 CLAUDE.md 的内容复制到工具的"系统提示词"或"用户提示词"区域
```

---

## 💡 与原版 superpowers 的对比

| 维度 | 原版 superpowers | 提示词化版 |
|-----|----------------|----------|
| **安装方式** | 插件市场或手动复制 | 直接复制 CLAUDE.md |
| **hooks 依赖** | ✅ 需要 | ❌ 不需要 |
| **脚本依赖** | ✅ 需要 bash/cmd | ❌ 不需要 |
| **平台支持** | Claude Code/Codex/OpenCode | **全平台** |
| **跨平台兼容** | 需要 polyglot wrapper | 100% 兼容 |
| **可定制性** | 需要修改脚本 | 直接修改 CLAUDE.md |
| **更新方式** | git pull | git pull |

---

## 🔧 核心原理

### 原版 superpowers 的工作方式

```bash
# hooks/session-start.sh
1. 读取 using-superpowers/SKILL.md
2. 转换成 JSON
3. 注入到 additionalContext
```

### 提示词化版的工作方式

```markdown
# CLAUDE.md
直接将所有规则写在提示词中，每次会话自动加载
```

**好处**：
- 不需要 hooks
- 不需要脚本执行
- 完全透明（你可以看到所有规则）
- 跨平台兼容

---

## 📋 可用技能

本版本包含原版 superpowers 的所有技能：

### 规划与设计
- **brainstorming** - 头脑风暴和需求探索
- **writing-plans** - 编写实施计划

### 开发执行
- **subagent-driven-development** - 子代理开发
- **using-git-worktrees** - Git worktrees 隔离
- **executing-plans** - 执行实施计划

### 质量保证
- **test-driven-development** - 测试驱动开发（TDD）
- **requesting-code-review** - 代码审查
- **verification-before-completion** - 完成前验证

### 调试与修复
- **systematic-debugging** - 系统化调试
- **receiving-code-review** - 接收代码审查

### 完成与集成
- **finishing-a-development-branch** - 完成开发分支
- **dispatching-parallel-agents** - 调度并行代理

---

## 🎯 标准开发工作流

```
1. brainstorming（头脑风暴）
   ↓
2. writing-plans（编写计划）
   ↓
3. using-git-worktrees（创建工作区）
   ↓
4. executing-plans（执行）
   ↓
5. test-driven-development（TDD）
   ↓
6. requesting-code-review（代码审查）
   ↓
7. finishing-a-development-branch（完成分支）
```

**重要**：不要跳步骤！

---

## 🛠️ 定制化

### 修改技能优先级

编辑 `CLAUDE.md`，调整技能的顺序或描述。

### 添加个人技能

在 `~/.claude/skills/` 或 `项目/.claude/skills/` 创建你的技能：

```markdown
---
name: my-custom-skill
description: Use when [condition] - [what it does]
---

# 我的自定义技能

这里是技能内容...
```

### 修改工作流

编辑 `CLAUDE.md` 中的"标准开发工作流"部分。

---

## 📚 使用示例

### 示例 1：开发新功能

**用户**：帮我写个用户登录功能

**AI 应该**：
1. 使用 `superpowers:brainstorming` skill
2. 探索需求和设计
3. 得到用户批准后，使用 `superpowers:writing-plans` skill
4. 然后才开始实施

### 示例 2：修复 Bug

**用户**：我遇到了一个 bug

**AI 应该**：
1. 使用 `superpowers:systematic-debugging` skill
2. 系统分析问题
3. 提出修复方案

### 示例 3：代码审查

**用户**：帮我审查这段代码

**AI 应该**：
1. 使用 `superpowers:requesting-code-review` skill
2. 检查代码质量
3. 提供改进建议

---

## ❓ 常见问题

### Q: 这个和原版 superpowers 功能一样吗？

**A**: 核心功能一样，但去掉了对 hooks 和脚本的依赖。所有逻辑都翻译成了提示词。

### Q: 我可以在 Antigravity 中使用吗？

**A**: 可以！只要 Antigravity 支持自定义提示词，就可以使用。

### Q: 我需要懂编程吗？

**A**: 不需要。所有定制都是通过修改 CLAUDE.md 完成的。

### Q: 原版 superpowers 还需要吗？

**A**:
- 如果你是 **Claude Code 用户**，原版可能更方便（插件市场安装）
- 如果你想 **跨平台使用**，这个版本更灵活

### Q: 如何更新？

**A**:
```bash
cd superpowers-promptified
git pull
```

然后重新复制 `CLAUDE.md` 和 `skills/`。

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献方式

1. Fork 本项目
2. 创建你的特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

---

## 📄 许可证

本项目基于原版 [superpowers](https://github.com/obra/superpowers)，
遵循相同的许可证。

---

## 🙏 致谢

- **原版 superpowers**：[obra/superpowers](https://github.com/obra/superpowers)
- **Claude Code**：[Anthropic](https://code.claude.com)
- **Agent Skills 规范**：[Agent Skills](https://agentskills.io/specification)

---

## 📮 联系方式

- **GitHub Issues**：提交问题或建议
- **原项目 Discussions**：[superpowers discussions](https://github.com/obra/superpowers/discussions)

---

**记住**：这个项目让 superpowers 的工作流程可以在任何 AI 工具中使用，无需 hooks、无需脚本，纯提示词实现。
