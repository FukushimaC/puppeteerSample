import puppeteer from 'puppeteer';

// puppeteerオブジェクト(BrowserやPage)関連の操作を定義

/**
 *
 * @param height ブラウザやviewPortの高さ
 * @param width ブラウザやviewPortの幅
 * @param timeout タイムアウト時間（ミリ秒）
 * @param slowMo puppeteerの自動操作の合間の遅延時間（ミリ秒）
 * @param headless ヘッドレスブラウザの使用
 * @returns {browser, page, timeout} 自動操作用のpuppeteerオブジェクト(Browser, Page)や以降でも使用するtimeoutを返す
 */

export async function createBrowserSession(
    height = 800,
    width = 1200,
    timeout = 5000,
    slowMo = 0,
    headless = false
) {
    // Chromeからのダウンロード時点で、以下のような問題が発生しうるため、おおむね良い具合に使える設定で初期化するように共通化した。
    // ・処理が速すぎてイベントが起動しない　→ slowMoを設定（5程度がおすすめ）
    // ・ブラウザのサイズとviewPortのサイズが違い、表示が崩れる　→ args: [`--window-size=${displaySize.height},${displaySize.width}`]
    // ・headlessモードだと進捗が見えづらい　→ headless: false
    const displaySize = {
        height: height,
        width: width,
    };
    const browser = await puppeteer.launch({
        headless: headless,
        slowMo: slowMo,
        args: [`--window-size=${displaySize.height},${displaySize.width}`],
        timeout: timeout,
    });

    const page = await browser.newPage();
    page.setDefaultTimeout(timeout);
    // timeoutはRecorderから生成された処理に含まれるため、ここでは使用値をそのまま返却する
    await page.setViewport({
        width: width,
        height: height
    })
    return { browser, page, timeout };
}
