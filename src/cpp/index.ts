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
            const variables = extractVariables(code, position); // 传入当前光标位置，获取局部变量和全局变量
    
            const variableSuggestions: { label: string; kind: languages.CompletionItemKind; insertText: string; documentation: string; range: { startLineNumber: any; endLineNumber: any; startColumn: any; endColumn: any; }; }[] = [];
            variables.forEach((type, name) => {
                variableSuggestions.push({
                    label: name,  // 只提示变量名，而不是完整声明
                    kind: monaco.languages.CompletionItemKind.Variable,
                    insertText: name,
                    documentation: `Variable of type ${type}`,
                    range: range
                });
            });
    
            const lineContent = model.getLineContent(position.lineNumber);
            const textBeforeCursor = lineContent.substring(0, position.column - 1).trim();
            const lastDotIndex = textBeforeCursor.lastIndexOf('.');
            let functionSuggestions: ({ label: string; kind: languages.CompletionItemKind; insertText: string; insertTextRules: languages.CompletionItemInsertTextRule; documentation: string; range: any; } | { label: string; kind: languages.CompletionItemKind; insertText: string; documentation: string; range: any; insertTextRules?: undefined; })[] = [];
            let isDotAfterVariable = false;
    
            if (lastDotIndex !== -1) {
                const varName = textBeforeCursor.substring(0, lastDotIndex).trim();
                if (variables.has(varName)) {
                    const varType = variables.get(varName);
                    isDotAfterVariable = true;
    
                    if (varType?.startsWith('vector')) {
                        functionSuggestions = getVectorSuggestions(monaco, range);
                    } else if (varType?.startsWith('stack')) {
                        functionSuggestions = getStackSuggestions(monaco, range);
                    } else if (varType?.startsWith('queue')) {
                        functionSuggestions = getQueueSuggestions(monaco, range);
                    } else if (varType?.startsWith('deque')) {
                        functionSuggestions = getDequeSuggestions(monaco, range);
                    } else if (varType?.startsWith('map')) {
                        functionSuggestions = getMapSuggestions(monaco, range);
                    } else if (varType?.startsWith('unordered_map')) {
                        functionSuggestions = getUnorderedMapSuggestions(monaco, range);
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
