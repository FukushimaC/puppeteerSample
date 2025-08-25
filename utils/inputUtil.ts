import { Page } from 'puppeteer';
import readline from 'readline';

export const setupDialogHandler = (page: Page, promptInput: string = 'default Input') => {
    // ダイアログの自動操作用イベントを定義する
    page.on('dialog', async (dialog) => {
        switch (dialog.type()) {
            case 'alert':
            case 'confirm':
                await dialog.accept();
                break;
            case 'prompt':
                await dialog.accept(promptInput);
                break;
            default:
                await dialog.dismiss();
        }
    });
};

export const askQuestion = (query: string) => {
    // コンソールへのユーザーの入力を待つ
    // 認証用コードなどの都度変わる値の入力や、ロボットか人間かのチェックを通るための手動操作待ちなどに使う。
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) =>
        rl.question(query, (ans) => {
            rl.close();
            resolve(ans);
        })
    );
};
