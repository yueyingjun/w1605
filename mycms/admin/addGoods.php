<?php
$sql="select * from category";
$result=$db->query($sql);
$list="";
while($row=$result->fetch_assoc()){
  $list.="<option value='".$row['cid']."'>".$row['cname']."</option>";
}
include  ADMIN_TPL."addGoods.html";
?>