<?php
session_start();
header("Access-Control-Allow-Origin: https://axv9331.uta.cloud");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
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
    $email = $data['email'];
    $type = $data["TYPE"];
    // print_r($data);
    // $password = $data['Password'];
    // $password2 = $data['Password2'];
    $password_hash = password_hash("password123", PASSWORD_DEFAULT);
    
    $host = '51.81.160.154';
    $database = 'axv9331_phase3';
    $username = 'axv9331_phase3';
    $password = 'Group24_WDM';
    
    try {
        // Create a PDO connection to the database
        $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare the SQL statement for inserting data
        $sql = "INSERT INTO users (NAME, ID, TYPE, EMAIL, PASSWORD, PERMISSION_NAME, PERMISSION_VALUE) 
                VALUES (:Name, :id, :type, :email, :password, :permission, :value)";
        $stmt = $pdo->prepare($sql);
        // $type = "Student";
        $permission = $data["PERMISSION_NAME"];
        $value = $data["PERMISSION_VALUE"];
        // Bind parameters
        $stmt->bindParam(':Name', $NAME);
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':type', $type);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password_hash);
        $stmt->bindParam(':permission', $permission);
        $stmt->bindParam(':value', $value);

        // Execute the prepared statement to insert the data
        $stmt->execute();
        $response=array();
        echo json_encode($response["message"] = "Success");
        // session_start();
        // $_SESSION["success"] = "Save Success";
        // header("Location:login.php");
        // exit;
        // echo "Course created successfully!";
    } catch (PDOException $e) {
        // header("Location:signup-failed.php");
        // exit;
        // session_start();
        // $_SESSION['error'] = "An error occurred: " . $e->getMessage();
        $response=array();
        echo json_encode($response["error"] = $e->getMessage());
        // echo $_SESSION['error'];
        // header("Location: signup.php");
        // exit;
    }
    // Close the statement and the database connection
    $pdo = null;
} else {
    // Handle invalid HTTP methods
    header("HTTP/1.0 405 Method Not Allowed");
    echo "Method Not Allowed";
}
?>
