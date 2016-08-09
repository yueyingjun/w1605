<?php
/*
 * 君子协定
 * 1. 前端验证
 * 2. 后台验证
 * */
 $user=$_POST["user"];
 $pass=md5($_POST["pass"]);

 $sql="insert into admin (user,pass) VALUES ('{$user}','{$pass}')";
 $db->query($sql);
 if($db->affected_rows>0){
     include ADMIN_TPL."notice.html";
 }

?>