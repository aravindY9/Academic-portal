<?php
session_start();
header("Access-Control-Allow-Origin: https://axv9331.uta.cloud");
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
    $instructor = $data['INSTRUCTORID'];
    $room = $data['ROOMNUMBER'];
    $day = $data['DAY'];
    $duration = $data['DURATION'];
    $syllabus = $data['SYLLABUS'];
    $time = $data['CLASSTIME'];
    $objective = $data['OBJECTIVE'];

    $host = '51.81.160.154';
    $database = 'axv9331_phase3';
    $username = 'axv9331_phase3';
    $password = 'Group24_WDM';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO courses (COURSE, CODE, INSTRUCTORID, ROOMNUMBER, DAY, DURATION, SYLLABUS, CLASSTIME, OBJECTIVE) 
                VALUES (:COURSE, :CODE, :INSTRUCTORID, :ROOMNUMBER, :DAY, :DURATION, :SYLLABUS, :CLASSTIME, :OBJECTIVE)";
        $stmt = $pdo->prepare($sql);
        
        $stmt->bindParam(':COURSE', $course);
        $stmt->bindParam(':CODE', $code);
        $stmt->bindParam(':INSTRUCTORID', $instructor);
        $stmt->bindParam(':ROOMNUMBER', $room);
        $stmt->bindParam(':DAY', $day);
        $stmt->bindParam(':DURATION', $duration);
        $stmt->bindParam(':SYLLABUS', $syllabus);
        $stmt->bindParam(':CLASSTIME', $time);
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
