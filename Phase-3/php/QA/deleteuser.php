<?php
if (isset($_GET['id'])) {
    // Get the ID from the URL
    $id = $_GET['id'];

    // Step 1: Set up a database connection
    // Replace with your database name
    $dbHost = '51.81.160.154';
    $dbName = 'sxv0451_qaprofile';
    $dbUser = 'sxv0451_sanjay';
    $dbPass = 'JusticeLeague';

    $connection = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Step 2: Query the Database to delete the row with the given ID
    $id = mysqli_real_escape_string($connection, $id); // For security, escape the input
    $sql = "DELETE FROM users WHERE ID = '$id'"; // Assuming 'CODE' is the column for course codes

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
