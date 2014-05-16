$(function () {
    if (!chrome.extension) return;
    $('#editor-main #submit-button').on("click", function (event) {
        // ランダムキー生成
        var key = '';
        var a = 'abcdefghijklmnopqrstuvwxyz'.split('');
        for (var i = 0; i < 4; i++) {
            key += a[Math.floor(Math.random() * a.length)];
        }
        // キー確認
        input_key = window.prompt(
            "はてなブログに投稿します。\n"
            + "\n"
            + "・パーマリンク設定は大丈夫ですか？\n"
            + "・カテゴリ設定は大丈夫ですか？\n"
            + "・アイキャッチ画像は設定しましたか？\n"
            + "\n"
            + "よろしければ確認コード「" + key + "」を入力してください", "");
        // 問題なければ投稿
        if (key == input_key) {
            alert("投稿を行います。");
        }
        else if (input_key == null || input_key == "") {
            event.preventDefault();
            alert("投稿をキャンセルしました。");
        }
        else {
            event.preventDefault();
            alert("確認コードが違います。投稿はキャンセルされました。");
        }
    });
});
