<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        table{
            width:800px;margin:auto;
            border-collapse: collapse;
            border:1px solid #000;
        }
        th,td{
            border:1px solid #000;
        }
        .add{
            width:798px;height:30px;
            font-size:20px;
            text-align: center;
            line-height: 30px;
            border:1px solid #000;
            border-top:none;
            margin:0 auto;
            cursor: pointer;
            display: block;
            text-decoration: none;
            color:#000;
        }
    </style>
    <script src="../jquery.js"></script>
    <script>
        $(function(){
            $("table").on("dblclick","td:not(.remove)",function(){
                 var oldv=$(this).html();
                 $(this).html("");
                 var that=$(this);
                 var input=$("<input type='text' value='"+oldv+"'>").appendTo($(this)).focus();
                 input.blur(function(){
                     var newv=$(this).val();
                     if(newv==oldv){
                         $(this).remove();
                         that.html(newv);
                     }else{
                         var id=that.parent().attr("id");
                         var attr=that.attr("attr");
                         location.href="update.php?id="+id+"&attr="+attr+"&val="+newv;
                     }
                 })


            })
        })
    </script>
</head>
<body>
   <table>
       <tr>
           <th>姓名</th>
           <th>性别</th>
           <th>年龄</th>
           <th>年级</th>
           <th>班级</th>
           <th>操作</th>
       </tr>
       <?php
        include "db.php";
        $sql="select * from mytable";
        $result=$db->query($sql);


        while($row=$result->fetch_assoc()){
       ?>
       <tr id="<?php echo $row['id']?>">
           <td attr="name"><?php echo $row["name"]?></td>
           <td attr="sex"><?php echo $row["sex"]?></td>
           <td attr="age"><?php echo $row["age"]?></td>
           <td attr="nianij"><?php echo $row["nianij"]?></td>
           <td attr="class"><?php echo $row["class"]?></td>
           <td class="remove"><a href="del.php?id=<?php echo $row['id']?>">删除</a></td>
       </tr>

       <?php
        }
      ?>
   </table>
<a href="add.php" class="add">
    +
</a>
</body>
</html>