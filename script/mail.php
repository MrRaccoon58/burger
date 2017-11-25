<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$home = $_POST['home'];
$housing = $_POST['housing'];
$apt = $_POST['apt'];
$floor = $_POST['floor'];
$comment = $_POST['comment'];
$money = $_POST['money'];

$nocall = $_POST['nocall'];
$nocall = isset($nocall) ? 'ДА' : 'НЕТ';

$mailMessage = '
<html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>заказ</h2>
        <ul>
            <li>Имя: ' . $name .'</li>
            <li>Email:' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $home . '</li>
            <li>корпус\строение: ' . $housing . '</li>
            <li>Квартира: ' . $apt . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий клиента: ' . $comment . '</li>
            <li>Способ оплаты: ' . $money . '</li>
            <li>нужно ли перезванивать: ' . $nocall . '</li>
        </ul>
    </body>
</html>
';


$headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('mrraccoon58@gmail.com', 'Заказ', $mailMessage, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);












// $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
// "MIME-Version: 1.0" . "\r\n" .
// "Content-type: text/html; charset=UTF-8" . "\r\n";

// $mail = mail('mrraccoon58@gmail.com', 'Заказ', $mailMessage, $headers);

// if  ($mail) {
//     echo 'done';
// }else{
//     echo 'err';
// }



// $data = [];

// if ($mail) {
//     $data['status'] = "OK";
//     $data['mes'] = "Ваш заказ принят в обработку";
// }else {
//     $data['status'] = "NO";
//     $data['mes'] = "Что-то пошло не так"];
// }

// echo json_encode($data);

?>