<?php
include "db.php";
$sql="insert into mytable (name,age,sex,nianij,class) VALUES ('','','','','')";
$db->query($sql);
if($db->affected_rows>0){
    include "notice.html";
}
?>