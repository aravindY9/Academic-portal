<?php
header("Access-Control-Allow-Origin: https://axv9331.uta.cloud");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
if (isset($_GET['id'])) {
    // Get the ID from the URL
    
    $id = $_GET['id'];
    echo $id;
    // Step 1: Set up a database connection
    $host = '51.81.160.154';
    $username = 'axv9331_phase3';
    $database = 'axv9331_phase3';
    $password = 'Group24_WDM'; // Replace with your database name

    $connection = mysqli_connect($host, $username, $password, $database);

    // if (!$connection) {
    //     die("Connection failed: " . mysqli_connect_error());
    // }

    // Step 2: Query the Database to delete the row with the given ID
    $id = mysqli_real_escape_string($connection, $id); // For security, escape the input
    $sql = "DELETE FROM courses WHERE CODE = '$id'"; // Assuming 'CODE' is the column for course codes

    if (mysqli_query($connection, $sql)) {
        $response=array();

        echo json_encode($response["message"]= "course with code $id has been deleted.");
    } else {
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
