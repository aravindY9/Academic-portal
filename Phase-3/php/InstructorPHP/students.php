<?php
header("Access-Control-Allow-Origin: https://axv9331.uta.cloud"); // Replace * with the actual domain of your React front-end if needed
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
session_start();
if (!isset($_SESSION["id"])) {
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
// $code = $_GET["id"];
$id = '1002097852';
// Fetch account data from the database
$sql = "SELECT CODE FROM courses where INSTRUCTORID='$id'";
$stmt = $pdo->query($sql);
$accounts = $stmt->fetchAll(PDO::FETCH_ASSOC);
$code = $accounts[0]["CODE"];
 
$sql1 = "SELECT StudentID FROM enrollments where CODE='$code'";
$stmt1 = $pdo->query($sql1);
$accounts1 = $stmt1->fetchAll(PDO::FETCH_ASSOC);
$result = array();
 
for ($i = 0; $i < count($accounts1); $i++) {
    $studentID = $accounts1[$i]["StudentID"];
    $sql2 = "SELECT * FROM students where StudentID='$studentID'";
    $stmt2 = $pdo->query($sql2);
    $studentData = $stmt2->fetchAll(PDO::FETCH_ASSOC);
 
    // Append the student data to the $result array
    $result[] = $studentData;
}
 
// Append "CODE" to each object in the $result array
foreach ($result as &$student) {
    $student['CODE'] = $code;
}
 
// Now $result contains all student data with the "CODE" key added
// print_r($result);
 
// Return data as JSON
header("Content-Type: application/json");
echo json_encode($result);
?>
 