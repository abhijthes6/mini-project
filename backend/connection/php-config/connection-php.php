<?php
echo "Service started  successfully...!";
$conn = new mysqli("localhost", "root","","hire_hub");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";
  ?>