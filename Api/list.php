<?php
require 'connect.php';
error_reporting(E_ERROR);
$user = [];
$sql = "SELECT * FROM  user";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $user[$cr]['id'] = $row['id'];
    $user[$cr]['username'] = $row['username'];
    $user[$cr]['password'] = $row['password'];
    $user[$cr]['firstName'] = $row['firstName'];
    $user[$cr]['lastName'] = $row['lastName'];
    $user[$cr]['age'] = $row['age'];
    $user[$cr]['salary'] = $row['salary'];
    $user[$cr]['email'] = $row['email'];
    $cr++;
  }
    
    // print_r($user);

  echo json_encode($user);
}
else
{
  http_response_code(404);
}
?>