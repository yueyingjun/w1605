/*
*  obj  对象
*    url  地址
*    data 传递的数据
 *   type 传递的方法
  *  dataType    返回数据的类型
   * success     当数据返回成功之后,我们要做的事情
* */
function ajax(obj){
    if(typeof obj!="object"){
        console.error("参数必须是json格式");
        return false;
    }
    if(obj.url==undefined){
        console.error("请输入url地址");
        return false;
    }
    /*参数初始化*/

    var url=obj.url;
    var type=obj.type||"post";
    var dataType=obj.dataType||"text";
    var data=obj.data;
    if(typeof data=="object"){
        var str="";
        for(var i in data){
            str+=i+"="+data[i]+"&";
        }
        data=str.slice(0,-1);
    }

    var xmlobj=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");

    xmlobj.onreadystatechange=function(){
        if(xmlobj.readyState==4){
            if(xmlobj.status==200){
                  if(dataType=="text"){
                      var result=xmlobj.responseText;
                  }else if(dataType=="xml"){
                      var result=xmlobj.responseXML;
                  }else if(dataType=="json"){
                      var str=xmlobj.responseText;
                      var result=eval("("+str+")");
                  }

                  obj.success(result)


            }
        }
    }
    if(type=="get"){
        xmlobj.open("get",url+"?"+data);
        xmlobj.send();
    }else if(type=="post"){
        xmlobj.open("post",url);
        xmlobj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xmlobj.send(data);
    }




}