<?php require('dbconnect.php'); ?>
<!--random-->
<?php $random = rand(1, 35); ?>

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
    <link rel="stylesheet" href="http://localhost:8888/pro/random/css/page1/page1.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Kosugi+Maru&family=Sawarabi+Mincho&display=swap" rel="stylesheet">
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




        <!--result-->
        <p id="places"></p>
        <div class="result">
            <div class="container">
                <div class="row">

                    <!--result-main-->
                    <div class="col-9 result-main">
                        <h1 id="p-name"></h1>
                        <div class="result-main-contents">
                            <div class="result-main-contents-pic">
                                <img src="">
                            </div>
                            <div class="result-main-contents-des">
                                <p><cite id="p-description"></cite>&lt;wikipediaより&gt;</p>

                                <!--result-map-->
                                <div class="result-map">
                                    <iframe src="" frameborder: 0; style="border:0;" allowfullscreen="">
                                    </iframe>
                                </div>
                                <div class="social">
                                    <div class="google"><a href="https://www.google.com/" target="_blank"><i class="fab fa-google"></i><span>googleで検索！</span></a></div>
                                    <p><a href="http://localhost:8888/pro/random/HTMLPHP/page1.php">もう一度ランダム</a></p>
                                </div>
                            </div>
                        </div>

                        <!--comment-->
                        <div class="comment-contents">
                            <p>この場所に行ったことがある方<br>
                                行ってみたいと思ってる方<br>なんでもコメントお待ちしています！<br>
                                (場所が変わるとコメントも切り替わります)</p>
                            <div class="form">
                                <form action="inputdo.php" method="post">
                                    <textarea name="page" id="textarea-page" style="display: none;"></textarea>
                                    <textarea name="prefecture" id="textarea-prefecture" style="display: none;"></textarea>
                                    <textarea name="place" id="textarea-place" style="display: none;"></textarea>
                                    <label for="comment-name-area" id="comment-name">名前:</label>
                                    <input type="text" name="name" id="comment-name-area" value="ほりでい" maxlength="5" required>

                                    <textarea name="comments" id="comment-textarea" rows="10" placeholder="ご自由にどうぞ" required></textarea><br>
                                    <button type="submit" id="comment-btn">コメントする</button>
                                </form>
                            </div>

                            <div class="comment-display">
                                <h3>コメント一覧</h3>

                                <?php


                                $comments = $db->query("SELECT * FROM comment WHERE page=$random");
                                while ($comment = $comments->fetch()) : ?>
                                    <hr>
                                    <p class="comment-name">名前：<?php print($comment['name']); ?></p>
                                    <p class="comment-comment"><?php print($comment['comments']); ?></p>
                                    <p class="comment-created"><span class="min">作成時間：<?php print($comment['created']); ?></span></p>

                                <?php endwhile; ?>




                            </div>
                        </div>
                    </div>




                    <!--result-side-->
                    <div class="col-3 result-side">
                        <h3 class="forecast">天気<br>
                            <hr><span id="f-name">鎌倉</span></h3>

                        <!--result-forecast-->
                        <div class="result-forecast">

                            <!--現在の天気-->
                            <h3 class="time">現在</h3>

                            <p class="i-icon"><img src="" id="icon"></p>

                            <p>天気：<span id="weather"></span></p>

                            <p>気温：<span id="forecast"></span>°C</p>

                            <!--12時間後の天気-->
                            <h3 class="time">12時間後の天気</h3>

                            <p class="i-icon"><img src="" id="icon12"></p>

                            <p>天気：<span id="weather12"></span></p>

                            <p>気温：<span id="forecast12"></span>°C</p>

                            <!--24時間後の天気-->
                            <h3 class="time">24時間後の天気</h3>

                            <p class="i-icon"><img src="" id="icon24"></p>

                            <p>天気：<span id="weather24"></span></p>

                            <p>気温：<span id="forecast24"></span>°C</p>

                            <!--36時間後の天気-->
                            <h3 class="time">36時間後の天気</h3>

                            <p class="i-icon"><img src="" id="icon36"></p>

                            <p>天気：<span id="weather36"></span></p>

                            <p>気温：<span id="forecast36"></span>°C</p>

                            <!--48時間後の天気-->
                            <h3 class="time">48時間後の天気</h3>

                            <p class="i-icon"><img src="" id="icon48"></p>

                            <p>天気：<span id="weather48"></span></p>

                            <p>気温：<span id="forecast48"></span>°C</p>



                        </div>




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


        <script>
            const pages = <?php echo $random; ?>
        </script>
        <script src="http://localhost:8888/pro/random/js/page1-10.js"></script>
        <script src="http://localhost:8888/pro/random/js/page11-20.js"></script>
        <script src="http://localhost:8888/pro/random/js/page21-30.js"></script>
        <script src="http://localhost:8888/pro/random/js/page31-40.js"></script>
        <script src="http://localhost:8888/pro/random/js/forecast.js"></script>

        <!---bootstrap JS---->

        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
        </script>
    </div>
</body>

</html>