"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBrowserSession = createBrowserSession;
const puppeteer_1 = __importDefault(require("puppeteer"));
async function createBrowserSession(height = 800, width = 1200, timeout = 5000, slowMo = 10, headless = false) {
    // Chromeからのダウンロード時点で、以下のような問題が発生しうるため、おおむね良い具合に使える設定で初期化するように共通化した。
    // ・処理が速すぎてイベントが起動しない　→ slowMoを設定
    // ・ブラウザのサイズとviewPortのサイズが違い、表示が崩れる　→ args: [`--window-size=${displaySize.height},${displaySize.width}`]
    // ・headlessモードだと進捗が見えづらい　→ headless: false
    const displaySize = {
        height: height,
        width: width,
    };
    const browser = await puppeteer_1.default.launch({
        headless: headless,
        slowMo: slowMo,
        args: [`--window-size=${displaySize.height},${displaySize.width}`],
        timeout: timeout,
    });
    const page = await browser.newPage();
    page.setDefaultTimeout(timeout);
    // timeoutはRecorderから生成された処理に含まれるため、ここでは使用値をそのまま返却する
    return { browser, page, timeout };
}
