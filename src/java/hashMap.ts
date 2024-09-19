
export function getHashMapSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'put',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'put(${1:key}, ${2:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Associates the specified value with the specified key in this map.',
            range: range
        },
        {
            label: 'get',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'get(${1:key});',
            documentation: 'Returns the value to which the specified key is mapped.',
            range: range
        },
        {
            label: 'remove',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'remove(${1:key});',
            documentation: 'Removes the mapping for the specified key from this map if present.',
            range: range
        },
        {
            label: 'containsKey',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'containsKey(${1:key});',
            documentation: 'Returns true if this map contains a mapping for the specified key.',
            range: range
        },
        {
            label: 'keySet',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'keySet();',
            documentation: 'Returns a Set view of the keys contained in this map.',
            range: range
        },
        // 可以继续添加更多方法提示
    ];
}
