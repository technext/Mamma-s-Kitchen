<?php
if (isset($_POST['submit'])) { 
      $name = $_POST['name'];
      $email = $_POST['email'];
      $date = $_POST['datepicker'];
      $phone = $_POST['phone'];
      $ToEmail = 'test@test.com';
      $EmailSubject = "Reservation"; 
      $mailheader = "From: ".$_POST["email"]."\r\n"; 
      $mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
      $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
      $MESSAGE_BODY = "Name: ".$_POST["name"]."<br>"; 
      $MESSAGE_BODY .= "Email: ".$_POST["email"]."<br>"; 
      $MESSAGE_BODY .= "Subject: Reservation<br />";   
      if(mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader))
      {
      echo "<script>alert('Mail was sent !');</script>";
      echo "<script>window.location.href ='http://localhost/Mamma-s-Kitchen';</script>";
      }
      else
      {
      echo "<script>alert('Mail was not sent. Please try again later');</script>";
      }
}