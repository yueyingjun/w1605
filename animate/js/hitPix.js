/*canvas  画布对象
* cobj    2d对象
* obj1    物体A
* obj2    物体B
*
* 物体属性   x  y   width height
* 物体方法   draw()
*
* */
function hitPix(canvas,cobj,obj1,obj2){
    if(obj1.x+obj1.width<obj2.x||obj2.x+obj2.width<obj1.x||obj1.y+obj1.height<obj2.y||obj2.y+obj2.height<obj1.y){
        return false;
    }
    var minx=obj1.x<obj2.x?obj1.x:obj2.x;
    var maxx=obj1.x+obj1.width>obj2.x+obj2.width?obj1.x+obj1.width:obj2.x+obj2.width;
    var miny=obj1.y<obj2.y?obj1.y:obj2.y;
    var maxy=obj1.y+obj1.height>obj2.y+obj2.height?obj1.y+obj1.height:obj2.y+obj2.height;
    cobj.clearRect(minx,miny,maxx-minx,maxy-miny);
    obj1.draw();
    var data1=cobj.getImageData(minx,miny,maxx-minx,maxy-miny);
    cobj.clearRect(minx,miny,maxx-minx,maxy-miny);
    obj2.draw();
    var data2=cobj.getImageData(minx,miny,maxx-minx,maxy-miny);
    obj1.draw();
    var length=data1.data.length;
    for(var i=3;i<length;i+=4){
        if(data1.data[i]>0&&data2.data[i]>0){
            return true
        }
    }
}