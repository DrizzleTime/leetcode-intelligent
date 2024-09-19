import { extractVariables, getRange } from './utils';
import { getVectorSuggestions } from './vector';
import { getStackSuggestions } from './stack';
import { getQueueSuggestions } from './queue';
import { getGeneralSuggestions } from './generalSuggestions';
import { getDequeSuggestions } from './deque';
import { getMapSuggestions } from './map';
import { getUnorderedMapSuggestions } from './unordered_map';

import type { languages } from 'monaco-editor';

export function initCppCompletion(monaco: typeof import('monaco-editor')) {
    monaco.languages.register({ id: 'cpp' });

    monaco.languages.registerCompletionItemProvider('cpp', {
        provideCompletionItems: (model, position) => {
            const word = model.getWordUntilPosition(position);
            const range = getRange(position, word);

            const code = model.getValue();
            const variables = extractVariables(code, position); 

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

            const lineContent = model.getLineContent(position.lineNumber);
            const textBeforeCursor = lineContent.substring(0, position.column - 1).trim();
            const lastDotIndex = textBeforeCursor.lastIndexOf('.');
            let functionSuggestions: { label: string; kind: languages.CompletionItemKind; insertText: string; documentation: string; range: any; }[] = [];
            let isDotAfterVariable = false;

            if (lastDotIndex !== -1) {
                const varName = textBeforeCursor.substring(0, lastDotIndex).trim();
                if (variables.has(varName)) {
                    const varInfo = variables.get(varName);
                    isDotAfterVariable = true;

                    // 根据变量类型返回相应的成员方法提示
                    switch (varInfo.type) {
                        case 'template':
                            functionSuggestions = getVectorSuggestions(monaco, range);
                            break;
                        case 'stack':
                            functionSuggestions = getStackSuggestions(monaco, range);
                            break;
                        case 'queue':
                            functionSuggestions = getQueueSuggestions(monaco, range);
                            break;
                        case 'deque':
                            functionSuggestions = getDequeSuggestions(monaco, range);
                            break;
                        case 'map':
                            functionSuggestions = getMapSuggestions(monaco, range);
                            break;
                        case 'unordered_map':
                            functionSuggestions = getUnorderedMapSuggestions(monaco, range);
                            break;
                        default:
                            break;
                    }
                }
            }

            if (!isDotAfterVariable) {
                const generalSuggestions = getGeneralSuggestions(monaco, range);
                return {
                    suggestions: [...generalSuggestions, ...variableSuggestions]
                };
            } else {
                return {
                    suggestions: [...functionSuggestions]
                };
            }
        }
    });
}
