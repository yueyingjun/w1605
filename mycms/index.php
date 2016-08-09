<?php
//单入口文件
 // var_dump($_SERVER);

//运行流程    m->数据 c->控制器 地址栏(路由)   v->视图
//常量   但入口文件
// 绝对路径
  define("PATH_ROOT",substr($_SERVER["SCRIPT_FILENAME"],0,strrpos($_SERVER["SCRIPT_FILENAME"],"/"))."/");
//http  路径
  define("WEB_ROOT","http://".$_SERVER["SERVER_NAME"].substr($_SERVER["SCRIPT_NAME"],0,strrpos($_SERVER["SCRIPT_NAME"],"/"))."/");

//首页路径

define("WEB_PATH",WEB_ROOT."index.php");

//后台模板的路径
  define("ADMIN_TPL",PATH_ROOT."admin/tpl/");

//前台模板的路径
define("INDEX_TPL",PATH_ROOT."tpl/");
  $search=@explode("&",$_SERVER["argv"][0]);

//css
define("CSS_PATH",WEB_ROOT."static/css/");
//js
define("JS_PATH",WEB_ROOT."static/js/");
//img
define("IMG_PATH",WEB_ROOT."static/imgs/");

  foreach($search as $k=>$v){
     $arr=explode("=",$v);
     if($arr[0]=="d"){
         $d=$arr[1];
     }
     if($arr[0]=="f"){
         $f=$arr[1];
     }
  }

  $d=@$d?$d:"web";
  $f=@$f?$f:"index";
 include PATH_ROOT."public/db.php";
 include  PATH_ROOT.$d."/".$f.".php";
?>