const puppeteer = require('puppeteer'); // v23.0.0 or later
const { createBrowserSession } = require('../utils/browserUtil');
(async () => {
    const { browser, page, timeout } = await createBrowserSession();
    const targetPage = page;
    {
        await targetPage.setViewport({
            width: 1194,
            height: 828,
        });
    }

    const path = 'https://www.google.co.jp/';
    {
        await targetPage.goto(path);
    }

    // 以下、自動化処理を定義する
})().catch((err) => {
    console.error(err);
});
