
export function getArrayListSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'add',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'add(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Adds an element to the ArrayList.',
            range: range
        },
        {
            label: 'remove',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'remove(${1:index});',
            documentation: 'Removes the element at the specified index.',
            range: range
        },
        {
            label: 'get',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'get(${1:index});',
            documentation: 'Returns the element at the specified index.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size();',
            documentation: 'Returns the number of elements in the ArrayList.',
            range: range
        }
        // 其他 ArrayList 方法
    ];
}
