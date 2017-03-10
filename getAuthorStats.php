<?php
	function getAuthorStats($fname)
	{
		include "featsPerGroup.php";

		$authorChar = "./dataset/".$fname."_CharacterBasedFeatures";
		$authorWord = "./dataset/".$fname."_WordBasedFeatures";
		$authorSent = "./dataset/".$fname."_SentenceBasedFeatures";
		$authorDict = "./dataset/".$fname."_DictionaryBasedFeatures";
		$authorSyn = "./dataset/".$fname."_SyntacticFeatures";
		$authorDisc = "./dataset/".$fname."_DiscourseFeatures";

		$rawChar = file_get_contents($authorChar);
		$rawWord = file_get_contents($authorWord);
		$rawSent = file_get_contents($authorSent);
		$rawDict = file_get_contents($authorDict);
		$rawSyn = file_get_contents($authorSyn);
		$rawDisc = file_get_contents($authorDisc);

		$graphs = array();

		$linesChar = explode("\n",$rawChar);

		foreach($linesChar as $line)
		{
			$pieces = explode(":",$line);
			if(isset($pieces))
			{
				if(in_array($pieces[0],$selectedChar))
				{
					$graphs["CharacterBasedFeatures"][$pieces[0]] = floatval($pieces[1]);
				}
			}
		}

		$linesWord = explode("\n",$rawWord);

		foreach($linesWord as $line)
		{
			$pieces = explode(":",$line);
			if(isset($pieces))
			{
				if(in_array($pieces[0],$selectedWord))
				{
					$graphs["WordBasedFeatures"][$pieces[0]] = floatval($pieces[1]);
				}
			}
		}

		$linesSent = explode("\n",$rawSent);

		foreach($linesSent as $line)
		{
			$pieces = explode(":",$line);
			if(isset($pieces))
			{
				if(in_array($pieces[0],$selectedSent))
				{
					$graphs["SentenceBasedFeatures"][$pieces[0]] = floatval($pieces[1]);
				}
			}
		}

		$linesDict = explode("\n",$rawDict);

		foreach($linesDict as $line)
		{
			$pieces = explode(":",$line);
			if(isset($pieces))
			{
				if(in_array($pieces[0],$selectedDict))
				{
					$graphs["DictionaryBasedFeatures"][$pieces[0]] = floatval($pieces[1]);
				}
			}
		}

		$linesSyn = explode("\n",$rawSyn);

		foreach($linesSyn as $line)
		{
			$pieces = explode(":",$line);
			if(isset($pieces))
			{
				if(in_array($pieces[0],$selectedSyn))
				{
					$graphs["SyntacticFeatures"][$pieces[0]] = floatval($pieces[1]);
				}
			}
		}

		$linesDisc = explode("\n",$rawDisc);

		foreach($linesDisc as $line)
		{
			$pieces = explode(":",$line);
			if(isset($pieces))
			{
				if(in_array($pieces[0],$selectedDisc))
				{
					$graphs["DiscourseFeatures"][$pieces[0]] = floatval($pieces[1]);
				}
			}
		}

		return $graphs;
	}
	if(array_key_exists("authorName", $_POST))
	{
		$authorName = $_POST["authorName"];
		echo json_encode(getAuthorStats($authorName));
	}

?>