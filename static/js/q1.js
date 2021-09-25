function f5() {
    var x = document.getElementById("show6");
    if (x.style.display === "none") {
      x.style.display = "block";
      x.innerHTML="Clue 2: It is a realm."
      // x.classList.remove("hin")
      // x.play();
    } else {
      x.style.display = "none";
    }
  }
  function f3() {
    var x = document.getElementById("show3");
    if (x.style.display === "none") {
        
      x.style.display = "block";
      x.classList.remove("hin")
      x.play();
      // var c=a.appendChild(document.createElement('img')).src = 'll.png';
    } else {
      x.style.display = "none";
      x.pause();
      // var c=a.removeChild(document.createElement('img')).src = 'll.png';
  
    }
  }
  alert("ihsdf")
//   var b1=document.getElementById('hin11');
//   var b2=document.getElementById('hin12');
  const h=()=>{
  
    setTimeout(()=>{

var b=document.getElementById("hint11");



b.classList.remove("hin")

setTimeout(() => {
   
var b=document.getElementById("hint12");


b.classList.remove("hin")
},2000);
    },3000)
}
h();