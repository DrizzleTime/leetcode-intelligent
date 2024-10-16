import {initCppCompletion} from './cpp';
import {initJavaCompletion} from './java';
import * as monaco from 'monaco-editor';

function waitForMonaco(): Promise<typeof monaco> {
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if ((window as unknown as { monaco: typeof monaco }).monaco) {
                clearInterval(interval);
                resolve((window as unknown as { monaco: typeof monaco }).monaco);
            }
        }, 100);
    });
}


async function init() {
    const monaco = await waitForMonaco();
    monaco.editor.onDidCreateEditor((editor) => {
        setTimeout(() => {
            editor.updateOptions({suggestOnTriggerCharacters: true})
            editor.updateOptions({quickSuggestions: {comments: 'on', strings: 'on', other: 'on'}})
        }, 500)
    })
    initCppCompletion(monaco);
    initJavaCompletion(monaco);

}

window.addEventListener('load', init);
