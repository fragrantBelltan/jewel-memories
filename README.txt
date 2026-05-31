# Jewel Memories Fortune Page v4

## まず開くファイル
index.html

## 差し替える画像
以下のファイルを同じ名前で上書きしてください。

assets/images/logo.png
assets/images/characters/onyx.png
assets/images/characters/emerald.png
assets/images/characters/amethyst.png
assets/images/characters/diamond.png

## 推奨画像サイズ
logo.png: 横1000px前後、横長
キャラ画像: 1000px × 1000px 推奨

## 背景
背景は画像ではなく css/style.css で表現しています。
白すぎないクリーム背景、淡い黄色の光、薄い宝石片風の線を入れています。

## v4 反映内容
オニキス：成功
エメラルド：希望
アメジスト：直感
ダイヤモンド：純潔

結果画面：
石言葉 → キャラ画像 → キャラ名 → メッセージ → グッズ導線 → 他キャラ欄
の順で時差フェードします。

グッズ導線：
誘導文「この言葉を、いつでも思い出せるように。」
ボタン「この言葉のグッズを見る」

## 反映済みリンク
オニキス / 成功
https://suzuri.jp/Sumine_Belltan/18676031/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share

ダイヤモンド / 純潔
https://suzuri.jp/Sumine_Belltan/18686423/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share

## 未反映リンク
エメラルド / 希望
アメジスト / 直感

リンク追加場所：
js/main.js の results 内にある goodsUrl を変更してください。


## v5 追加内容
エメラルド、アメジストのSUZURIアクキーリンクを反映しました。

エメラルド / 希望
https://suzuri.jp/Sumine_Belltan/20059319/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share

アメジスト / 直感
https://suzuri.jp/Sumine_Belltan/20059337/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share


## v6 追加内容
診断結果ページ最下部に外部リンクを追加しました。

note
https://note.com/fragrant_witch

X
https://x.com/fragrant_witch

Shop
https://suzuri.jp/Sumine_Belltan


## v7 修正内容
v6で外部リンク追加後に崩れていた診断結果画面の時差フェードを修正しました。

表示順：
石言葉 → キャラ画像 → キャラ名 → メッセージ → グッズ導線 → 他キャラ欄 → もう一度選ぶ → 外部リンク


## v8 修正内容
結果画面へ遷移した瞬間にキャラ画像などが一瞬表示されてから消えるちらつきを修正しました。
result-prep 状態で先に要素を透明化し、その後に時差フェードを開始します。


## v9 追加内容
診断結果ページ最下部に LINEスタンプ のリンクを追加しました。

LINEスタンプ
https://store.line.me/stickershop/product/30544659/ja


## v10 追加内容
リリムちゃんを追加しました。

リリム / 愛情
画像：assets/images/characters/lilim.png
グッズリンク：
https://suzuri.jp/Sumine_Belltan/20084759/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share

診断形式を3問スコア式から半ツリー型へ変更しました。

構造：
Q1 悩みの大枠
Q2 選んだ大枠の中で方向を絞る
Q3 残った候補の核心から選ぶ
結果表示

既存の結果画面時差フェード、外部リンク、グッズ導線は維持しています。
