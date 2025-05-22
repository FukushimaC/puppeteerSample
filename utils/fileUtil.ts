// ファイル入出力関連の操作を定義
import path from 'path';
import { ElementHandle, Page } from 'puppeteer';

export const readCsv = async (fileName: string) => {
    // TODO: 後で処理を定義する。
    // filename未指定の場合、同階層にある{jsファイルの名前}.csvというファイルをソースとする。
    // 行単位で、以下のようなオブジェクトを返却する。
    // [{"columnA": "内容1", "columnB": 1000}, {"columnA": "内容2", "columnB": 2000}]
};

export const uploadFile = async (page: Page, selectors: string[], relativePath: string) => {
    let inputElement: ElementHandle<HTMLInputElement> | null = null;

    for (const selector of selectors) {
        inputElement = (await page.$(selector)) as ElementHandle<HTMLInputElement>;
        if (inputElement) break;
    }
    if (!inputElement) {
        throw new Error('ファイルアップロード用のinputが見つかりませんでした');
    }

    const absolutePath = path.relative(process.cwd(), __dirname + relativePath);
    await inputElement.uploadFile(absolutePath);
};
