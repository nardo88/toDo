<?php
    session_start();
    // устанавливаем срок жизни сессии
    ini_set('session.gc.maxlifetime', 3600);
    // устанавливаем соединение к БД где хранятся логины и пароли
    // всех зарегистрирвоанных пользователей
    $connection = new PDO ('mysql:host=localhost; dbname=todo; charset=utf8', 'root', '');
    // с помощью SQL запроса получаем всех пользователей из таблицы users
    $login = $connection->query('SELECT * FROM `users`');
    // если в глобальном объекте $_POST есть свойство - login
    if ($_POST['login']){
        // запускаем перебор массива с пользователями
        foreach ($login as $log) {
            // если совпадение данных найдено
            if ($_POST['login'] === $log['login'] && $_POST['password'] === $log['password']){
                // мы в сессию записываем логин и пароль пользователя
                $_SESSION['login'] = $_POST['login'];
                $_SESSION['password'] = $_POST['password'];
                // после чего редиректим на страницу с закрытым контентом
                header('location: index.php');
            }
        }
        // если совпадений не найдется, т.е. редирект не произойдет, то отрисовываем 
        // "Неверный логин или пароль"
        echo "Неверный логин или пароль";
    }
   
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1 class="header__title">Авторизация</h1>
        </div>
    </header>
    <div class="auth">
            <form action="#" class="addTask__form auth__form" method="POST">
                <input class="addTask__title auth__input" type="text" required name="login" placeholder="login"> 
                <input class="addTask__title auth__input" type="password" required name="password" placeholder="password"> 
                <button class="addTask__btn auth__btn">Войти</button>
            </form>
    </div>



</body>
</html>
