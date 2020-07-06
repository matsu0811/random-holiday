
 <?php
   try {
    $db = new PDO('mysql:dbname=mydb;host=localhost;charset=utf8', 'root', 'root');
    } catch (PDOException $e) {
        echo 'DBエラー :'. $e -> getMessage();
    }
 

?>

