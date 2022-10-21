<?php 
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: access");
	header("Access-Control-Allow-Methods: POST");
	header("Content-Type: application/json; charset=URF-8");
	header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with");
		
	$data = json_decode(file_get_contents("php://input"));

	echo json_encode($data);
		// var_dump($data);
 ?>