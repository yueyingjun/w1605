<?php
include "db.php";
$id=$_GET["id"];
$db->query("delete from mytable where id=".$id);
if($db->affected_rows>0){
    include "notice.html";
}
?>