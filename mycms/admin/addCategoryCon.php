<?php
 $cname=$_POST["cname"];
 $cinfo=$_POST["cinfo"];
 $sql="insert into category (cname,cinfo) VALUES ('{$cname}','{$cinfo}')";
 $db->query($sql);
 if($db->affected_rows>0){
     echo "<script>alert('添加成功');history.go(-1)</script>";
 }
?>