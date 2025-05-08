"use strict";
const puppeteer = require('puppeteer'); // v23.0.0 or later
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 3
    });
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);
    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 489,
            height: 910
        });
    }
    {
        const targetPage = page;
        await targetPage.goto('https://qiita.com/taiponrock/items/9001ae194571feb63a5e');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(12) img'),
            targetPage.locator('::-p-xpath(//*[@id=\\"personal-public-article-body\\"]/div/p[12]/a/img)'),
            targetPage.locator(':scope >>> p:nth-of-type(12) img')
        ])
            .setTimeout(timeout)
            .click({
            offset: {
                x: 161,
                y: 149.515625,
            },
        });
    }
    await browser.close();
})().catch(err => {
    console.error(err);
    process.exit(1);
});
