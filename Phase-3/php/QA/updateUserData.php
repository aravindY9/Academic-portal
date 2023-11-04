<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Set the origin of your React app
header("Access-Control-Allow-Methods: POST"); // Specify the allowed HTTP method (in this case, just POST)
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true"); // Enable credentials if needed

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    // Respond to preflight requests (sent by the browser before the actual request)
    http_response_code(204); // HTTP 204 No Content
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Parse JSON data from the request
    $data = json_decode(file_get_contents("php://input"), true);

    if (empty($data)) {
        die("Invalid data received.");
    }

    // Extract data
    $id = $data['id'];
    $NAME = $data['NAME'];
    $TYPE = $data['TYPE'];
    $email = $data['email'];
    $PERMISSION_NAME = $data['PERMISSION_NAME'];
    $PERMISSION_VALUE = $data['PERMISSION_VALUE'];

    $dbHost = '51.81.160.154';
    $dbName = 'sxv0451_qaprofile';
    $dbUser = 'sxv0451_sanjay';
    $dbPass = 'JusticeLeague';


    $mysqli = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Prepare and execute an SQL UPDATE statement
    $sql = "UPDATE users SET NAME=?, TYPE=?, email=?, PERMISSION_NAME=?, PERMISSION_VALUE=? WHERE id=?";
    $stmt = $mysqli->prepare($sql);

    if (!$stmt) {
        die("Prepare failed: " . $mysqli->error);
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
    echo "Method Not Allowed";
}
?>
