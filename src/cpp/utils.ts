export function extractVariables(code: string, position: any) {
    // 支持匹配模板类型（例如 vector<int>, map<int, int>）
    const variableRegex = /\b(?:vector|stack|queue|deque|map|unordered_map|set|unordered_set|list|forward_list|multiset|unordered_multiset|multimap|unordered_multimap|priority_queue|pair|tuple|array)\s*<[^>]+>\s+(\w+)\s*;/g;
    const basicTypeRegex = /\b(?:int|float|double|char|bool|string|auto)\s+(\w+)\s*;/g; // 基本类型匹配
    const funcParamRegex = /\(([^)]*)\)/g; // 提取函数参数列表

    const variables = new Map<string, { type: string, kind: string }>();

    // 仅解析光标之前的代码
    const lines = code.split('\n').slice(0, position.lineNumber - 1);
    let currentLine = code.split('\n')[position.lineNumber - 1].substring(0, position.column - 1);
    lines.push(currentLine);
    const codeBeforeCursor = lines.join('\n');

    // 提取模板类型变量（如 vector<int>）
    let match;
    while ((match = variableRegex.exec(codeBeforeCursor)) !== null) {
        const varName = match[1]; // 获取变量名
        variables.set(varName, { type: "template", kind: "variable" }); // 设置为模板类型
    }

    // 提取基本类型变量
    while ((match = basicTypeRegex.exec(codeBeforeCursor)) !== null) {
        const varName = match[1]; // 获取变量名
        variables.set(varName, { type: "basic", kind: "variable" }); // 设置为基本类型
    }

    // 提取函数形参
    const funcMatch = funcParamRegex.exec(codeBeforeCursor);
    if (funcMatch) {
        const params = funcMatch[1].split(',');
        params.forEach(param => {
            const parts = param.trim().split(/\s+/);
            const paramName = parts[parts.length - 1]; // 获取形参名
            variables.set(paramName, { type: "parameter", kind: "parameter" }); // 设置为形参
        });
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
