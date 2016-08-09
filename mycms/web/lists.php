<?php

$cid=$_GET["id"];
$sql="select * from goods where cid=".$cid;
$result=$db->query($sql);
$info="";
while($row=$result->fetch_assoc()){
  $info.="价钱:".$row["gprice"].";名称:".$row["gname"];
}
include  INDEX_TPL."list.html";
?>