// ファイル入出力関連の操作を定義
import path from 'path';
import fs from 'fs';
import { ElementHandle, Page } from 'puppeteer';

export const readCsv = (filePath: string) => {
    // 行単位で、以下のようなオブジェクトを返却する。
    // [{"columnA": "内容1", "columnB": 1000}, {"columnA": "内容2", "columnB": 2000}]
    const csvContent = fs.readFileSync(filePath, 'utf8');
    const lines = csvContent.trim().split('\n');
    const headers = lines[0].split(',').map((h) => h.trim());

    return lines.slice(1).map((line) => {
        const values = line.split(',').map((v) => v.trim());
        const row: { [key: string]: string } = {};
        headers.forEach((key, index) => {
            row[key] = values[index] ?? null;
        });
        return row;
    });
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

/**
 * ページ全体をスクロールしつつキャプチャを取得する。
 * @param page 現在開いているページのPageオブジェクト
 * @param directory 保存先のディレクトリ(指定しない場合は現在のディレクトリに.screenshotフォルダを作る)
 * @param filePrefix ファイル保存じの名前の前半。（スクロールが必要な場合はこの文字列に連番を付ける）
 * デフォルトでは、表示中のURLの"/"を"_"に置き換え、英数字以外の文字を削除したものを使う。
 */
export const screenshotWholePage = async (
    page: Page,
    directory: string | null,
    filePrefix: string | null
) => {
    await page.evaluate(() => window.scrollTo(0, 0));

    // スクロールしながらキャプチャ
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    const viewportHeight = 720;
    let scrollY = 0;
    let index = 0;

    const outputDir = directory ? directory : __dirname + '/.screenshot';
    fs.mkdirSync(outputDir, { recursive: true });

    const urlSlashReplaced = decodeURIComponent(page.url()).replace(/[/]/g, '_');
    // アンダーバー以外の記号を全て削除する(ファイル名に使えない場合があるため)
    const replacedPrefix = urlSlashReplaced.replace(/[^a-zA-Z0-9_\u3040-\u30FF\u4E00-\u9FFF]/g, '');
    const prefix = filePrefix ? filePrefix : replacedPrefix;

    while (scrollY < totalHeight) {
        const fileName = path.join(outputDir, `${prefix}_${index.toString().padStart(2, '0')}.png`);
        await page.screenshot({ path: fileName });
        index++;

        scrollY += viewportHeight;
        await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    }
};
