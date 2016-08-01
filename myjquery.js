function jquery(selector,context){
    if(typeof selector=="string"){
        var context=context||[document];
        var reg=/[\.#]?[a-z][a-z1-6_-]{0,10}\b/g;
        var selectorArr=selector.match(reg);
        for(var i=0;i<selectorArr.length;i++){
            var context=this.getEle(selectorArr[i],context);
        }
        for(var i=0;i<context.length;i++){
            this[i]=context[i]
        }
        this.length=context.length;

    }else  if(typeof selector=="object"){
        this[0]=selector;
        this.length=1;
    }
}
jquery.prototype={
    each:function(callback){
        for(var i=0;i<this.length;i++)  {
            callback(i,this[i])
        }
    },
    click:function(callback){
        this.each(function(index,obj){
            obj.onclick=function(){
                callback.call(obj);
            }
        })

        return this;
    },
    mouseover:function(callback){
        this.each(function(index,obj){
            obj.onmouseover=function(){
                callback();
            }
        })
        return this;
    },
    html:function(val){
        if(val){
            this.each(function(index,obj){
                obj.innerHTML=val;
            })
        }else{
            return this[0].innerHTML;
        }

        return this;
    },

    css:function(cssObj){
        this.each(function(index,obj){
            for(var i in cssObj){
                if(i=="width"||i=="height") {
                    obj.style[i] = cssObj[i]+"px";
                }else{
                    obj.style[i] = cssObj[i];
                }
            }
        })
        return this;
    },

    attr:function(attrObj){
        this.each(function(index,obj){
            for(var i in attrObj){
                obj.setAttribute(i,attrObj[i]);
            }
        })

        return this;
    },

    getEle:function(selector,context){
        var arr=[];
        if(typeof selector=="string"){
            if(selector.charAt(0)=="."){
                for(var i=0;i<context.length;i++){
                    var objs=context[i].getElementsByClassName(selector.substr(1));
                    for(var j=0;j<objs.length;j++){
                        arr.push(objs[j]);
                    }
                }
            }else if(/^[a-z][a-z1-6]{0,10}$/.test(selector)){
                for(var i=0;i<context.length;i++){
                    var objs=context[i].getElementsByTagName(selector);
                    for(var j=0;j<objs.length;j++){
                        arr.push(objs[j]);
                    }
                }
            }else if(selector.charAt(0)=="#"){
                objs=[document.getElementById(selector.substr(1))];
            }
        }
        return arr;
    },


    eq:function(num){
      this[0]=this[num];
      this.length=1;
      return this;
    },
    index:function(ele){
       for(var i=0;i<this.length;i++){
           if(this[i]==ele){
               return i;
           }
       }

    }
}

function $(selector,context){
    return new jquery(selector,context);
}





