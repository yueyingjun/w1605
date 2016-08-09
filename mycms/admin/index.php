<?php
  session_start();
  header("Content-Type:text/html;charset=utf-8");
  if(!isset($_SESSION["login"])){
      include  ADMIN_TPL."notice.html";
      exit;
  }
  include ADMIN_TPL."admin_index.html";
?>