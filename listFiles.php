<?php
	
	$listFiles = array();

	/*if ($handle = opendir('./dataset/')) {

	    while (false !== ($entry = readdir($handle))) {

	        if ($entry != "." && $entry != "..") 
	        {
	            $listFiles[] = $entry;
	        }
	    }

	    closedir($handle);
	}*/

	$files = scandir('./dataset/');
	sort($files);
	foreach ($files as $file) {
	    if ($file != '.' && $file != '..') {
	    	$listFiles[] = $file;
	    }
	}	
	echo json_encode($listFiles);

?>