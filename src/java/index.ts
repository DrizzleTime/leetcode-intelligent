import type { languages } from 'monaco-editor';
import { getArrayListSuggestions } from './arrayList';
import { getHashMapSuggestions } from './hashMap';
import { getListSuggestions } from './list';
import { getSetSuggestions } from './set';
import { getQueueSuggestions } from './queue';
import { getStackSuggestions } from './stack';
import { getDequeSuggestions } from './deque';

import { getJavaRange, extractJavaVariables } from './utils';
import { getGeneralSuggestions } from './getGeneralSuggestions';

export function initJavaCompletion(monaco: typeof import('monaco-editor')) {
    monaco.languages.register({ id: 'java' });

    monaco.languages.registerCompletionItemProvider('java', {
        provideCompletionItems: (model, position) => {
            const word = model.getWordUntilPosition(position);
            const range = getJavaRange(position, word); // 获取光标位置的范围

            const code = model.getValue(); // 获取整个代码
            const variables = extractJavaVariables(code, position); // 提取变量

            // 提供变量补全提示
            const variableSuggestions: { label: string; kind: languages.CompletionItemKind; insertText: string; documentation: string; range: any; }[] = [];
            variables.forEach(({ type }, name) => {
                variableSuggestions.push({
                    label: name,
                    kind: monaco.languages.CompletionItemKind.Variable,
                    insertText: name,
                    documentation: `Variable of type ${type}`,
                    range: range
                });
            });

            // 获取当前行的内容并判断是否有“.”
            const lineContent = model.getLineContent(position.lineNumber);
            const textBeforeCursor = lineContent.substring(0, position.column - 1).trim();
            const lastDotIndex = textBeforeCursor.lastIndexOf('.');
            let methodSuggestions: { label: string; kind: languages.CompletionItemKind; insertText: string; documentation: string; range: any; }[] = [];
            let isDotAfterVariable = false;

            // 检查是否有“.”和变量，并获取该变量类型的相应方法提示
            if (lastDotIndex !== -1) {
                const varName = textBeforeCursor.substring(0, lastDotIndex).trim();

                if (variables.has(varName)) {
                    const varInfo = variables.get(varName);
                    isDotAfterVariable = true;
                    // 根据变量类型返回相应的成员方法提示
                    switch (varInfo.type) {
                        case 'ArrayList':
                            methodSuggestions = getArrayListSuggestions(monaco, range);
                            break;
                        case 'HashMap':
                            methodSuggestions = getHashMapSuggestions(monaco, range);
                            break;
                        case 'List':
                            methodSuggestions = getListSuggestions(monaco, range);
                            break;
                        case 'Set':
                            methodSuggestions = getSetSuggestions(monaco, range);
                            break;
                        case 'Queue':
                            methodSuggestions = getQueueSuggestions(monaco, range);
                            break;
                        case 'Stack':
                            methodSuggestions = getStackSuggestions(monaco, range);
                            break;
                        case 'Deque':
                            methodSuggestions = getDequeSuggestions(monaco, range);
                            break;
                        default:
                            break;
                    }

                }
            }

            // 如果没有"."或者未识别出变量，返回通用的建议和变量提示
            if (!isDotAfterVariable) {
                const generalSuggestions = getGeneralSuggestions(monaco, range);
                return {
                    suggestions: [...generalSuggestions, ...variableSuggestions]
                };
            } else {
                return {
                    suggestions: [...methodSuggestions]
                };
            }
        }
    });
}
