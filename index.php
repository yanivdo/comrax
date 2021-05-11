<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include './general/Functions.php';



// include './general/Curl.php';
// $test = new Curl();
// print_R($test->sendRequest("mega"));
// exit;




$functions = new Functions();
$content = $functions->ajaxToFunction($_SERVER['REDIRECT_URL']);
echo json_encode($content);
