export function getQueueSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'push',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'push(${1:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Inserts an element at the end of the queue.',
            range: range
        },
        {
            label: 'pop',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'pop();',
            documentation: 'Removes the next element in the queue.',
            range: range
        },
        {
            label: 'front',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'front()',
            documentation: 'Accesses the next element in the queue.',
            range: range
        },
        {
            label: 'back',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'back()',
            documentation: 'Accesses the last element in the queue.',
            range: range
        },
        {
            label: 'empty',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'empty()',
            documentation: 'Checks if the queue is empty.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size()',
            documentation: 'Returns the number of elements in the queue.',
            range: range
        },
        {
            label: 'emplace',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'emplace(${1:args});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Constructs and inserts a new element at the end of the queue.',
            range: range
        },
        {
            label: 'swap',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'swap(${1:other_queue});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Exchanges the contents of the queue with another.',
            range: range
        }
    ];
}
