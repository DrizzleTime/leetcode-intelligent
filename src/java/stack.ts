export function getStackSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'push',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'push(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Pushes an item onto the top of this stack.',
            range: range
        },
        {
            label: 'pop',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'pop();',
            documentation: 'Removes the object at the top of this stack and returns that object as the value of this function.',
            range: range
        },
        {
            label: 'peek',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'peek();',
            documentation: 'Looks at the object at the top of this stack without removing it from the stack.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size();',
            documentation: 'Returns the number of elements in this stack.',
            range: range
        }
    ];
}
