<?php

	include 'getAuthorStats.php';
	$filename = $_POST["filename"];
	$path = "./dataset/".$filename;
	$txt = file_get_contents($path);
	
	$json = array();
	$json["txt"] = $txt;
	$json["graphs"] = getAuthorStats($filename);
	echo json_encode($json);
?>