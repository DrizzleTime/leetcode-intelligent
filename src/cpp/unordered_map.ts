export function getUnorderedMapSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'insert',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'insert(${1:pair});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Inserts a pair (key, value) into the unordered_map.',
            range: range
        },
        {
            label: 'erase',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'erase(${1:key});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Erases the element by key from the unordered_map.',
            range: range
        },
        {
            label: 'find',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'find(${1:key})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Finds an element by its key.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size()',
            documentation: 'Returns the number of elements in the unordered_map.',
            range: range
        },
        {
            label: 'clear',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'clear();',
            documentation: 'Removes all elements from the unordered_map.',
            range: range
        },
        {
            label: 'empty',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'empty()',
            documentation: 'Checks if the unordered_map is empty.',
            range: range
        },
        {
            label: 'at',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'at(${1:key})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Accesses an element by key and returns a reference to its value.',
            range: range
        },
        {
            label: 'count',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'count(${1:key})',
            documentation: 'Returns the number of elements matching the key (either 0 or 1 in an unordered_map).',
            range: range
        }
    ];
}
