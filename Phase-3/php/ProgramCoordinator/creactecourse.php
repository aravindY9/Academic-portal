<?php
session_start();
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (empty($data)) {
        die(json_encode(array("error" => "Invalid data received")));
    }

    $course = $data['COURSE'];
    $code = $data['CODE'];
    $instructor = $data['INSTRUCTOR'];
    $room = $data['ROOM_NUMBER'];
    $syllabus = $data['SYLLABUS'];
    $time = $data['TIME'];
    $objective = $data['OBJECTIVE'];
    $host = '51.81.160.154';
    $database = 'sxv0451_site';
    $username = 'sxv0451_sanjay';
    $password = 'JusticeLeague';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO courses (COURSE, CODE, INSTRUCTOR, ROOM_NUMBER, SYLLABUS, TIME, OBJECTIVE) 
                VALUES (:COURSE, :CODE, :INSTRUCTOR, :ROOM_NUMBER, :SYLLABUS, :TIME, :OBJECTIVE)";
        $stmt = $pdo->prepare($sql);
        
        $stmt->bindParam(':COURSE', $course);
        $stmt->bindParam(':CODE', $code);
        $stmt->bindParam(':INSTRUCTOR', $instructor);
        $stmt->bindParam(':ROOM_NUMBER', $room);
        $stmt->bindParam(':SYLLABUS', $syllabus);
        $stmt->bindParam(':TIME', $time);
        $stmt->bindParam(':OBJECTIVE', $objective);

        $stmt->execute();

        $response = array();
        echo json_encode($response["message"] = "Success");
    } catch (PDOException $e) {
        $response = array();
        echo json_encode($response["error"] = $e->getMessage());
    }

    $pdo = null;
} else {
    header("HTTP/1.0 405 Method Not Allowed");
    echo "Method Not Allowed";
}
?>
