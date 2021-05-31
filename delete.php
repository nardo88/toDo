<?php
echo "<pre>";


if ($_GET['id']){
    
    // получаем данные из JSON
    $data = file_get_contents('./data/dataBase.json');
    // раскодируем данные в ассоциативный массив
    $data = json_decode($data);
 
    $newData = array();
    
    forEach($data as $elem){
        if ($elem->id != $_GET['id']){
            array_push($newData, $elem);
        }
    }
    // кодируем все данные обратно в JSON
    $newData = json_encode($newData);
    // var_dump($data);
    file_put_contents('./data/dataBase.json', $newData);
}




