function f2(){
    var x = document.getElementById("show6");
    if (x.style.display === "none") {
        
      x.style.display = "block";
    //   x.classList.remove("hin")
    //   x.play();
      x.innerHTML="Clue 1: April was the first one to find me dead."
      // var c=a.appendChild(document.createElement('img')).src = 'll.png';
    } else {
      x.style.display = "none";
      // var c=a.removeChild(document.createElement('img')).src = 'll.png';
  
    }
 }
 function f4(){
    var x = document.getElementById("show1");
    if (x.style.display === "none") {
      x.style.display = "block";
    //   x.innerHTML="hint1:sachin"
    x.innerHTML="Clue 2: 🐾"
    } else {
      x.style.display = "none";
    }
 }
 const s=()=>{
;


setTimeout(()=>{
var d=document.getElementById("hint21");

d.classList.remove("hin")
setTimeout(()=>{
var d=document.getElementById("hint22");

d.classList.remove("hin")
},3000)
},3000)
}
s();