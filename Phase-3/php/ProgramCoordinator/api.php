<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace * with the actual domain of your React front-end if needed
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
session_start();
if(!isset($_SESSION["id"])){
    die("abc");
}
// Database connection
$dbHost = '51.81.160.154';
$dbName = 'sxv0451_qaprofile';
$dbUser = 'sxv0451_sanjay';
$dbPass = 'JusticeLeague';

try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Fetch account data from the database
$sql = "SELECT * FROM students";
$stmt = $pdo->query($sql);
$accounts = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return data as JSON
header("Content-Type: application/json");
echo json_encode($accounts);
?>
