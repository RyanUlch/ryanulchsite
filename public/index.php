<?php
	echo 'Here'
	if($_POST["message"]) {
		mail("RyanUlchDev@Gmail.com", "RyanUlch.com: $_POST['subject']",
		$_POST["message"]. "From: $_POST['email']");
	} else{
		echo '<script>alert("Welcome to Geeks for Geeks")</script>';
	}
?>
<!DOCTYPE html>
<html lang="en">
	<head><title>Sending Email</title></head>
	<body></body>
<html>
