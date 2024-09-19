# LeetCode Intelligent

本项目是用于增强 LeetCode 体验的用户脚本（userscript）。它是使用 `bun` 创建的。Bun 是一个快速的、集成包管理、构建和运行的 JavaScript 运行时。

## 功能介绍

本项目提供以下功能来增强 LeetCode 编辑器体验：

- **代码补全**：支持 C++ 和 Java 语言的智能代码补全。
- **模板插入**：常用的 C++ 和 Java 容器及算法模板补全，如 `vector`, `map`, `set` 等。
- **方法提示**：标准库容器的方法提示，如 `push`, `pop`, `size` 等。
- **扩展计划**：将会增加更多语言支持。

## 使用方法

构建项目后，你可以将生成的代码复制到油猴（Tampermonkey）中使用。

在运行 bun run build 之后，进入项目的 dist 目录。你会看到一个打包好的 .js 文件。你也可以直接在Releases中下载已经打包的js文件，复制里面的内容到油猴插件中即可使用，

打开浏览器中的 Tampermonkey（油猴）扩展程序。

## 开发环境

在开始之前，确保你的系统已安装 [Bun](https://bun.sh)。如果未安装，可以通过以下命令进行安装：

```bash
curl https://bun.sh/install | bash
```

## 构建项目

克隆本项目仓库。
打开项目目录，在终端中运行以下命令来安装依赖：

```bash
bun install
```
运行以下命令来构建项目：

```bash
bun run build
```
## 注意事项

确保每次修改代码后重新运行 bun run build 来生成新的打包文件。

---
如果在使用过程中遇到问题，欢迎提交 Issue。