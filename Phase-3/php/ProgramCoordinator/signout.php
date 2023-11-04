<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header('Access-Control-Allow-Credentials: true');
echo "sanjay";
session_start();

// Unset all session variables
session_unset();

// Destroy the session
session_destroy();

exit;
?>
