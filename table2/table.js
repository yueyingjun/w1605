$(function(){
    /*
     * 1.查询
     * */
    var tbody=$("tbody");
    var wait=$(".wait");
    wait.css("display","block");
    $.ajax({
        url:"select.php",
        dataType:"json",
        success:function(data){
            var str="";
            for(var i=0;i<data.length;i++){
                str+="<tr id='"+data[i].id+"'>";
                    str+="<td attr='name'>"+data[i].name+"</td>";
                    str+="<td attr='age'>"+data[i].age+"</td>";
                    str+="<td attr='sex'>"+data[i].sex+"</td>";
                    str+="<td attr='nianji'>"+data[i].nianji+"</td>";
                    str+="<td attr='class'>"+data[i].class+"</td>";
                    str+="<td class='remove'>删除</td>";
                str+="</tr>";
            }
            tbody.html(str);
            wait.css("display","none");
        }
    })
/*

添加

*/
    $(".add").click(function(){
        wait.css("display","block");
        $.ajax({
            url:"add.php",
            success:function(data){
                //两条腿  1 数据库存数据
                //2.  视觉上呈现
                if(data){
                    $("<tr id='"+data+"'><td attr='name'></td><td attr='age'></td><td attr='sex'></td><td attr='nianji'></td><td attr='class'></td><td class='remove'>删除</td></tr>").appendTo(tbody)
                }
                wait.css("display","none");
            }
        })
    })

    /*删除*/



    $("table").on("click",".remove",function(){
        wait.css("display","block");
        var that=$(this);
        $.ajax({
            url:"del.php",
            data:{id:that.parent().attr("id")},
            success:function(e){
                if(e=="ok"){
                    that.parent().remove();
                    wait.css("display","none");
                }
            }
        })
    })

    /*更新*/
    $("table").on("dblclick","td:not(.remove)",function(){
        wait.css("display","block");
        var oldv=$(this).val();
        $(this).html("");
        var that=$(this);
        var input=$("<input type='text' value='"+oldv+"'>").appendTo(this).focus();
        input.blur(function(){
            var newv=$(this).val();
            if(newv==oldv){
              //$(this).remove();
              that.html(newv);
            }else{
              var id=that.parent().attr("id");
              var attr=that.attr("attr");
                $.ajax({
                    url:"update.php",
                    data:{id:id,attr:attr,val:newv},
                    success:function(e){
                        if(e=="ok"){
                          that.html(newv);
                        }
                    }
                })
            }
            wait.css("display","none");
        })

    })


})