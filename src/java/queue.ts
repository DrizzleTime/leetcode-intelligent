export function getQueueSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'offer',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'offer(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Inserts the specified element into this queue.',
            range: range
        },
        {
            label: 'poll',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'poll();',
            documentation: 'Retrieves and removes the head of this queue, or returns null if this queue is empty.',
            range: range
        },
        {
            label: 'peek',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'peek();',
            documentation: 'Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size();',
            documentation: 'Returns the number of elements in this queue.',
            range: range
        }
    ];
}
