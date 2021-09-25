module.exports=f5;
function f5(){
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    var d=document.getElementById("time").value;
   d.value= `hour :${hour} minute:${minute} second:${second}`
    
    var rd=Math.floor(Math.random()*1000);
    return rd;

}