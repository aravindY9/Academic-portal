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

    $examname = $data['examName'];
    $examid = $data['ExamID'];
    $studentid = $data['StudentID'];
    $grade = $data['Grade'];
    $gradeid = $data['GradeID'];


    $host = '51.81.160.154';
    $username = 'axv9331_phase3';
    $database = 'axv9331_phase3';
    $password = 'Group24_WDM';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO grades (examName, ExamID, StudentID, Grade, GradeID) 
                VALUES (:examName, :ExamID, :StudentID, :Grade, :GradeID)";
        $stmt = $pdo->prepare($sql);
        
        $stmt->bindParam(':examName', $examname);
        $stmt->bindParam(':ExamID', $examid);
        $stmt->bindParam('StudentID', $studentid);
        $stmt->bindParam(':Grade', $grade);
        $stmt->bindParam(':GradeID', $gradeid);


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
