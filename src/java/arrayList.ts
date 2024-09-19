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
            label: 'set',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'set(${1:index}, ${2:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Replaces the element at the specified index with the specified element.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size();',
            documentation: 'Returns the number of elements in the ArrayList.',
            range: range
        },
        {
            label: 'clear',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'clear();',
            documentation: 'Removes all elements from the ArrayList.',
            range: range
        },
        {
            label: 'contains',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'contains(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns true if this list contains the specified element.',
            range: range
        },
        {
            label: 'indexOf',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'indexOf(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns the index of the first occurrence of the specified element, or -1 if this list does not contain the element.',
            range: range
        },
        {
            label: 'lastIndexOf',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'lastIndexOf(${1:element});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns the index of the last occurrence of the specified element, or -1 if this list does not contain the element.',
            range: range
        },
        {
            label: 'isEmpty',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'isEmpty();',
            documentation: 'Returns true if this list contains no elements.',
            range: range
        },
        {
            label: 'toArray',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'toArray();',
            documentation: 'Returns an array containing all of the elements in this list in proper sequence.',
            range: range
        }
    ];
}
