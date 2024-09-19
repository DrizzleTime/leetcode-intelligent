export function extractJavaVariables(code: string, position: any) {
    // 改进正则表达式，匹配泛型声明 (如 ArrayList<int> list)
    const variableRegex = /\b(?:ArrayList|List|Set|Map|Queue|Stack|Deque|LinkedList|HashMap|HashSet|TreeMap|TreeSet|PriorityQueue)\s*<[^>]+>\s+(\w+)\s*=/g;
    const basicTypeRegex = /\b(?:int|float|double|char|boolean|String|byte|short|long)\s+(\w+)\s*;/g; // 基本类型匹配
    const funcParamRegex = /\(([^)]*)\)/g; // 提取函数参数列表

    const variables = new Map<string, { type: string, kind: string }>();

    // 仅解析光标之前的代码
    const lines = code.split('\n').slice(0, position.lineNumber - 1);
    let currentLine = code.split('\n')[position.lineNumber - 1].substring(0, position.column - 1);
    lines.push(currentLine);
    const codeBeforeCursor = lines.join('\n');

    // 提取泛型类型变量（如 ArrayList<int> list = new ArrayList<>()）
    let match;
    while ((match = variableRegex.exec(codeBeforeCursor)) !== null) {
        const varName = match[1]; // 获取变量名
        variables.set(varName, { type: "ArrayList", kind: "variable" }); // 设置为泛型类型
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


export function getJavaRange(position: any, word: any) {
    return {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
    };
}
