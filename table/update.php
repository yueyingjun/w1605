<?php
 include "db.php";
 $id=$_GET["id"];
 $attr=$_GET["attr"];
 $val=$_GET["val"];
 $sql="update mytable set {$attr}='{$val}' where id=".$id;
 $db->query($sql);
  if($db->affected_rows>0){
      include "notice.html";
  }
?>