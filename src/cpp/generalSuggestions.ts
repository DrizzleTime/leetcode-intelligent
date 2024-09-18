export function getGeneralSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'cout',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'cout << $1 << endl;',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Standard output stream',
            range: range
        },
        {
            label: 'cin',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'cin >> $1;',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Standard input stream',
            range: range
        },
        {
            label: 'for (auto x : num)',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'for (auto ${1:x} : ${2:container}) {\n\t$0\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Range-based for loop using auto',
            range: range
        },
        {
            label: 'for',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'for (int ${1:i} = 0; ${1:i} < ${2:n}; ${1:i}++) {\n\t$0\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'For loop',
            range: range
        },
        {
            label: 'while',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'while (${1:condition}) {\n\t$0\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'While loop',
            range: range
        },
        {
            label: 'vector',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'vector<${1:int}> ${2:vec};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::vector',
            range: range
        },
        {
            label: 'stack',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'stack<${1:int}> ${2:stk};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::stack',
            range: range
        },
        {
            label: 'queue',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'queue<${1:int}> ${2:q};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::queue',
            range: range
        },
        {
            label: 'deque',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'deque<${1:int}> ${2:dq};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::deque',
            range: range
        },
        {
            label: 'map',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'map<${1:int}, ${2:int}> ${3:m};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::map',
            range: range
        },
        {
            label: 'unordered_map',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'unordered_map<${1:int}, ${2:int}> ${3:umap};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::unordered_map',
            range: range
        },
        {
            label: 'set',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'set<${1:int}> ${2:s};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::set',
            range: range
        },
        {
            label: 'unordered_set',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'unordered_set<${1:int}> ${2:uset};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::unordered_set',
            range: range
        },
        {
            label: 'multimap',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'multimap<${1:int}, ${2:int}> ${3:mm};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::multimap',
            range: range
        },
        {
            label: 'multiset',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'multiset<${1:int}> ${2:ms};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::multiset',
            range: range
        },
        {
            label: 'priority_queue',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'priority_queue<${1:int}> ${2:pq};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::priority_queue',
            range: range
        },
        {
            label: 'array',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'array<${1:int}, ${2:N}> ${3:arr};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::array',
            range: range
        },
        {
            label: 'pair',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'pair<${1:int}, ${2:int}> ${3:p};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::pair',
            range: range
        },
        {
            label: 'forward_list',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'forward_list<${1:int}> ${2:fl};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::forward_list',
            range: range
        },
        {
            label: 'unordered_multimap',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'unordered_multimap<${1:int}, ${2:int}> ${3:umm};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::unordered_multimap',
            range: range
        },
        {
            label: 'unordered_multiset',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'unordered_multiset<${1:int}> ${2:ums};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::unordered_multiset',
            range: range
        },
        {
            label: 'tuple',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'tuple<${1:int}, ${2:int}, ${3:int}> ${4:tup};',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a std::tuple',
            range: range
        },
        {
            label: 'sort',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'sort(${1:begin}, ${2:end});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Sorts the range [begin, end).',
            range: range
        },
        {
            label: 'max',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'max(${1:a}, ${2:b});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns the maximum of two values.',
            range: range
        },
        {
            label: 'min',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'min(${1:a}, ${2:b});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns the minimum of two values.',
            range: range
        },
        {
            label: 'reverse',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'reverse(${1:begin}, ${2:end});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Reverses the range [begin, end).',
            range: range
        },
        {
            label: 'find',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'find(${1:begin}, ${2:end}, ${3:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Finds the first occurrence of value in the range [begin, end).',
            range: range
        },
        {
            label: 'accumulate',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'accumulate(${1:begin}, ${2:end}, ${3:init});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Accumulates the sum of the range [begin, end) starting from init.',
            range: range
        },
        {
            label: 'binary_search',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'binary_search(${1:begin}, ${2:end}, ${3:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Checks if value exists in the sorted range [begin, end).',
            range: range
        },
        {
            label: 'lower_bound',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'lower_bound(${1:begin}, ${2:end}, ${3:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns an iterator pointing to the first element not less than value in the sorted range [begin, end).',
            range: range
        },
        {
            label: 'upper_bound',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'upper_bound(${1:begin}, ${2:end}, ${3:value});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Returns an iterator pointing to the first element greater than value in the sorted range [begin, end).',
            range: range
        },
        {
            label: 'unique',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'unique(${1:begin}, ${2:end});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Removes consecutive duplicates in the range [begin, end).',
            range: range
        }
    ];
}
