<?php
require 'connect.php';

 $postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  print_r($request);
  
  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->username));
  $password = mysqli_real_escape_string($con, trim($request->password));
  $firstName = mysqli_real_escape_string($con, trim($request->firstName));
  $lastName = mysqli_real_escape_string($con, trim($request->lastName));
  $age = mysqli_real_escape_string($con, trim($request->age));
  $salary = mysqli_real_escape_string($con, trim($request->salary));
  $email = mysqli_real_escape_string($con, trim($request->email));
  

  // Store.
  $sql = "INSERT INTO `user`(
     `username`,
     `password`,
     `firstName`,
     `lastName`,
     `age`,
     `salary`,
     `email`
    ) VALUES
    ('{$username}',
    '{$password}',
    '{$firstName}',
    '{$lastName}',
    '{$age}',
    '{$salary}',
    '{$email}'
  )";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
  }
  else
  {
    http_response_code(422);
  }
}