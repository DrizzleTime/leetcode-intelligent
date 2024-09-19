export function getDequeSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'addFirst',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'addFirst(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Inserts the specified element at the front of this deque.',
            range: range
        },
        {
            label: 'addLast',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'addLast(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Inserts the specified element at the end of this deque.',
            range: range
        },
        {
            label: 'removeFirst',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'removeFirst();',
            documentation: 'Removes and returns the first element from this deque.',
            range: range
        },
        {
            label: 'removeLast',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'removeLast();',
            documentation: 'Removes and returns the last element from this deque.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size();',
            documentation: 'Returns the number of elements in this deque.',
            range: range
        }
    ];
}
