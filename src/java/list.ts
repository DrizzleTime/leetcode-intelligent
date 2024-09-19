export function getListSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'add',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'add(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Appends the specified element to the end of this list.',
            range: range
        },
        {
            label: 'get',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'get(${1:index});',
            documentation: 'Returns the element at the specified position in this list.',
            range: range
        },
        {
            label: 'remove',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'remove(${1:index});',
            documentation: 'Removes the element at the specified position in this list.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size();',
            documentation: 'Returns the number of elements in this list.',
            range: range
        }
    ];
}
