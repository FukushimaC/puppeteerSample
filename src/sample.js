const puppeteer = require('puppeteer'); // v23.0.0 or later
const { createBrowserSession } = require('../utils/browserUtil');
const { setupDialogHandler, askQuestion } = require('../utils/inputUtil');
const { screenshotWholePage, readCsv } = require('../utils/fileUtil');
const { uploadFile } = require('../utils/fileUtil');
const { pathToFileURL } = require("url");

(async () => {
    const { browser, page, timeout } = await createBrowserSession(700, 700);
    const targetPage = page;

    // 送信後のダイアログを閉じるためのリスナーを設定
    await setupDialogHandler(targetPage);
    {
        const targetPage = page;
        await targetPage.goto(
            // テスト用に同プロジェクト内のサンプルページのファイルを開く。
            pathToFileURL('./sampleSrc/form/index.html').href
        );
    }
    // CSVからinput用の情報を読み取る
    const inputDataList = readCsv('src/sampleInput.csv');
    // 繰り返し処理の書き方によっては待ち処理が上手く動かない。for of推奨
    for await (const [index, inputData] of inputDataList.entries()) {
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(氏名)'),
                targetPage.locator('label:nth-of-type(1) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[1]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(1) > input'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 67,
                        y: 14.09375,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(氏名)'),
                targetPage.locator('label:nth-of-type(1) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[1]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(1) > input'),
            ])
                .setTimeout(timeout)
                .fill(inputData.name);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(メールアドレス)'),
                targetPage.locator('label:nth-of-type(2) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[2]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(2) > input'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 209,
                        y: 23.09375,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(メールアドレス)'),
                targetPage.locator('label:nth-of-type(2) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[2]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(2) > input'),
            ])
                .setTimeout(timeout)
                .fill(inputData.email);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(パスワード)'),
                targetPage.locator('label:nth-of-type(3) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[3]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(3) > input'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 133,
                        y: 10.09375,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(パスワード)'),
                targetPage.locator('label:nth-of-type(3) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[3]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(3) > input'),
            ])
                .setTimeout(timeout)
                .fill('password123');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(生年月日)'),
                targetPage.locator('label:nth-of-type(4) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[4]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(4) > input'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 111,
                        y: 21.09375,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(生年月日)'),
                targetPage.locator('label:nth-of-type(4) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[4]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(4) > input'),
            ])
                .setTimeout(timeout)
                .fill('2001-01-01');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(性別)'),
                targetPage.locator('label:nth-of-type(5) > select'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[5]/select)'),
                targetPage.locator(':scope >>> label:nth-of-type(5) > select'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 45,
                        y: 3.765625,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(性別)'),
                targetPage.locator('label:nth-of-type(5) > select'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[5]/select)'),
                targetPage.locator(':scope >>> label:nth-of-type(5) > select'),
            ])
                .setTimeout(timeout)
                .fill('female');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(電話番号)'),
                targetPage.locator('label:nth-of-type(6) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[6]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(6) > input'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 65,
                        y: 14.765625,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(電話番号)'),
                targetPage.locator('label:nth-of-type(6) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[6]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(6) > input'),
            ])
                .setTimeout(timeout)
                .fill(inputData.phone);
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(住所)'),
                targetPage.locator('label:nth-of-type(7) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[7]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(7)  input'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 43,
                        y: 27.765625,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(住所)'),
                targetPage.locator('label:nth-of-type(7) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[7]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(7) > input'),
            ])
                .setTimeout(timeout)
                .fill('東京都');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(職業)'),
                targetPage.locator('label:nth-of-type(8) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[8]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(8) > input'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 95,
                        y: 24.765625,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(職業)'),
                targetPage.locator('label:nth-of-type(8) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[8]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(8) > input'),
            ])
                .setTimeout(timeout)
                .fill('IT技術者');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(興味のあるカテゴリ)'),
                targetPage.locator('label:nth-of-type(9) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[9]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(9) > input'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 113,
                        y: 33.765625,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(興味のあるカテゴリ)'),
                targetPage.locator('label:nth-of-type(9) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[9]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(9) > input'),
            ])
                .setTimeout(timeout)
                .fill('エキゾチック');
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(メルマガ購読)'),
                targetPage.locator('label:nth-of-type(10) > select'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[10]/select)'),
                targetPage.locator(':scope >>> label:nth-of-type(10) > select'),
                targetPage.locator('::-p-text(yes)'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 131,
                        y: 8.765625,
                    },
                });
        }
        {
            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(メルマガ購読)'),
                targetPage.locator('label:nth-of-type(10) > select'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[10]/select)'),
                targetPage.locator(':scope >>> label:nth-of-type(10) > select'),
                targetPage.locator('::-p-text(yes)'),
            ])
                .setTimeout(timeout)
                .fill('no');
        }
        {
            const targetPage = page;
            await uploadFile(
                targetPage,
                ['#fileInput', 'input[name="image"]', 'input[type="file"]'],
                '/penguin.png'
            );
        }
        {
            // 一時コードのように、都度値が変わる場合は、操作途中で処理を止めて、ユーザーの入力を待つ。
            const userInput = await askQuestion('適当な値を入力してください：');
            const frame = page.frames().find(f => f.name() === "iframeSample");        
            const targetPage = frame;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(一時コード)'),
                targetPage.locator('label:nth-of-type(11) > input'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/label[11]/input)'),
                targetPage.locator(':scope >>> label:nth-of-type(11) > input'),
            ])
                .setTimeout(timeout)
                .fill(userInput);
        }

        {
            // 送信直前に、ページ全体のスクリーンショットを取得
            await screenshotWholePage(page, "./src/screenshot", `form_input_${index}`);

            const targetPage = page;
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(送信)'),
                targetPage.locator('#registerForm > button'),
                targetPage.locator('::-p-xpath(//*[@id=\\"registerForm\\"]/button)'),
                targetPage.locator(':scope >>> #registerForm > button'),
            ])
                .setTimeout(timeout)
                .click({
                    offset: {
                        x: 35,
                        y: 9.765625,
                    },
                });
        }
        {
            const targetPage = page;
            const promises = [];
            const startWaitingForEvents = () => {
                promises.push(targetPage.waitForNavigation());
            };
            await puppeteer.Locator.race([
                targetPage.locator('::-p-aria(OK)'),
                targetPage.locator('#confirm'),
                targetPage.locator('::-p-xpath(//*[@id=\\"confirm\\"])'),
                targetPage.locator(':scope >>> #confirm'),
                targetPage.locator('::-p-text(OK)'),
            ])
                .setTimeout(timeout)
                .on('action', () => startWaitingForEvents())
                .click({
                    offset: {
                        x: 38,
                        y: 14,
                    },
                });
            await Promise.all(promises);
        }
    }
    console.log(new Date());
})().catch((err) => {
    console.error(err);
});
