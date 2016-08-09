<?php
  $sql="select * from category";
  $result=$db->query($sql);
  $link="";
  while($row=$result->fetch_assoc()){
    $link.="<a href='".WEB_PATH."?d=web&f=lists&id=".$row['cid']."'>".$row['cname']."</a>";
  }
  include INDEX_TPL."index.html";
?>