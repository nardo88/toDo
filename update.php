<?php

echo '<pre>';
if ($_GET['id']){
    
    // получаем данные из JSON
    $data = file_get_contents('./data/dataBase.json');
    // раскодируем данные в ассоциативный массив
    $data = json_decode($data);
 
    
    
    forEach($data as $elem){
        if ($elem->id == $_GET['id']){
            echo $elem->finish = !$elem->finish;
        }
    }
    // кодируем все данные обратно в JSON
    $data = json_encode($data);
    // var_dump($data);
    file_put_contents('./data/dataBase.json', $data);
}