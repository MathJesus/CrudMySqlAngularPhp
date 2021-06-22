<?php

require 'connect.php';

$id = $_GET['id']; 

  // Get by id.
$sql = "SELECT * FROM `user` WHERE `id` ='{$id}' LIMIT 1";

 if($result = mysqli_query($con,$sql))
{
   $cr = 0;

  $row = mysqli_fetch_assoc($result);
  
    $user['id']    = $row['id'];
    $user['username'] = $row['username'];
    $user['password'] = $row['password'];
    $user['firstName'] = $row['firstName'];
    $user['lastName'] = $row['lastName'];
    $user['age'] = $row['age'];
    $user['salary'] = $row['salary'];
    $user['email'] = $row['email'];
   // $cr++;
  
    
   //print_r($user);

  echo json_encode($user);
}
else
{
  http_response_code(404);
}