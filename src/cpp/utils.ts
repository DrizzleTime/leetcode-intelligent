export function extractVariables(code: string, position: any) {
    const variableRegex = /\b(?:vector|stack|queue|deque|map|unordered_map|set|unordered_set|list|forward_list|multiset|unordered_multiset|multimap|unordered_multimap|priority_queue|pair|tuple|array|int|float|double|char|bool|string)\s+(\w+)\s*(\[.*?\])?;/g;
    const funcParamRegex = /\(([^)]*)\)/g; // 提取函数参数列表
    const variables = new Map<string, string>();

    // 提取全局变量
    let match;
    while ((match = variableRegex.exec(code)) !== null) {
        const [, varName] = match;
        variables.set(varName, "global");
    }

    // 提取函数形参
    const lines = code.split('\n');
    let insideFunction = false;
    let currentScopeStartLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // 进入函数体时提取函数形参
        if (line.match(/^\w+\s+\w+\s*\(/)) {
            insideFunction = true;
            currentScopeStartLine = i;

            // 提取函数参数
            const funcMatch = funcParamRegex.exec(line);
            if (funcMatch) {
                const params = funcMatch[1].split(',');
                params.forEach(param => {
                    const parts = param.trim().split(/\s+/);
                    const paramName = parts[parts.length - 1];
                    variables.set(paramName, "parameter");
                });
            }
        }

        // 解析函数体中的局部变量
        if (insideFunction) {
            while ((match = variableRegex.exec(line)) !== null) {
                const [varName] = match;
                variables.set(varName, "local");
            }

            // 函数体结束，退出函数作用域
            if (line.includes('}')) {
                insideFunction = false;
            }
        }
    }

    return variables;
}



export function getRange(position: any, word: any) {
    return {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
    };
}
