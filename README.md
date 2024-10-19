## 都道府県別の総人口推移グラフ

### 概要

RESAS(地域経済分析システム) API から取得した都道府県情報をもとに、「総人口」「年少人口」「生産年齢人口」「老年人口」の推移を、折れ線グラフで見ることができるアプリ。

### インストール

任意のディレクトリで、以下のコマンドを実行してください。<br>
`npm run prepare`コマンドを実行することでHuskyがGitフックを設定します。

```sh
git clone https://github.com/TaiyoMaruyama/population-trend-graph.git
cd population-trend-graph
npm ci
npm run prepare
```
