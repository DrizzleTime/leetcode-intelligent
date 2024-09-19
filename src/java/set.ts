export function getSetSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'add',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'add(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Adds the specified element to this set if it is not already present.',
            range: range
        },
        {
            label: 'contains',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'contains(${1:element});',
            documentation: 'Returns true if this set contains the specified element.',
            range: range
        },
        {
            label: 'remove',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'remove(${1:element});',
            documentation: 'Removes the specified element from this set if it is present.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size();',
            documentation: 'Returns the number of elements in this set.',
            range: range
        }
    ];
}
