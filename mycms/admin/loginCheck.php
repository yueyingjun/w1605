<?php
  session_start();
  $user=$_POST["user"];
  $pass=md5($_POST["pass"]);
  $sql="select * from admin";
  $result=$db->query($sql);
  while($row=$result->fetch_assoc()){
      if($row["user"]==$user){
          if($row["pass"]==$pass){
             $_SESSION["login"]=1;
             $_SESSION["user"]=$user;
             include ADMIN_TPL."notice1.html";
             exit;
          }
      }
  }

include ADMIN_TPL."notice.html";

?>