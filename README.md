# LeetCode Intelligent

本项目是用于增强 LeetCode 体验的用户脚本（userscript）。它是使用 `bun` 创建的。Bun 是一个快速的、集成包管理、构建和运行的 JavaScript 运行时。

## 环境要求

在开始之前，确保你的系统已安装 [Bun](https://bun.sh)。如果未安装，可以通过以下命令进行安装：

```bash
curl https://bun.sh/install | bash
```

## 使用油猴 (Tampermonkey)

构建项目后，你可以将生成的代码复制到油猴（Tampermonkey）中使用。

在运行 bun run build 之后，进入项目的 dist 目录。你会看到一个打包好的 .js 文件。你也可以直接在Releases中下载已经打包的js文件，复制里面的内容到油猴插件中即可使用，

打开浏览器中的 Tampermonkey（油猴）扩展程序。

创建一个新脚本，然后将 dist 目录中的打包代码复制到新脚本中。

保存脚本，脚本将在你浏览相关网站时自动运行。

## 注意事项
确保每次修改代码后重新运行 bun run build 来生成新的打包文件。
如果在使用过程中遇到问题，欢迎提交 Issue。