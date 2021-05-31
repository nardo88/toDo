<?php

    if ($_POST['title']){
        // получаем данные из JSON
        $data = file_get_contents('./data/dataBase.json');
        // раскодируем данные в ассоциативный массив
        $data = json_decode($data);
        // создаем переменные из POST
        $id = $_POST['id'];
        $title = $_POST['title'];
        $description = $_POST['description'];

 

        // пушим в массив созданный объект
        forEach($data as $elem){
            if ($elem->id == $id){
                $elem->title = $title;
                $elem->description = $description;
            }
        }

        // кодируем все данные обратно в JSON
        $data = json_encode($data);
        // и записываем в файл
        file_put_contents('./data/dataBase.json', $data);
    }
