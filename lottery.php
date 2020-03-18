<?php 
	function lottery(){
		$arr= array();
		
		do{
			$random=rand(1, 49);
			if(!in_array($random, $arr)){
				array_push($arr,$random);
			}
		}while(sizeof($arr)<=5);
		
		$arr=json_encode($arr);
		return $arr;
	}
	
	$response=lottery();
	echo $response;


	
	