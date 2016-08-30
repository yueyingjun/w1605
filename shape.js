function shape(canvas,cobj){
  this.canvas=canvas;
  this.cobj=cobj;
  this.history=[];
  this.fillStyle="#000";
  this.strokeStyle="#000";
  this.lineWidth=1;
  this.style="stroke";
  this.type="line";
}
shape.prototype={
    init:function(){
        this.cobj.fillStyle=this.fillStyle;
        this.cobj.strokeStyle=this.strokeStyle;
        this.cobj.lineWidth=this.lineWidth;

    },
    draw:function(){
        var that=this;
        that.canvas.onmousedown=function(e){
            that.init();
            var ox= e.offsetX;
            var oy= e.offsetY;
            that.canvas.onmousemove=function(e){
                var movex= e.offsetX;
                var movey= e.offsetY;
                that.cobj.clearRect(0,0,that.canvas.width,that.canvas.height);
                if(that.history.length!==0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }

                that[that.type](ox,oy,movex,movey);

            }
            that.canvas.onmouseup=function(){
                that.history.push(that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height));
                that.canvas.onmousemove=null;
                that.canvas.onmouseup=null;
            }
        }
    },
    line:function(x,y,x1,y1){
      this.cobj.beginPath();
      this.cobj.moveTo(x,y);
      this.cobj.lineTo(x1,y1);
      this.cobj.stroke();
    },
    rect:function(x,y,x1,y1){
        this.cobj.beginPath();
        this.cobj.rect(x,y,x1-x,y1-y);
        this.cobj[this.style]();

    },
    arc:function(x, y,x1,y1){
        this.cobj.beginPath();
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        this.cobj.arc(x,y,r,0,Math.PI*2)
        this.cobj[this.style]();
    }
}
