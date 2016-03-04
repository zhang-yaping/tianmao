
  $(function(){
    
        var search=$(".search")[0];
        var flag=true;
        var flag1=true;//0--440  440-3000
        var floors=$(".oneF1");
        var jump=$(".jump")[0];
        var btn1=$("li",jump);
        var D=$(".D");
        var floor1=$(".oneF3");
        var ch1=document.documentElement.clientHeight;
        for(var i=0;i<btn1.length;i++){
            btn1[i].index=i;
            btn1[i].onclick=function(){
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                animate(obj,{scrollTop:floors[this.index].t-150})//当前按钮的对应楼层的top赋值给滚动条
            }
            btn1[i].onmouseover=function(){
                D[this.index].style.display="block";
            }
            btn1[i].onmouseout=function(){
                D[this.index].style.display="none";
            }
        }

        window.onscroll=function(){
            var scrollT=getScrollT();
            if(scrollT>=440){
                if(flag){
                    animate(search,{top:0},500);
                    flag=false;
                    flag1=true;
                }               
            }else{
                if(flag1){
                    animate(search,{top:-80});
                    flag1=false;
                    flag=true;
                }               
            }
           
            if(scrollT>=900){
                jump.style.display="block";
            }else{
                jump.style.display="none";
            }

            for(var i=0;i<floors.length;i++){
                floors[i].t=floors[i].offsetTop;
                if(floors[i].t<=scrollT+150){
                    
                    for(var j=0;j<btn1.length;j++){
                        D[j].style.display="none";
                    }
                        D[i].style.display="block";
                }
            }

 var scrollT1=getScrollT();
      
            for(var i=0;i<floor1.length;i++){
            if(floor1[i].offsetTop<scrollT1+ch1){
                var imgs=$("img",floor1[i]);
                for(var j=0;j<imgs.length;j++){
                    imgs[j].src=imgs[j].getAttribute("aa");
                }
            }
        }
}
    
        //获取元素
     	var imgs=$(".imgs");
     	var btn=$(".one1");
        var num=1;
        var banner=$(".banner")[0];
        var bigb=["#e0e0e0","#dadada","#fff701","#dadada","#68c8a5","#b90af9"]
        function move(){
        	if(num==6){
        		num=0;
        	}
        	for(var i=0;i<imgs.length;i++){
        		imgs[i].style.zIndex=2;
            btn[i].style.background="white";
        	}
           imgs[num].style.zIndex=3;
           banner.style.background=bigb[num];
           btn[num].style.background="#ff6700"
           num++;
        }
     	var t=setInterval(move,2000);
       
     	for(var i=0;i<btn.length;i++){
     		btn[i].index=i;
     		btn[i].onmouseover=function(){//滑上事件
     			clearInterval(t);//停止轮播
     			for(var j=0;j<imgs.length;j++){
     				imgs[j].style.zIndex=2;
                    btn[j].style.background="white";
     			}
     			imgs[this.index].style.zIndex=3;
                banner.style.background=bigb[this.index];
                btn[this.index].style.background="#ff6700";
     		}	
        btn[i].onmouseout=function(){
         num=this.index+1
         t=setInterval(move,2000);
        }
     	}

      var word=getClass("hot21");
	  var conbox=getClass("hot6");

	  for(var i=0;i<word.length;i++){
		word[i].index=i;//index保存相应对象的i值，可以使自己定名字
		word[i].onclick=function(){
			
			for(var j=0;j<conbox.length;j++){
				conbox[j].style.display="none";
				word[j].style.fontWeight="normal";
				word[j].style.textDecoration="none";
                word[j].style.color="#8c8c8c";
			}
			
			conbox[this.index].style.display="block";//this表示单击谁指谁
			this.style.fontWeight="bold";
			this.style.textDecoration="underline";
			this.style.color="black"
		
		}
	}
//文本

    var txt=$("#txt")

    txt.onfocus=function(){
        if(txt.value=="猫猫狗狗购物狂欢，给它最好的"){
            txt.value="";
        }
    }
    txt.onblur=function(){
        if(txt.value){

        }else{
            txt.value="猫猫狗狗购物狂欢，给它最好的"
        }
    }


     var txt1=$("#txt1")

    txt1.onfocus=function(){
        if(txt1.value=="猫猫狗狗购物狂欢，给它最好的"){
            txt1.value="";
        }
    }
    txt1.onblur=function(){
        if(txt1.value){

        }else{
            txt1.value="猫猫狗狗购物狂欢，给它最好的"
        }
    }



//桃心
    var xin=$(".xin")
    var hot=$(".hot61")
    for(var i=0;i<hot.length;i++){
        hot[i].index=i;
        hot[i].onmouseover=function(){
            xin[this.index].style.display="block";
        }
         hot[i].onmouseout=function(){
             xin[this.index].style.display="none";
         }    
    }



//楼层左边轮播
    var zuo1=$(".zuo11")[0];
    var you1=$(".you11")[0];
    var img1=$(".img11")[0];
    var box11=$(".box111")[0];
    
    function moveleft(){
    var first=getFirst(box11);
    var last=getLast(box11);
    animate(box11,{left:-120},600,Tween.Linear,function(){
        box11.insertAfter(first,last);
        box11.style.left=0;
    });
} 
var t1=setInterval(moveleft,2000)
    function moveright(){
        var last=getLast(box11);
        box11.insertBefore(last,getFirst(box11))
        box11.style.left=-120+"px";
        animate(box11,{left:0},600,Tween.Linear)
    }
    
   
    zuo1.onmouseover=function(){
        clearInterval(t1);
    }
    zuo1.onmouseout=function(){
        t1=setInterval(moveleft,2000)
    }
    zuo1.onclick=function(){
        moveleft();
    }
    
    you1.onmouseover=function(){
        clearInterval(t1);
    }
    you1.onmouseout=function(){
        t1=setInterval(moveleft,2000)
    }
    you1.onclick=function(){
        moveright();
    }


var zuo2=$(".zuo12")[0];
    var you2=$(".you12")[0];
    var img2=$(".img12")[0];
    var box12=$(".box112")[0];
    
    function moveleft2(){
    var first2=getFirst(box12);
    var last2=getLast(box12);
    animate(box12,{left:-120},600,Tween.Linear,function(){
        box12.insertAfter(first2,last2);
        box12.style.left=0;
    });
} 
var t2=setInterval(moveleft2,2000)
    function moveright2(){
        var last2=getLast(box12);
        box12.insertBefore(last2,getFirst(box12))
        box12.style.left=-120+"px";
        animate(box12,{left:0},600,Tween.Linear)
    }
    
   
    zuo2.onmouseover=function(){
        clearInterval(t2);
    }
    zuo2.onmouseout=function(){
        t2=setInterval(moveleft2,2000)
    }
    zuo2.onclick=function(){
        moveleft2();
    }
    
    you2.onmouseover=function(){
        clearInterval(t2);
    }
    you2.onmouseout=function(){
        t2=setInterval(moveleft2,2000)
    }
    you2.onclick=function(){
        moveright2();
    } 

   
   var zuo3=$(".zuo13")[0];
    var you3=$(".you13")[0];
    var img3=$(".img13")[0];
    var box13=$(".box113")[0];
    
    function moveleft3(){
    var first3=getFirst(box13);
    var last3=getLast(box13);
    animate(box13,{left:-120},600,Tween.Linear,function(){
        box13.insertAfter(first3,last3);
        box13.style.left=0;
    });
} 
var t3=setInterval(moveleft3,2000)
    function moveright3(){
        var last3=getLast(box13);
        box13.insertBefore(last3,getFirst(box13))
        box13.style.left=-120+"px";
        animate(box13,{left:0},600,Tween.Linear)
    }
    
   
    zuo2.onmouseover=function(){
        clearInterval(t3);
    }
    zuo3.onmouseout=function(){
        t3=setInterval(moveleft3,2000)
    }
    zuo3.onclick=function(){
        moveleft3();
    }
    
    you3.onmouseover=function(){
        clearInterval(t3);
    }
    you3.onmouseout=function(){
        t3=setInterval(moveleft3,2000)
    }
    you3.onclick=function(){
        moveright3();
    } 



var zuo4=$(".zuo14")[0];
    var you4=$(".you14")[0];
    var img4=$(".img14")[0];
    var box14=$(".box114")[0];
    
    function moveleft4(){
    var first4=getFirst(box14);
    var last4=getLast(box14);
    animate(box14,{left:-120},600,Tween.Linear,function(){
        box14.insertAfter(first4,last4);
        box14.style.left=0;
    });
} 
var t4=setInterval(moveleft4,2000)
    function moveright4(){
        var last4=getLast(box14);
        box14.insertBefore(last4,getFirst(box14))
        box14.style.left=-120+"px";
        animate(box14,{left:0},600,Tween.Linear)
    }
    
   
    zuo4.onmouseover=function(){
        clearInterval(t2);
    }
    zuo4.onmouseout=function(){
        t4=setInterval(moveleft4,2000)
    }
    zuo4.onclick=function(){
        moveleft4();
    }
    
    you4.onmouseover=function(){
        clearInterval(t4);
    }
    you4.onmouseout=function(){
        t4=setInterval(moveleft4,2000)
    }
    you4.onclick=function(){
        moveright4();
    } 


    var zuo5=$(".zuo15")[0];
    var you5=$(".you15")[0];
    var img5=$(".img15")[0];
    var box15=$(".box115")[0];
    
    function moveleft5(){
    var first5=getFirst(box15);
    var last5=getLast(box15);
    animate(box15,{left:-120},600,Tween.Linear,function(){
        box15.insertAfter(first5,last5);
        box15.style.left=0;
    });
} 
var t5=setInterval(moveleft5,2000)
    function moveright5(){
        var last5=getLast(box15);
        box15.insertBefore(last5,getFirst(box15))
        box15.style.left=-120+"px";
        animate(box15,{left:0},600,Tween.Linear)
    }
    
   
    zuo5.onmouseover=function(){
        clearInterval(t5);
    }
    zuo5.onmouseout=function(){
        t5=setInterval(moveleft5,5000)
    }
    zuo5.onclick=function(){
        moveleft5();
    }
    
    you5.onmouseover=function(){
        clearInterval(t5);
    }
    you5.onmouseout=function(){
        t5=setInterval(moveleft5,2000)
    }
    you5.onclick=function(){
        moveright5();
    } 


var zuo8=$(".zuo18")[0];
    var you8=$(".you18")[0];
    var img8=$(".img18")[0];
    var box18=$(".box118")[0];
    
    function moveleft8(){
    var first8=getFirst(box18);
    var last8=getLast(box18);
    animate(box18,{left:-120},600,Tween.Linear,function(){
        box18.insertAfter(first8,last8);
        box18.style.left=0;
    });
} 
var t8=setInterval(moveleft8,2000)
    function moveright8(){
        var last8=getLast(box18);
        box18.insertBefore(last8,getFirst(box18))
        box18.style.left=-120+"px";
        animate(box18,{left:0},600,Tween.Linear)
    }
    
   
    zuo8.onmouseover=function(){
        clearInterval(t8);
    }
    zuo8.onmouseout=function(){
        t8=setInterval(moveleft8,2000)
    }
    zuo8.onclick=function(){
        moveleft8();
    }
    
    you8.onmouseover=function(){
        clearInterval(t8);
    }
    you8.onmouseout=function(){
        t8=setInterval(moveleft,2000)
    }
    you8.onclick=function(){
        moveright8();
    } 


   var onezuofu=$(".oneF3");
   for(var i=0;i<onezuofu.length;i++){
    onezuofu[i].onmouseover=function(e){
        var ev=e||window.event;
        var obj=ev.target||ev.srcElement;
        obj.style.left=-2+"px";
    }
    onezuofu[i].onmouseout=function(e){
        var ev=e||window.event;
        var obj=ev.target||ev.srcElement;
        obj.style.left=0+"px";
    }

   }



   //banner特效
var sidebarLeftLi=$(".left-list");
var center=$(".center");
var sidebarLeftWord=$(".list-zi");
for(var i=0;i<sidebarLeftLi.length;i++)
{
    sidebarLeftLi[i].index=i;
    sidebarLeftLi[i].onmouseover=function()
    {
        for(var j=0;j<center.length;j++)
        {
            center[j].style.display="none"; 
            sidebarLeftWord[j].style.textDecoration="none";
    }
        center[this.index].style.display="block";
        animate(center[this.index],{left:190,opacity:1},500)    
        animate(sidebarLeftLi[this.index],{paddingLeft:5},300)    
    }
    sidebarLeftLi[i].onmouseout=function()
    {
        for(var i=0;i<center.length;i++)
        {
            center[i].style.display="none";
            sidebarLeftWord[i].style.textDecoration="none";
        }
        animate(sidebarLeftLi[this.index],{paddingLeft:0},300);    
        animate(center[this.index],{left:180,opacity:0},500);    
        sidebarLeftLi[this.index].style.backgroundImage="";
    }
}
    

//下拉框
        var yiji=$(".xiala");
        var erji=$(".top-erji");

        for(var i=0;i<yiji.length;i++){
            yiji[i].index=i;
            hover(yiji[i],function(){
                var lis=$("li",erji[this.index]);
                //找当前二级菜单下的li
                //alert(lis.length)
                var h=lis[0].offsetHeight;
                //erji[this.index].style.height=lis.length*h+"px";
                animate(erji[this.index],{height:lis.length*h},200,Tween.Linear);
            },function(){
                animate(erji[this.index],{height:0},100,Tween.Linear);
          })
        }



//漂浮帮助

var rightpfkbox=$(".helpnav")[0];
 var rightpfk=$("img",rightpfkbox);
 for (var i= 0; i<rightpfk.length;i++) {
    rightpfk[i].index=i;
    rightpfk[i].onmouseover=function(){
         rightpfk[this.index].src=rightpfk[this.index].getAttribute("aa");
       }
    rightpfk[i].onmouseout=function(){
        rightpfk[this.index].src=rightpfk[this.index].getAttribute("bb");
        
       }
 }

 var fdsmall=$(".fdsmall");
 var rrbox=$(".rrbox");
 for (var j = 0; j<rrbox.length; j++) {
        rrbox[j].index=j;
     for (var m = 0; m<fdsmall.length; m++) {
         rrbox[j].onmouseover=function(){
           fdsmall[this.index].style.display="block";
           animate(fdsmall[this.index],{right:28},200,Tween.Linear);
         }
         rrbox[j].onmouseout=function(){
           fdsmall[this.index].style.display="none";
         animate(fdsmall[this.index],{right:45},200,Tween.Linear);
         }
     }
 }
 })


