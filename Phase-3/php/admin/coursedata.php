<?php
session_start();

header("Access-Control-Allow-Origin: https://axv9331.uta.cloud");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
if(!isset($_SESSION["email"])){
    die("abc");
}
// Database connection
$dbHost = '51.81.160.154';
$dbName = 'axv9331_phase3';
$dbUser = 'axv9331_phase3';
$dbPass = 'Group24_WDM';

try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Fetch account data from the database
$sql = "SELECT COURSE, CODE, INSTRUCTORID FROM courses";
$stmt = $pdo->query($sql);
$accounts = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return data as JSON
header("Content-Type: application/json");
echo json_encode($accounts);
?>
