$(function(){
    /*菜单选项*/
    $(".menu li").click(function(){
        var index=$(this).index(".menu li");
        $(".option").css("display","none").eq(index).css("display","block");
        $(".menu li").removeClass("active");
        $(this).addClass("active");

    })

     $(".option li").click(function(){
            $(".option li").css("color","#000").css("text-shadow","none");
            $(this).css("color","red").css("text-shadow","0 0 3px red");

     })

    /*
    * 画图功能
    * */
    var canvas=document.getElementsByTagName("canvas")[0];
    var copy=document.getElementsByClassName("copy")[0];
    var xp=$(".xp")[0];
    var cobj=canvas.getContext("2d");
    var canvasObj=new shape(copy,cobj,xp);



    /*画图*/
    $(".option:eq(1) li").click(function(){
        if($(this).attr("data-role")=="pen"){
            canvasObj.pen();
        }else {
            canvasObj.type = $(this).attr("data-role");

            if ($(this).attr("data-role") == "bian") {
                canvasObj.bianNum = prompt("请输入边数", 5);
            }
            if ($(this).attr("data-role") == "jiao") {
                canvasObj.jiaoNum = prompt("请输入角数", 5);
            }
            canvasObj.draw();
        }

    })

    /*画图方式*/
    $(".option:eq(3) li").click(function(){

            canvasObj.style = $(this).attr("data-role");
            canvasObj.draw();

    })

    /*设置线条宽度*/
    $(".option:eq(4) li:not(.input)").click(function(){
        canvasObj.lineWidth=$(this).attr("data-role");
        canvasObj.draw();
    })

    $(".input input").change(function(){

        canvasObj.lineWidth=$(this).val();
        canvasObj.draw();
    })

    /*设置颜色*/
    $(".option:eq(2) input").change(function(){
        canvasObj[$(this).attr("data-role")]=$(this).val();
    })

    /*橡皮*/
    $(".menu li:last").click(function(){
        canvasObj.clear();
    })
    $(".option:last input").change(function(){
        canvasObj.xpsize=$(this).val();
    })


    /*返回*/

    $(".back").click(function(){
         if(canvasObj.histroy.length==0){
             cobj.clearRect(0,0,canvas.width,canvas.height);
             setTimeout(function(){
                alert("不能返回");
             },10)
         }

         if(canvasObj.isback){
                if(canvasObj.histroy.length==1){
                    canvasObj.histroy.pop();
                    cobj.clearRect(0,0,canvas.width,canvas.height);
                }else{
                    canvasObj.histroy.pop();
                    cobj.putImageData(canvasObj.histroy.pop(),0,0);

                }
         }else{
             cobj.putImageData(canvasObj.histroy.pop(),0,0);
         }

        canvasObj.isback=false;
    })


    /*save*/

    $(".save").click(function(){
        if(canvasObj.histroy.length>0) {
            location.href = canvas.toDataURL().replace("image/png", "stream/octet");
        }
    })

    /*new*/

    $(".new").click(function(){
        if(canvasObj.histroy.length>0){
            var yes=confirm("是否保存");
            if(yes){
                location.href=canvas.toDataURL().replace("image/png","stream/octet");
            }
                canvasObj.histroy=[];
                cobj.clearRect(0,0,canvas.width,canvas.height);

        }
    })






})