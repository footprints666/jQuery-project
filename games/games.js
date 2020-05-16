$(function(){
    //动态添加图片
   var html=""
   imgArr=[
        "images/1.png",
        "images/2.png",
        "images/3.png",
        "images/4.png",
   ]
   imgArr= imgArr.concat(imgArr);
   imgArr= imgArr.concat(imgArr);
   console.log(imgArr)

   //随机打乱数组
   imgArr.sort(function(){
       return Math.random()-0.5
   })

   //渲染图片
   for(var i=0;i<imgArr.length;i++){
    html+="<div class='item' data-id="+(i+1)+">"
    html+=   "<img src="+imgArr[i]+" >"
    html+=    " <p ></p>"
    html+= "</div>"
   }
   $(".container").html(html);

   //翻牌
   var n=0;
   var count=0;//记录图片相同的组数
   var id1,id2,src1,src2;
   var flag=true;//开关
   $(".item").click(function(){
       if(flag){
        //防止在已翻开的卡牌上点击计数
        if( $(this).find("img").hasClass("on")){
            return;
        }
        n++;
        $(this).find("img").css({opacity:1,transform:"scale(1,1)"}).addClass("on");
        $(this).find("p").css({opacity:0,transform:"scale(0,1)"})
        if(n%2==0){ 
            //偶数次点击
            flag=false;
            id2=$(this).attr("data-id");
            src2=$(this).find("img").attr("src");
            if(src1==src2){
                flag=true;
                console.log("相等");
                count++;
                if(count==8){
                    alert("恭喜你，挑战成功")
                }  
            }else{
                 console.log("不相等");
                 setTimeout(function(){
                     Fz(id1);
                     Fz(id2);
                     flag=true;
                 },600)  
            }  
        }else{
             //奇数次点击
            id1=$(this).attr("data-id");
            src1=$(this).find("img").attr("src");
 
        }
       }
   })

   //翻转函数封装
   function Fz(ids){
    $("[data-id="+ids+"]").find("img").css({opacity:0,transform:"scale(0,1)"}).removeClass("on");
    $("[data-id="+ids+"]").find("p").css({opacity:1,transform:"scale(1,1)"})
   }



})