<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (empty($data)) {
        echo json_encode(array("error" => "Invalid data received."));
        exit();
    }
    // print_r($data);
    $id = $data["id"];
    $content = $data["content"];

    $dbHost = '51.81.160.154';
    $dbName = 'sxv0451_site';
    $dbUser = 'sxv0451_sanjay';
    $dbPass = 'JusticeLeague';


    $mysqli = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

    if ($mysqli->connect_error) {
        echo json_encode(array("error" => "Connection failed: " . $mysqli->connect_error));
        exit();
    }

    $sql = "INSERT INTO feedback VALUES(?,?)";
    $stmt = $mysqli->prepare($sql);

    if (!$stmt) {
        echo json_encode(array("error" => "Prepare failed: " . $mysqli->error));
        exit();
    }

    $stmt->bind_param("ss", $id,$content);

    if ($stmt->execute()) {
        echo json_encode(array("message" => "Uploaded Feedback successfully"));
    } else {
        echo json_encode(array("error" => "Error uploading feedback: " . $stmt->error));
    }

    $stmt->close();
    $mysqli->close();
} else {
    header("HTTP/1.0 405 Method Not Allowed");
    echo "Method Not Allowed";
}
?>
