"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// NOTE: puppeteerのimportで、書き方によってはclassがundefinedになるため、名前空間付きのimportを使用する。
// ただし、シナリオ側で設定ミスしやすい箇所なので、共通で引数から渡したものを使用する。
const puppeteer = __importStar(require("puppeteer"));
const browser_1 = require("./browser");
const url_1 = require("url");
/**
 * NOTE: 各シナリオの処理を呼びだすエントリーポイントとなる関数。
 * 実行例: npm run run:scenario scenarioA.js
 * 処理実行時は、第一引数からシナリオを取得する。
 */
const main = async () => {
    const scenarioName = process.argv[2];
    const filename = (0, url_1.fileURLToPath)(import.meta.url);
    const dirname = path_1.default.dirname(filename);
    const scenarioModulePath = path_1.default.resolve(dirname, '../', 'scenario', scenarioName);
    const scenarioUrl = (0, url_1.pathToFileURL)(scenarioModulePath).href;
    const { run } = await Promise.resolve(`${scenarioUrl}`).then(s => __importStar(require(s)));
    await runScenarioWithCsv(run);
};
/**
 * 共通処理を実行してから、個別処理関数（scenarioFunc）を呼びだす。
 */
const runScenarioWithCsv = async (scenarioFunc) => {
    const browserSessionObject = await (0, browser_1.createBrowserSession)(800, 1200, 5000, 1, false, true);
    console.log(browserSessionObject);
    try {
        await scenarioFunc(puppeteer, browserSessionObject);
    }
    catch (error) {
        console.error(error);
    }
    finally {
        await browserSessionObject.browser.close();
    }
};
main().catch(console.error);
