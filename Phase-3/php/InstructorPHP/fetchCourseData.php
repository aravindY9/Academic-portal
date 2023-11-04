<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
if(!isset($_SESSION["email"])){
    die("abc");
}

if (isset($_GET['id'])) {
    // Get the ID from the URL
    $id = $_GET['id'];

    // Step 1: Set up a database connection
    // Database connection
    $dbHost = 'localhost';
    $dbName = 'site';
    $dbUser = 'root';
    $dbPass = '';

    try {
        $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Database connection failed: " . $e->getMessage());
    }

    // Fetch account data from the database
    $sql = "SELECT * FROM courses WHERE CODE = '$id'";
    $stmt = $pdo->query($sql);
    $course = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return data as JSON
    // if($course){
        header("Content-Type: application/json");
        echo json_encode($course);
    // }else{
        // die("No Course Found");
    // }
    
    }
?>
