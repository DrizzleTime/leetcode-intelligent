export function getDequeSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'push_back',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'push_back(${1:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Adds an element to the end of the deque.',
            range: range
        },
        {
            label: 'push_front',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'push_front(${1:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Adds an element to the front of the deque.',
            range: range
        },
        {
            label: 'pop_back',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'pop_back();',
            documentation: 'Removes the last element of the deque.',
            range: range
        },
        {
            label: 'pop_front',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'pop_front();',
            documentation: 'Removes the first element of the deque.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size()',
            documentation: 'Returns the number of elements in the deque.',
            range: range
        },
        {
            label: 'clear',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'clear();',
            documentation: 'Removes all elements from the deque.',
            range: range
        },
        {
            label: 'at',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'at(${1:index})',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns a reference to the element at the specified position.',
            range: range
        },
        {
            label: 'empty',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'empty()',
            documentation: 'Checks if the deque is empty.',
            range: range
        },
        {
            label: 'front',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'front()',
            documentation: 'Returns a reference to the first element in the deque.',
            range: range
        },
        {
            label: 'back',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'back()',
            documentation: 'Returns a reference to the last element in the deque.',
            range: range
        },
        {
            label: 'insert',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'insert(${1:position}, ${2:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Inserts elements at the specified position.',
            range: range
        },
        {
            label: 'erase',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'erase(${1:position});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Erases elements at the specified position.',
            range: range
        },
        {
            label: 'resize',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'resize(${1:new_size});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Resizes the container to contain the specified number of elements.',
            range: range
        },
        {
            label: 'shrink_to_fit',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'shrink_to_fit();',
            documentation: 'Reduces the capacity of the deque to fit its size.',
            range: range
        },
        {
            label: 'data',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'data()',
            documentation: 'Returns a direct pointer to the memory array used internally by the deque.',
            range: range
        }
    ];
}
