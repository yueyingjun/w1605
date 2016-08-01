function jquery(selector){
    if(typeof selector=="string"){
        var objs=document.getElementsByTagName(selector);
        for(var i=0;i<objs.length;i++){
            this[i]=objs[i];
        }
        this.length=objs.length;
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
                callback();
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
    }
}

function $(selector){
    return new jquery(selector);
}





