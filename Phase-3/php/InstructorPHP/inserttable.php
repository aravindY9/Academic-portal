<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");

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
    
    if ($data["Password"] !== $data["Password2"]) {
        // Passwords don't match
        echo json_encode(array("error" => "Passwords don't match"));
        exit;
    }

    // Extract data
    $id = $data['id'];
    $NAME = $data['NAME'];
    $email = $data['email'];
    $password = $data['Password'];
    $password2 = $data['Password2'];
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    
    $host = "localhost"; // Your database host
    $username = "root"; // Your database username
    $password = ""; // Your database password
    $database = "site"; // Your database name

    try {
        // Create a PDO connection to the database
        $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare the SQL statement for inserting data
        $sql = "INSERT INTO users (NAME, ID, TYPE, email, password, PERMISSION_NAME, PERMISSION_VALUE) 
                VALUES (:Name, :id, :type, :email, :password, :permission, :value)";
        $stmt = $pdo->prepare($sql);
        $type = "Student";
        $permission = "VIEW_RECORDS";
        $value = 1;
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
