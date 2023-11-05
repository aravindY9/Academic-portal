<?php
session_start();
header("Access-Control-Allow-Origin: https://axv9331.uta.cloud/");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
// header("Access-Control-Allow-Credentials: true");    
// if (!isset($_SESSION["email"])) {
//     die(json_encode(array("error" => "Unauthorized"))); // Return a JSON error response
// }

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    // Respond to preflight requests (sent by the browser before the actual request)
    http_response_code(204); // HTTP 204 No Content
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Parse JSON data from the request
    $data = json_decode(file_get_contents("php://input"), true);

    if (empty($data)) {
        die(json_encode(array("error" => "Invalid data received"))); // Return a JSON error response
    }

    // Extract data
    $id = $data['id'];
    $NAME = $data['NAME'];
    $TYPE = $data['TYPE'];
    $email = $data['email'];
    $PERMISSION_NAME = $data['PERMISSION_NAME'];
    $PERMISSION_VALUE = $data['PERMISSION_VALUE'];
    
    
    $host = '51.81.160.154';
$database = 'axv9331_phase3';
$username = 'axv9331_phase3';
$password = 'Group24_WDM';
    
    $mysqli = new mysqli($host, $username, $password, $database);

    if ($mysqli->connect_error) {
        die(json_encode(array("error" => "Connection failed: " . $mysqli->connect_error))); // Return a JSON error response
    }

    // Prepare and execute an SQL UPDATE statement
    $sql = "UPDATE users SET NAME=?, TYPE=?, email=?, PERMISSION_NAME=?, PERMISSION_VALUE=? WHERE id=?";
    $stmt = $mysqli->prepare($sql);

    if (!$stmt) {
        die(json_encode(array("error" => "Prepare failed: " . $mysqli->error))); // Return a JSON error response
    }

    $stmt->bind_param("sssssi", $NAME, $TYPE, $email, $PERMISSION_NAME, $PERMISSION_VALUE, $id);

    if ($stmt->execute()) {
        // Data updated successfully
        echo json_encode(array("message" => "User data updated successfully"));
    } else {
        // Error handling
        echo json_encode(array("error" => "Error updating user data: " . $stmt->error));
    }

    // Close the statement and the database connection
    $stmt->close();
    $mysqli->close();
} else {
    // Handle invalid HTTP methods
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode(array("error" => "Method Not Allowed")); // Return a JSON error response
}

?>
