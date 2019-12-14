<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "student_db";
$rows=array();
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$json = array();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $rollno = $_GET['rollno'];

    $sql = "SELECT * FROM student".($rollno?" where rollno=$rollno":'');
    $result = $conn->query($sql);

    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            
                $rows[] = $row;    
        }
        $json=$rows;
    }

} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    
    $sql = "INSERT INTO STUDENT (NAME) VALUES('" . $name . "')";
    $result = $conn->query($sql);
    $json = array("result"=>$result);
} else if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"),$post_vars);
    $rollno = $post_vars['rollno'];
    $name = $post_vars['name'];
    
    $sql = "UPDATE STUDENT SET NAME = '" . $name . "' WHERE ROLLNO = " . $rollno;
    $result = $conn->query($sql);
    $json = array("result"=>$result);
} else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    parse_str(file_get_contents("php://input"),$post_vars);
    $rollno = $post_vars['rollno'];
    
    $sql = "DELETE FROM STUDENT WHERE ROLLNO = " . $rollno;
    $result = $conn->query($sql);
    $json = array("result"=>$result);
}


$conn->close();

header('Content-type: application/json');
echo json_encode($json);
?>