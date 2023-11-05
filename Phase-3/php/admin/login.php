<?php
header("Access-Control-Allow-Origin: https://axv9331.uta.cloud");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (empty($data)) {
        echo json_encode(array("error" => "Invalid data received."));
        exit;
    }

    $email = $data['email'];
    $password = $data['password'];

    $host = '51.81.160.154';
    $username = 'axv9331_phase3';
    $database = 'axv9331_phase3';
    $db_password = 'Group24_WDM';
    

    $connection = mysqli_connect($host, $username, $db_password, $database);

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM users WHERE EMAIL = '$email'";
    $result = mysqli_query($connection, $sql);

    if ($result) {
        $user = mysqli_fetch_assoc($result);

        if ($user) {
            // User found, check if the password matches from the database
            $storedPassword = $user['PASSWORD'];
            if (password_verify($password, $storedPassword)) {
                session_start();
                $_SESSION['email'] = $email;
                $_SESSION["id"] = $user["ID"];

                // Send a JSON response with role and success
                $response = array();
                $response['success'] = true;
                $response['role'] = $user['TYPE'];
                $response['email'] = $email; // Include email in the response

                // Output JSON response after setting session data
                echo json_encode($response);
                exit;
            } else {
                // Invalid password
                $response = array();
                $response['error'] = 'Invalid email or password';
                echo json_encode($response);
                exit();
            }
        } else {
            // User not found
            $response = array();
            $response['error'] = 'User not found';
            echo json_encode($response);
            exit();
        }
    } else {
        die("Error: " . mysqli_error($connection));
    }
}
?>
