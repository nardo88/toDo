<?php

    // открываем сессию
    session_start();
    // если в сессии НЕ хранятся свойства логина и пароля
    if (!$_SESSION['login'] || !$_SESSION['password']){
        // то выполняем редирект на страницу с авторизацией
        header('location: login.php');
        // die - это команда окончания скрипта, что бы на всякий
        // случай какой-то участок скрипта вдруг не отработал
        die();
    }

    // if ($_POST['unlogin']){
    //     // уничтожаем сессию
    //     session_destroy();
    //     // и выполняем редирект
    //     header('location: index.php');

    // }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>

    <!-- <form action="index.php" method="POST">

        <input name="title" type="text" placeholder="title">
        <input name="description" type="text" placeholder="description">
        <button class="btn">отправить</button>
    </form> -->


    <hader class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__logo">
                    <img src="./img/logo.png" alt="logo">
                </div>
                <div class="header__control">
                    <button class="add__task">Add task</button>
                </div>
            </div>
        </div>
    </hader>

    <div class="tasks">
        <div class="container">
            <div class="tasks__wrapper">
                <ul class="list">

                    <li class="list__item item">
                        <div class="item__top">
                            <div class="item__status">
                                <button class="item__done">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="m9.877 15.485-4.95-4.95a1 1 0 1 0-1.414 1.415l5.657 5.657a.997.997 0 0 0 1.414 0l9.9-9.9a1 1 0 1 0-1.415-1.414l-9.192 9.192z"/></svg>
                                </button>
                            </div>
                            <div class="item__info">
                                <h3 class="item__title">Заголовок таски</h3>
                            </div>
                            <div class="item__control">
                                <button class="item__open">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><g fill="#b4b4b4"><path d="M16.947 1.008H5.019L0 5.498v17.594h13.706v-1.58H1.777V7.218h5.149v-4.63h8.243v4.824h1.778z"/><path d="M7.71 17.67h8.228v4.803l8.162-6.251-8.162-6.254v4.806H7.71z"/></g></svg>
                                </button>
                                <button class="item__delete" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"/></svg>
                                </button>
                            </div>
                        </div>

                        <div class="item__bottom">
                            <p class="item__descroption">Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Путь языком встретил запятых пор одна даль предупредила там всемогущая текст рекламных ее большой свой повстречался сбить, продолжил щеке дал пустился составитель над. Злых за строчка большой диких первую буквоград сбить собрал от всех страну на берегу буквенных себя домах, снова инициал. Путь встретил эта коварный однажды диких правилами! Себя гор заглавных переписали наш лучше свой раз большой агентство. Образ что безопасную но меня, сих продолжил вершину толку? Проектах мир большого силуэт, запятой взгляд букв свое рот безопасную, продолжил ты имени вершину, имеет заглавных буквоград языком текст щеке по всей о он первую над? Переулка оксмокс, языкового злых курсивных щеке рыбными, от всех дорогу себя заголовок там путь рыбного безопасную большой текста использовало что парадигматическая маленькая переписывается? Рыбными предложения даже коварный правилами заманивший океана, повстречался возвращайся приставка, выйти моей грустный курсивных lorem! Семь свой всемогущая текст, до ведущими запятых пояс над вопрос меня, подзаголовок жизни однажды первую маленькая родного текстов которое! Ручеек даль точках языком последний переулка образ рукопись, своих взобравшись. Всемогущая послушавшись предложения ему строчка семантика страну власти пунктуация подпоясал запятых, рукописи вершину продолжил. Курсивных своего о толку рыбного, злых, языкового гор он парадигматическая заголовок, грустный раз пояс мир даль! Вершину, рекламных большой.</p>
                        </div>
                        
                    </li>

                    <li class="list__item item">
                        <div class="item__top">
                            <div class="item__status">
                                <button class="item__done">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="m9.877 15.485-4.95-4.95a1 1 0 1 0-1.414 1.415l5.657 5.657a.997.997 0 0 0 1.414 0l9.9-9.9a1 1 0 1 0-1.415-1.414l-9.192 9.192z"/></svg>
                                </button>
                            </div>
                            <div class="item__info">
                                <h3 class="item__title">Заголовок таски</h3>
                            </div>
                            <div class="item__control">
                                <button class="item__open">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><g fill="#b4b4b4"><path d="M16.947 1.008H5.019L0 5.498v17.594h13.706v-1.58H1.777V7.218h5.149v-4.63h8.243v4.824h1.778z"/><path d="M7.71 17.67h8.228v4.803l8.162-6.251-8.162-6.254v4.806H7.71z"/></g></svg>
                                </button>
                                <button class="item__delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"/></svg>
                                </button>
                            </div>
                        </div>

                        <div class="item__bottom">
                            <p class="item__descroption">Описание таски</p>
                        </div>
                        
                    </li>


                   
                </ul>
            </div>
        </div>
    </div>


    <div class="overlay">
        <div class="addTask">
            <h3 class="addTask__caption">Добавить запись</h3>
            <form action="#" class="addTask__form">
                <input class="addTask__title" type="text" required name="title" autocomplete="off"> 
                <textarea class="addTask__description" name="description" id="description" required></textarea>
                <button class="addTask__btn">Сохранить</button>
            </form>
            <button class="addTask__close">&#10006;</button>

        </div>
    </div>

    <script src="./script.js"></script>
</body>

</html>