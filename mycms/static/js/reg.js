$(function(){
   var reg=/^\w{5,10}$/;
   $(":text").keyup(function(){
       var that=$(this);
        if(!reg.test($(this).val())){
            $(this).next().html("请输入5-10个字符").css("color","red");
            $(":submit").attr("disabled","disabled");
        }else{

            $(this).next().html("success!").css("color","green");
            $(this).attr("flag","true");
            if($(":password").attr("flag")=="true"){
               $(":submit").removeAttr("disabled");
            }
            var url=$("form").attr("url");
            $.ajax({
                url:url,
                type:"post",
                data:{user:$(this).val()},
                success:function(e){
                       if(e=="no"){
                           that.next().html("用户名存在!").css("color","red");
                           that.attr("flag","false");
                           $(":submit").attr("disabled","disabled");
                       }else if(e=="ok"){
                           that.next().html("用户名能用!").css("color","green");
                           that.attr("flag","true");
                           $(":submit").removeAttr("disabled");
                       }
                }
            })

        }
   })

    $(":password").keyup(function(){
        if(!reg.test($(this).val())){
            $(this).next().html("请输入5-10个字符").css("color","red");
            $(":submit").attr("disabled","disabled");
        }else{
            $(this).next().html("success!").css("color","green");
            $(this).attr("flag","true");
            if($(":text").attr("flag")=="true"){
                $(":submit").removeAttr("disabled");
            }
        }
    })
})