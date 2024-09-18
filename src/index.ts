import { initCppCompletion } from './cpp';
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
    initCppCompletion(monaco);
}

window.addEventListener('load', init);
