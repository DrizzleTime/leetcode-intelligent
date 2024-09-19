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
            documentation: 'Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.',
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
            label: 'containsValue',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'containsValue(${1:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns true if this map maps one or more keys to the specified value.',
            range: range
        },
        {
            label: 'keySet',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'keySet();',
            documentation: 'Returns a Set view of the keys contained in this map.',
            range: range
        },
        {
            label: 'size',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'size();',
            documentation: 'Returns the number of key-value mappings in this map.',
            range: range
        },
        {
            label: 'clear',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'clear();',
            documentation: 'Removes all of the mappings from this map. The map will be empty after this call.',
            range: range
        },
        {
            label: 'values',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'values();',
            documentation: 'Returns a Collection view of the values contained in this map.',
            range: range
        },
        {
            label: 'entrySet',
            kind: monaco.languages.CompletionItemKind.Method,
            insertText: 'entrySet();',
            documentation: 'Returns a Set view of the mappings contained in this map.',
            range: range
        }
    ];
}
