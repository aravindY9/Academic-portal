<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
if (isset($_GET['id'])) {
    // Get the ID from the URL
    $id = $_GET['id'];

    // Step 1: Set up a database connection
    $host = "localhost"; // Replace with your database host
    $username = "root"; // Replace with your database username
    $password = ""; // Replace with your database password
    $database = "site"; // Replace with your database name

    $connection = mysqli_connect($host, $username, $password, $database);

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Step 2: Query the Database to delete the row with the given ID
    $id = mysqli_real_escape_string($connection, $id); // For security, escape the input
    $sql = "DELETE FROM users WHERE ID = '$id'"; // Assuming 'CODE' is the column for course codes

    if (mysqli_query($connection, $sql)) {
        $response=array();

        echo json_encode($response["message"]= "USER with ID $id has been deleted.");
    } else {
        // echo "Error deleting course: " . mysqli_error($connection);
        $response=array();

        echo json_encode($response["error"]= mysqli_error($connection));
    }

    // Close the database connection
    mysqli_close($connection);
} else {
    echo "No ID provided for deletion.";
}
// header("Location: accounts.php");
    // exit;
?>
