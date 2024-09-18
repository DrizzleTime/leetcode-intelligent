export function getStackSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'push',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'push(${1:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Pushes an element onto the stack.',
            range: range
        },
        {
            label: 'pop',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'pop();',
            documentation: 'Removes the top element of the stack.',
            range: range
        },
        {
            label: 'top',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'top()',
            documentation: 'Returns a reference to the top element of the stack.',
            range: range
        },
        {
            label: 'empty',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'empty()',
            documentation: 'Checks whether the stack is empty.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size()',
            documentation: 'Returns the number of elements in the stack.',
            range: range
        },
        {
            label: 'emplace',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'emplace(${1:args});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Constructs and inserts an element at the top of the stack.',
            range: range
        },
        {
            label: 'swap',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'swap(${1:other_stack});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Exchanges the contents of the container with another stack.',
            range: range
        }
    ];
}
