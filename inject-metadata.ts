const metadata = `
// ==UserScript==
// @name         LeetCode Intelligent
// @namespace    https://shiyu.dev/
// @version      0.1
// @description  为 LeetCode 增加智能代码提示，提供代码补全功能
// @author       ShiYu
// @license      MIT
// @match        https://leetcode.cn/problems/*
// @match        https://leetcode.com/problems/* 
// @grant        none
// @antifeature  none
// @run-at       document-end
// ==/UserScript==

`.trim();

async function injectMetadata() {
    const outputFile = 'dist/index.js';

    try {
        // 读取构建后的文件内容
        const fileContent = await Bun.file(outputFile).text();

        // 将元数据插入到文件的顶部
        const updatedContent = `${metadata}\n\n${fileContent}`;

        // 写回到输出文件
        await Bun.write(outputFile, updatedContent);

        console.log('Metadata injected successfully.');
    } catch (error) {
        console.error('Error injecting metadata:', error);
    }
}

injectMetadata();
