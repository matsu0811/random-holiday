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
<div id="wrapper">
   <!--nav-->

   <?php require('nav.php'); ?>

   
       
   
<!--board-->
<div class="board">
    <div class="container board-container">


<div class="comment-contents">
                    <h3>おすすめの場所や意見お待ちしております!</h3>
                        <div class="form">
                            <form action="inputdo.php" method="post">
                                <textarea name="page" id="textarea-page" style="display: none;">9999</textarea>
                                <textarea name="prefecture" id="textarea-prefecture" style="display: none;">掲示板から入力</textarea>
                                <textarea name="place" id="textarea-place" style="display: none;">掲示板から入力</textarea>
                                <label for="comment-name-area" id="comment-name">名前:</label>
                                <input type="text" name="name" id="comment-name-area" value="ほりでい" maxlength="5" required>
                                
                                <textarea name="comments" id="comment-textarea" rows="10" placeholder="ご自由にどうぞ" required></textarea><br>
                                <button type="submit" id="comment-btn">コメントする</button>
                            </form>
                        </div>
<!--filtering-->
                        <div class="filtering">
                            <p>都道府県：</p>
       <button value="all">すべて</button>
       <button value="東京">東京</button>
       <button value="神奈川">神奈川</button>
       <button value="千葉">千葉</button>
       <button value="埼玉">埼玉</button>
</div>

                        <div class="comment-display">

                        

                            <h3>コメント一覧</h3>
                            
                            <?php
                        
                            
                            $comments = $db->query('SELECT * FROM comment ORDER BY created DESC');
                            
                            
                            while ($comment = $comments->fetch()) : ?>
                                
                                <div class="<?php echo $comment['prefecture']; ?>">
                                <hr>
                                <p class="comment-name">名前：<?php print($comment['name']); ?></p>
                                <p class="comment-prefecture">都道府県：<?php print($comment['prefecture']); ?></p>
                                <p class="comment-place">場所：<?php print($comment['place']); ?></p>
                                <p class="comment-comment"><a href="detail.php?id=<?php print($comment['id']); ?>"><?php print(mb_substr($comment['comments'], 0, 50));
                                print((mb_strlen($comment['comments']) > 50 ? '...' : ''));?></a></p>
                                <p class="comment-created"><span class="min">作成時間：<?php print($comment['created']); ?></span></p>
                                </div>
                            <?php endwhile; ?>
                                

                        </div>
                    </div>







        </div>                       
 </div>

<!--footer-->
<footer>



<div class="copy">
    <p><small>Copyright © 2014 Matsu All Rights Reserved.</small></p>
</div>
</footer>


<script src="http://localhost:8888/pro/random/js/board.js"></script>


<!---bootstrap JS---->

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
</script>
</div>
</body>

</html>