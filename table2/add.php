<?php
include "db.php";
$sql="insert into mytable (name,age,sex,nianji,class) VALUES ('','','','','')";
$db->query($sql);
if($db->affected_rows>0){
    echo $db->insert_id;
}
?>