<?php

    class NewData {
        public function __construct($id, $title, $description) {
            $this->id = $id;
            $this->title = $title;
            $this->description = $description;
            $this->finish = false; 
        }
    }

    if ($_POST['title']){
        // получаем данные из JSON
        $data = file_get_contents('./data/dataBase.json');
        // раскодируем данные в ассоциативный массив
        $data = json_decode($data);
        // создаем переменные из POST
        $id = time();
        $title = $_POST['title'];
        $description = $_POST['description'];

        // создаем новый объект на основании пришедших данных методом POST
        $obj = new NewData($id, $title, $description);
        // пушим в массив созданный объект
        array_push($data, $obj);
        // кодируем все данные обратно в JSON
        $data = json_encode($data);
        // и записываем в файл
        file_put_contents('./data/dataBase.json', $data);
    } 

?>