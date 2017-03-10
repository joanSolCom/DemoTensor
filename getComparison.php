<?php
	include 'getAuthorStats.php';

	$aladnani = getAuthorStats("aladnani");
	$alkhorasani = getAuthorStats("alkhorasani");
	$alnusra = getAuthorStats("alnusra");
	$albaghdadi = getAuthorStats("albaghdadi");
	$musacerantonio = getAuthorStats("musacerantonio");
	$almaqdisi = getAuthorStats("almaqdisi");

	$megaGraphs = array();

	$megaGraphs["aladnani"] = $aladnani;
	$megaGraphs["alkhorasani"] = $alkhorasani;
	$megaGraphs["alnusra"] = $alnusra;
	$megaGraphs["albaghdadi"] = $albaghdadi;
	$megaGraphs["musacerantonio"] = $musacerantonio;
	$megaGraphs["almaqdisi"] = $almaqdisi;

	echo json_encode($megaGraphs);

?>