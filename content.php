<?

    $data = file_get_contents('./data/dataBase.json');
    $data = json_encode($data);
    header('Content-type: application/json');
    echo $data;

    


    

?>





 





