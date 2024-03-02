<?php
    $what = $_POST['what'];
    $email = $_POST['email'];
    $name = $_POST['name'];
    $text = $_POST['text'];

    $what = trim(urldecode(htmlspecialchars($what)));
    $name = trim(urldecode(htmlspecialchars($name)));
    $email = trim(urldecode(htmlspecialchars($email)));
    $text = trim(urldecode(htmlspecialchars($text)));

    if(mail("neuro@kaminsoft.ru", $what . " у сотрудника", 
    "<h1>Вы получили отклик с сайта КАМИН ИИ</h1> 
    <br>от: <b>".$name."</b>
    <br>e-mail: <b>".$email."</b>
    <br>пользователь оставил комментарий ".$text,
    "From: 1c-webdevelopment.ru\r\n". "Content-type: text/html\r\n"))
    {
        // Отправка произошла успешно
        echo '{"status": "ok"}';
    }else{
        // Отправка не состоялась
        echo '{"status": "error"}';
    }
?>