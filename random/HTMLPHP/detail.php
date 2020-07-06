<?php require('dbconnect.php'); ?>


<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge, chrome=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <title>ランダむホリデイ</title>
    <link rel="stylesheet" href="http://localhost:8888/pro/random/css/reset.css">
    <link rel="stylesheet" href="http://localhost:8888/pro/random/css/base/base.min.css">
    <link rel="stylesheet" href="http://localhost:8888/pro/random/css/board/board.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <meta property="og:title" content="ランダむホリデイ" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="ちょっとお出かけやデートに行きたい時にランダムで場所を決めてくれます" />
    <meta property="og:url" content="ページのURL" />
    <meta property="og:site_name" content="ランダむホリデイ" />
    <meta property="og:image" content="サムネイル画像のURL" />

</head>

<body>
    <!--nav-->
    <?php require('nav.php'); ?>

    <!--detail-->


    <?php
    $comments = $db->prepare('SELECT * FROM comment WHERE id=?');
    $comments->execute(array($_REQUEST['id']));
    $comment = $comments->fetch();
    ?>
    <div class="board">
        <div class="container board-container">
            <div class="comment-contents">
                <div class="comment-display">
                    <p class="comment-name">名前：<?php print($comment['name']); ?></p>
                    <p class="comment-prefecture">都道府県：<?php print($comment['prefecture']); ?></p>
                    <p class="comment-place">場所：<?php print($comment['place']); ?></p>
                    <p class="comment-comment"><?php print($comment['comments']); ?></p>
                    <p class="comment-created"><span class="min">作成時間：<?php print($comment['created']); ?></span></p>
                </div>
                <p><a style="color: black;" href="http://localhost:8888/pro/random/HTMLPHP/board.php">戻る</a></p>
            </div>
        </div>

    </div>
    <!--footer-->
    <footer>



        <div class="copy">
            <p><small>Copyright © 2014 Matsu All Rights Reserved.</small></p>
        </div>
    </footer>



    <!---bootstrap JS---->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>

</body>

</html>