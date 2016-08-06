
function jquery(selector){
    this.flag="jquery";
  if(typeof selector=="string"){
      if(selector.charAt(0)=="."){
            var objs=this.getClass(selector.substr(1));

            for(var i=0;i<objs.length;i++){
                this[i]=objs[i];
            }
             //this.length=objs.length;

           this.length=objs.length;

      }else if(/^[a-z][a-z1-6]{0,10}$/.test(selector)){
          var objs=document.getElementsByTagName(selector);
          for(var i=0;i<objs.length;i++){
              this[i]=objs[i];
          }
          //this.length=objs.length;

          this.length=objs.length;
      }else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selector)){
            var newele=document.createElement(selector.slice(1,-1));
            this[0]=newele;
            this.length=1;
      }
  }else if(typeof selector=="function"){
     this.ready(selector);
  }else if(typeof  selector=="object"&&selector.nodeType==1){
      this[0]=selector;
      this.length=1;
  }else if(typeof selector=="object"&&selector.flag=="jquery"){
      return selector;
  }
}

jquery.fn=jquery.prototype={
    size:function(){
        return this.length;
    },
    getClass:function(classname,context){
            var  context=context||document;
            if(context.getElementsByClassName){
                return context.getElementsByClassName(classname);
            }else{
                var arr=[];
                var alls=context.getElementsByTagName("*");
                for(var i=0;i<alls.length;i++){
                    if(this.checkClass(classname,alls[i].className)){
                        arr.push(alls[i]);
                    }
                }

                return arr;
            }
    },

    checkClass:function(class1,class2){
        var arr=class2.split(" ");
        for(var i=0;i<arr.length;i++){
            if(arr[i]==class1){
                return true;
            }
        }
        return false

    },
    html:function(val){
        for(var i=0;i<this.length;i++){
            this[i].innerHTML=val;
        }
        return this;
    },
    css:function(cssObj){
        this.each(function(index,obj){
           for(var i in cssObj){
               if(i=="width"||i=="height"||i=="margin"){
                   obj.style[i]=cssObj[i]+"px";
               }else{
                   obj.style[i]=cssObj[i]
               }
           }
        })
    },

    each:function(callback){
       for(var i=0;i<this.length;i++){
           callback(i,this[i]);
       }
    },
    click:function(callback){
        this.each(function(index,obj){
            obj.onclick=function(){
                callback.call(obj);
            }
        })
    },
    eq:function(num){
      this.length=1;
      this[0]=this[num];
      return this;
    },

    index:function(ele){
      for(var i=0;i<this.length;i++){
          if(ele==this[i]){
              return i;
          }
      }

    },
    append:function(parent){
      parent.appendChild(this[0]);
        return this;
    },
    ready:function(selector){
        window.onload=function(){
            selector()
        }
    },
    get:function(num){
        return this[num];
    },
    extend:function(obj){
      for(var i in obj){
        jquery.fn[i]=obj[i];
      }
    }
}

function $(selector){

    return new jquery(selector);
}

window.jQuery=$;














