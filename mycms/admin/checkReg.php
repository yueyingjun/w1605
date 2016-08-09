<?php
 $user=$_POST["user"];
 $sql="select user from admin";
 $result=$db->query($sql);
 while($row=$result->fetch_assoc()){
     if($row["user"]==$user){
         echo "no";
         exit;
     }
 }
 echo "ok";
?>