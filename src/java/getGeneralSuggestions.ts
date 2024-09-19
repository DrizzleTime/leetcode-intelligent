import type { languages } from 'monaco-editor';

export function getGeneralSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'System.out.println',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'System.out.println(${1:message});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Prints a message to the standard output',
            range: range
        },
        {
            label: 'for (int i = 0; i < n; i++)',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'for (int ${1:i} = 0; ${1:i} < ${2:n}; ${1:i}++) {\n\t$0\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Basic for loop',
            range: range
        },
        {
            label: 'while',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'while (${1:condition}) {\n\t$0\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'While loop',
            range: range
        },
        {
            label: 'if',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'if (${1:condition}) {\n\t$0\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'If statement',
            range: range
        },
        {
            label: 'ArrayList',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'ArrayList<${1:type}> ${2:list} = new ArrayList<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates an ArrayList',
            range: range
        },
        {
            label: 'HashMap',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'HashMap<${1:K}, ${2:V}> ${3:map} = new HashMap<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a HashMap',
            range: range
        },
        {
            label: 'HashSet',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'HashSet<${1:type}> ${2:set} = new HashSet<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a HashSet',
            range: range
        },
        // 可以继续添加更多通用提示
    ];
}
