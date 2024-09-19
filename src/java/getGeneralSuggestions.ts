export function getGeneralSuggestions(monaco: typeof import('monaco-editor'), range: any) {
    return [
        {
            label: 'System.out.println',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'System.out.println(${1:message});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Prints a message to the standard output',
            range: range
        },
        {
            label: 'for (int i = 0; i < n; i++)',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'for (int ${1:i} = 0; ${1:i} < ${2:n}; ${1:i}++) {\n\t$0\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Basic for loop',
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
            label: 'if',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'if (${1:condition}) {\n\t$0\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'If statement',
            range: range
        },
        {
            label: 'ArrayList',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'ArrayList<${1:type}> ${2:list} = new ArrayList<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates an ArrayList',
            range: range
        },
        {
            label: 'HashMap',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'HashMap<${1:K}, ${2:V}> ${3:map} = new HashMap<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a HashMap',
            range: range
        },
        {
            label: 'HashSet',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'HashSet<${1:type}> ${2:set} = new HashSet<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a HashSet',
            range: range
        },
        {
            label: 'LinkedList',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'LinkedList<${1:type}> ${2:list} = new LinkedList<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a LinkedList',
            range: range
        },
        {
            label: 'Stack',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'Stack<${1:type}> ${2:stack} = new Stack<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a Stack',
            range: range
        },
        {
            label: 'Queue',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'Queue<${1:type}> ${2:queue} = new LinkedList<>(); // 使用 LinkedList 实现队列',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a Queue',
            range: range
        },
        {
            label: 'PriorityQueue',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'PriorityQueue<${1:type}> ${2:pq} = new PriorityQueue<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a PriorityQueue',
            range: range
        },
        {
            label: 'Deque',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'Deque<${1:type}> ${2:deque} = new ArrayDeque<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a Deque',
            range: range
        },
        {
            label: 'Set',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'Set<${1:type}> ${2:set} = new HashSet<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a Set',
            range: range
        },
        {
            label: 'TreeMap',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'TreeMap<${1:K}, ${2:V}> ${3:map} = new TreeMap<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a TreeMap',
            range: range
        },
        {
            label: 'TreeSet',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'TreeSet<${1:type}> ${2:set} = new TreeSet<>();',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Creates a TreeSet',
            range: range
        },
    ];
}
