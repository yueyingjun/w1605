<?php
$cid=$_POST["cid"];
$gname=$_POST["gname"];
$gprice=$_POST["gprice"];
$sql="insert into goods (gname,gprice,cid) VALUES ('{$gname}','{$gprice}','{$cid}')";
$db->query($sql);
if($db->affected_rows>0){
    echo "<script>alert('添加成功');history.back()</script>";
}
?>