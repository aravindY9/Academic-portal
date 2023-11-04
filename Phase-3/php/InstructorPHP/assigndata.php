<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
// if(!isset($_SESSION["email"])){
//     die("abc");
// }
// Database connection
$id = $_GET["id"];
$dbHost = 'localhost';
$dbName = 'instructor';
$dbUser = 'root';
$dbPass = '';

try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// echo $id;
// Fetch account data from the database
$sql = "SELECT * FROM assignments where CourseCode = '$id'";
$stmt = $pdo->query($sql);
$accounts = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return data as JSON
header("Content-Type: application/json");
echo json_encode($accounts);
?>
