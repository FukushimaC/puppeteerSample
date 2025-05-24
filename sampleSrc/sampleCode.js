// ブロック単位で自動化
const puppeteer = require('puppeteer'); // v23.0.0 or later
const { createBrowserSession } = require('../utils/browserUtil');
const { uploadFile } = require('../utils/fileUtil');
const { setupDialogHandler, askQuestion } = require('../utils/inputUtil');
(async () => {
    const { browser, page, timeout } = await createBrowserSession();
    const targetPage = page;
    {
        await targetPage.setViewport({
            width: 1194,
            height: 828,
        });
    }

    const path = require('path');

    const targetPath =
        'file:///C:/Users/thu/Desktop/C%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%88%E3%82%AB%E3%83%83%E3%83%88%E9%9B%86/projects/puppeteerSample/sampleSrc/sample/index.html';

    {
        await targetPage.goto(targetPath);
    }
    // ダイアログの操作は自動化されないため、予めイベントハンドラを設定しておく
    await setupDialogHandler(targetPage);

    const submitForm = async (inputText) => {
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(テキスト入力:)'),
                targetPage.locator('#textInput'),
                targetPage.locator('::-p-xpath(//*[@id=\\"textInput\\"])'),
                targetPage.locator(':scope >>> #textInput'),
            ])
                .setTimeout(timeout)
                .fill(inputText);
        }
        // NOTE: ファイルのアップロードはエクスポートしたコードそのままだと実行できないため処理を共通化している
        {
            const targetPage = page;
            await uploadFile(
                targetPage,
                ['#fileInput', 'input[name="image"]', 'input[type="file"]'],
                '/penguin.png'
            );
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(モーダルを表示)'),
                targetPage.locator('section:nth-of-type(2) > button'),
                targetPage.locator('::-p-xpath(/html/body/section[2]/button)'),
                targetPage.locator(':scope >>> section:nth-of-type(2) > button'),
                targetPage.locator('::-p-text(モーダルを表示)'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 12,
                        y: 0.40625,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('section:nth-of-type(2) label'),
                targetPage.locator('::-p-xpath(//*[@id=\\"modal\\"]/label)'),
                targetPage.locator(':scope >>> section:nth-of-type(2) label'),
                targetPage.locator('::-p-text(〇〇に同意する)'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 98.8125,
                        y: 11.703125,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(閉じる)'),
                targetPage.locator('#modal > button'),
                targetPage.locator('::-p-xpath(//*[@id=\\"modal\\"]/button)'),
                targetPage.locator(':scope >>> #modal > button'),
                targetPage.locator('::-p-text(閉じる)'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 20.8125,
                        y: 20.703125,
                    },
                });
        }
        {
            const targetPage = page;
            let frame = targetPage.mainFrame();
            frame = frame.childFrames()[0];
            await puppeteer.Locator.race([
                frame.locator('#insideIframe'),
                frame.locator('::-p-xpath(//*[@id=\\"insideIframe\\"])'),
                frame.locator(':scope >>> #insideIframe'),
                frame.locator('::-p-text(iframeテスト)'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 124,
                        y: 7,
                    },
                });
        }
        {
            const targetPage = page;
            let frame = targetPage.mainFrame();
            frame = frame.childFrames()[0];
            await targetPage.keyboard.down('Control');
        }
        {
            const targetPage = page;
            let frame = targetPage.mainFrame();
            frame = frame.childFrames()[0];
            await puppeteer.Locator.race([
                frame.locator('#insideIframe'),
                frame.locator('::-p-xpath(//*[@id=\\"insideIframe\\"])'),
                frame.locator(':scope >>> #insideIframe'),
                frame.locator('::-p-text(iframeテスト)'),
            ])
                .setTimeout(timeout)
                .fill(
                    '寿限無、寿限無 五劫の擦り切れ 海砂利水魚の 水行末 雲来末 風来末 食う寝る処に住む処 やぶら小路のぶら小路 パイポパイポ パイポのシューリンガン シューリンガンのグーリンダイ グーリンダイのポンポコピーのポンポコナの 長久命の長助'
                );
        }
        {
            const targetPage = page;
            let frame = targetPage.mainFrame();
            frame = frame.childFrames()[1];
            await puppeteer.Locator.race([
                frame.locator('::-p-aria(テキスト入力:)'),
                frame.locator('#textInput'),
                frame.locator('::-p-xpath(//*[@id=\\"textInput\\"])'),
                frame.locator(':scope >>> #textInput'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 76,
                        y: 2.1875,
                    },
                });
        }
        {
            const targetPage = page;
            let frame = targetPage.mainFrame();
            frame = frame.childFrames()[1];
            const frameInput = await askQuestion('iframe内のテキストを入力してください：');
            await puppeteer.Locator.race([
                frame.locator('::-p-aria(テキスト入力:)'),
                frame.locator('#textInput'),
                frame.locator('::-p-xpath(//*[@id=\\"textInput\\"])'),
                frame.locator(':scope >>> #textInput'),
            ])
                .setTimeout(timeout)
                .fill(frameInput);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(送信)'),
                targetPage.locator('#submitButton'),
                targetPage.locator('::-p-xpath(//*[@id=\\"submitButton\\"])'),
                targetPage.locator(':scope >>> #submitButton'),
                targetPage.locator('::-p-text(送信)'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 30,
                        y: 19.21875,
                    },
                });
        }
    };

    const inputTexts = ['相田', '上田', '織田', 'Abe', 'Cdo'];
    for (const inputText of inputTexts) {
        await submitForm(inputText);
        await page.reload();
    }
})().catch((err) => {
    console.error(err);
});
