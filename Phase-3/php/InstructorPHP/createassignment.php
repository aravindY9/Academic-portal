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

    $name = $data['NAME'];
    $link = $data['LINK'];
    $max = $data['MAXSCORE'];
    $course = $data['CourseCode'];
    $instructor = $data['InstructorID'];

    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "instructor";

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO courses (NAME, LINK, MAXSCORE, CourseCode, InstructorID) 
                VALUES (:LINK, :MAXSCORE, :CourseCode, :InstructorID)";
        $stmt = $pdo->prepare($sql);
        
        $stmt->bindParam(':LINK', $link);
        $stmt->bindParam(':MAXSCORE', $max);
        $stmt->bindParam(':NAME', $name);
        $stmt->bindParam(':CourseCode', $course);
        $stmt->bindParam(':InstructorID', $instructor);

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
