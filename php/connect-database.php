<?php

	$headers = array();
	$headers[] = 'x-auth-token: 53e51facf7d04162ba6d714014e013f2';
	$headers[] = 'Content-Type: application/x-www-form-urlencoded; charset=utf-8';
	$headers[] = ('Access-Control-Allow-Origin: *'); 

	$servername = "localhost";
	$username = "root";  //your user name for php my admin if in local most probaly it will be "root"
	$password = "";  //password probably it will be empty
	$databasename = "betting"; //Your db nane

	// Create connection
	$conn = new mysqli($servername, $username, $password, $databasename);
	mysqli_set_charset($conn, "utf8");
?>