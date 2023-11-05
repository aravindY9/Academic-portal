<?php
session_start();

header("Access-Control-Allow-Origin: https://axv9331.uta.cloud");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
if(!isset($_SESSION["id"])){
    die("abc");
}
// $_SESSION['test'] = 'Hello, world!';
// echo json_encode($_SESSION);
$dbHost = '51.81.160.154';
$dbName = 'axv9331_phase3';
$dbUser = 'axv9331_phase3';
$dbPass = 'Group24_WDM';



$email=$_SESSION["email"];
if (isset($_GET["id"])){
    $id = $_SESSION["id"];    
}
else{
    $id = $_SESSION["id"];
}

// echo $email;
try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
$sql = "SELECT * FROM users where ID='$id'";
$stmt = $pdo->query($sql);
$accounts = $stmt->fetchAll(PDO::FETCH_ASSOC);
// header("Content-Type: application/json");
echo json_encode($accounts);
?>
