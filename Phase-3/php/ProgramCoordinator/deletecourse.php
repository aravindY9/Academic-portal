<?php
if (isset($_GET['id'])) {
    // Get the ID from the URL
    $id = $_GET['id'];

    // Step 1: Set up a database connection
    $dbHost = '51.81.160.154';
$dbName = 'axv9331_phase3';
$dbUser = 'axv9331_phase3';
$dbPass = 'Group24_WDM';

    $connection = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Step 2: Query the Database to delete the row with the given ID
    $id = mysqli_real_escape_string($connection, $id); // For security, escape the input
    $sql = "DELETE FROM courses WHERE CODE = '$id'"; // Assuming 'CODE' is the column for course codes

    if (mysqli_query($connection, $sql)) {
        echo "USER with ID $id has been deleted.";
    } else {
        echo "Error deleting course: " . mysqli_error($connection);
    }

    // Close the database connection
    mysqli_close($connection);
} else {
    echo "No ID provided for deletion.";
}
// header("Location: accounts.php");
    // exit;
?>
