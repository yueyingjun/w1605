<?php
$db=new mysqli("localhost","root","root","lists");
$db->query("set names utf8");
$result=$db->query("select * from mytable");//
$arr=array();
while($row=$result->fetch_assoc()){
    $arr[]=$row;
}
echo json_encode($arr);




?>
