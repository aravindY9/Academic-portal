<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
if(!isset($_SESSION["email"])){
    die("abc");
}
// $_SESSION['test'] = 'Hello, world!';
// echo json_encode($_SESSION);
$dbHost = 'localhost';
$dbName = 'site';
$dbUser = 'root';
$dbPass = '';
$email=$_SESSION["email"];
// echo $email;
try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
$sql = "SELECT * FROM users where email='$email'";
$stmt = $pdo->query($sql);
$accounts = $stmt->fetchAll(PDO::FETCH_ASSOC);
// header("Content-Type: application/json");
echo json_encode($accounts);
?>
