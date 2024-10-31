## 都道府県別の総人口推移グラフ

RESAS_APIを使用して、選択した都道府県に対しての人口構成をグラフ上で描画するアプリ。

### 概要

RESAS(地域経済分析システム) API から取得した都道府県情報をもとに、「総人口」「年少人口」「生産年齢人口」「老年人口」の推移を、折れ線グラフで見ることができるアプリ。

## アプリイメージ

![完成イメージ](https://github.com/user-attachments/assets/21e1128c-2443-4fe2-b33c-4068d686f7ff)

### インストール

任意のディレクトリで、以下のコマンドを実行してください。<br>
※`npm run prepare`コマンドを実行することでHuskyがGitフックを設定します。

```sh
git clone https://github.com/TaiyoMaruyama/population-trend-graph.git
cd population-trend-graph
npm ci
npm run prepare
```

### コマンド

Typescript型チェック、ESLint, Prettierのチェックが走る

```sh
npm run check-all
```

各コンポーネントに対するテストが走る

```sh
npm run test-all
```
