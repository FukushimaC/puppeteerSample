# Puppeteer Sample Project

# プロジェクトの概要

このプロジェクトは、Puppeteer を使用したブラウザ自動化のサンプルプロジェクト。
自動化の手順は Windows でも Mac でも大きくは代わらないが、ここでは Windows を前提として記載する。

# 開発環境のセットアップ

node が install されていなければ、 https://nodejs.org/ja からダウンロード&インストールする。
ターミナルで以下コマンドを実行

```bash
# 依存パッケージのインストール
npm install

# ビルドと実行
npm start src/ファイル名.js
```

# ファイル/フォルダ構成

## フォルダの役割

1. src
    自動化のシナリオに当たるファイルの置き場。
    また、サンプルコードで、formに10件分のデータを入力する場合のinputとなるcsvファイルも同階層に置く。
    （csvファイル自体は読み込み時にパスも指定できるため他においてもよい）

    ※Chrome の開発者ツール（Recorder タブ）からダウンロードした js ファイル（以下、exportしたjs）は、そのままだとうまく動かないことも多い。
    template.jsを元に、exportしたjsの各処理ブロックをコピペして使うのがおすすめ。

2. utils
    共通部を切り出したファイルの置き場。
    例：Browser の初期化処理、特定要素の表示待ち、確認用モーダルのクローズ、ページ全体のスクリーンショット取得

## ファイル形式の違いについて

Chrome の開発者ツールでダウンロードした puppeteer のコードは、javaScript ファイルなので、ファイルは javaScript で統一。

# 自動化の手順
詳細は[Qiita記事](https://qiita.com/CFukushima/items/efbc45b7d41f2800d0de)参照。
