// NOTE: iframeがネストされたページ（例：GoogleAppsScriptで生成したページ）を操作する場合の例
const puppeteer = require('puppeteer'); // v23.0.0 or later
const { createBrowserSession } = require('../utils/browser');
(async () => {
    const { browser, page, timeout } = await createBrowserSession();
    // const displaySize = {
    //     height: 800,
    //     width: 1200,
    // };
    // const timeout = 5000;
    // const browser = await puppeteer.launch({
    //     headless: false,
    //     slowMo: 10,
    //     args: [`--window-size=${displaySize.height},${displaySize.width}`],
    //     timeout: timeout,
    // });

    // const page = await browser.newPage();
    page.setDefaultTimeout(timeout);
    const targetPage = page;
    {
        await targetPage.setViewport({
            width: 1194,
            height: 828,
        });
    }
    {
        await targetPage.goto(
            'https://script.google.com/macros/s/AKfycbzl4e51mjn8LG7kkynoy5Rdy--DI0Izs-WfIJgwr0NxgEeGADzz3M87WAJw3nlzFMQ3/exec'
        );
    }
    const mainFrame = targetPage.mainFrame();
    const outerFrame = mainFrame.childFrames()[0];
    const frame = outerFrame.childFrames()[0];
    {
        // NOTE: Recorderから出力されたままだと、以下のように不要な待ち処理が追加される。（そのままだとtargetがundefinedになるためコメントアウト）
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);

        // NOTE: 2重にネストされたiframe内の要素の操作をする場合、Recorderから出力したコードでは動かない（正しく出力されていない）ことがあった。
        // 以下のように、外側のiframeを取得して操作するコードになっていたため、コメントアウトし、共通部で取得したframeを使用するようにする。
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(テキスト入力欄A:)'),
            frame.locator('form > label:nth-of-type(1) > input'),
            frame.locator('::-p-xpath(/html/body/form/label[1]/input)'),
            frame.locator(':scope >>> form > label:nth-of-type(1) > input'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 48.90910339355469,
                    y: 3.1676177978515625,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(テキスト入力欄A:)'),
            frame.locator('form > label:nth-of-type(1) > input'),
            frame.locator('::-p-xpath(/html/body/form/label[1]/input)'),
            frame.locator(':scope >>> form > label:nth-of-type(1) > input'),
        ])
            .setTimeout(timeout)
            .fill('高野豆腐');
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(テキスト入力欄B:)'),
            frame.locator('textarea'),
            frame.locator('::-p-xpath(/html/body/form/label[2]/textarea)'),
            frame.locator(':scope >>> textarea'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 24.909103393554688,
                    y: 7.0028533935546875,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(テキスト入力欄B:)'),
            frame.locator('textarea'),
            frame.locator('::-p-xpath(/html/body/form/label[2]/textarea)'),
            frame.locator(':scope >>> textarea'),
        ])
            .setTimeout(timeout)
            .fill(
                'いろはにほへと ちりぬるを\nわかよたれそつねならむ\nうゐのおくやま けふこえて\nあさきゆめみし ゑひもせす\n色は匂へど 散りぬるを\n我が世誰ぞ 常ならむ\n有為の奥山 今日越えて\n浅き夢見し 酔ひもせず'
            );
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('label:nth-of-type(3)'),
            frame.locator('::-p-xpath(/html/body/form/label[3])'),
            frame.locator(':scope >>> label:nth-of-type(3)'),
            frame.locator('::-p-text(チェックボックスA)'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 58.00284194946289,
                    y: 15.40057373046875,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('label:nth-of-type(4)'),
            frame.locator('::-p-xpath(/html/body/form/label[4])'),
            frame.locator(':scope >>> label:nth-of-type(4)'),
            frame.locator('::-p-text(チェックボックスB)'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 65.00284194946289,
                    y: 15.684661865234375,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(プルダウン:)'),
            frame.locator('select'),
            frame.locator('::-p-xpath(/html/body/form/label[6]/select)'),
            frame.locator(':scope >>> select'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 40.110801696777344,
                    y: 13.7073974609375,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(プルダウン:)'),
            frame.locator('select'),
            frame.locator('::-p-xpath(/html/body/form/label[6]/select)'),
            frame.locator(':scope >>> select'),
        ])
            .setTimeout(timeout)
            .fill('C');
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('label:nth-of-type(8)'),
            frame.locator('::-p-xpath(/html/body/form/label[8])'),
            frame.locator(':scope >>> label:nth-of-type(8)'),
            frame.locator('::-p-text(選択1)'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 38.00284194946289,
                    y: 10.821044921875,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(スライダー:)'),
            frame.locator('label:nth-of-type(11) > input'),
            frame.locator('::-p-xpath(/html/body/form/label[11]/input)'),
            frame.locator(':scope >>> label:nth-of-type(11) > input'),
            frame.locator('::-p-text(50)'),
        ])
            .setTimeout(timeout)
            .fill('18');
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(スライダー:)'),
            frame.locator('label:nth-of-type(11) > input'),
            frame.locator('::-p-xpath(/html/body/form/label[11]/input)'),
            frame.locator(':scope >>> label:nth-of-type(11) > input'),
            frame.locator('::-p-text(50)'),
        ])
            .setTimeout(timeout)
            .click({
                delay: 1111.9000000357628,
                offset: {
                    x: 27.761367797851562,
                    y: 2.485809326171875,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(モーダルを開く)'),
            frame.locator('form > button'),
            frame.locator('::-p-xpath(/html/body/form/button)'),
            frame.locator(':scope >>> form > button'),
            frame.locator('::-p-text(モーダルを開く)'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 78.00284194946289,
                    y: 7.946044921875,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(入力内容A:)'),
            frame.locator('#inputA'),
            frame.locator('::-p-xpath(//*[@id=\\"inputA\\"])'),
            frame.locator(':scope >>> #inputA'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 70.11505126953125,
                    y: 14.673309326171875,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(入力内容A:)'),
            frame.locator('#inputA'),
            frame.locator('::-p-xpath(//*[@id=\\"inputA\\"])'),
            frame.locator(':scope >>> #inputA'),
        ])
            .setTimeout(timeout)
            .fill('木綿豆腐');
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(入力内容B:)'),
            frame.locator('#inputB'),
            frame.locator('::-p-xpath(//*[@id=\\"inputB\\"])'),
            frame.locator(':scope >>> #inputB'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 70.11505126953125,
                    y: 15.77557373046875,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(入力内容B:)'),
            frame.locator('#inputB'),
            frame.locator('::-p-xpath(//*[@id=\\"inputB\\"])'),
            frame.locator(':scope >>> #inputB'),
        ])
            .setTimeout(timeout)
            .fill('絹豆腐');
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(OK)'),
            frame.locator('#myModal > button:nth-of-type(1)'),
            frame.locator('::-p-xpath(//*[@id=\\"myModal\\"]/button[1])'),
            frame.locator(':scope >>> #myModal > button:nth-of-type(1)'),
            frame.locator('::-p-text(OK)'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 15.680419921875,
                    y: 9.78125,
                },
            });
    }
    {
        // const target = await browser.waitForTarget(t => t.url() === 'https://n-slrkojtn2mf2eacbodpugftg2772ke7vt7tfnga-0lu-script.googleusercontent.com/userCodeAppPanel', { timeout });
        // const targetPage = await target.page();
        // targetPage.setDefaultTimeout(timeout);
        // let frame = targetPage.mainFrame();
        // frame = frame.childFrames()[0];
        await puppeteer.Locator.race([
            frame.locator('::-p-aria(送信[role=\\"button\\"])'),
            frame.locator('#reloadLink > button'),
            frame.locator('::-p-xpath(//*[@id=\\"reloadLink\\"]/button)'),
            frame.locator(':scope >>> #reloadLink > button'),
            frame.locator('::-p-text(送信)'),
        ])
            .setTimeout(timeout)
            .click({
                offset: {
                    x: 25.00284194946289,
                    y: 9.61083984375,
                },
            });
    }

    await browser.close();
})().catch((err) => {
    console.error(err);
    // process.exit(1);
});
