
function f2(){
    var x = document.getElementById("show");
    if (x.style.display === "none") {
        
      x.style.display = "block";
      x.innerHTML="Clue 2: “In our little house of horrors, he was my salvation.”"
  
      // var c=a.appendChild(document.createElement('img')).src = 'll.png';
    } else {
      x.style.display = "none";

      // var c=a.removeChild(document.createElement('img')).src = 'll.png';
  
    }
  }   
  function f4(){
    // var x = document.getElementById("show");
    var x = document.getElementById("showa");
    if (x.style.display === "none") {
      x.style.display = "block";
      // x.innerHTML="Hint 1:Even though I’m not a native I thought I found my home in the ‘land of kings' but then I had to shift to the space city and finally joined the best leader of the format."
   x.play();
   x.classList.remove("hin")
    } else {
      x.style.display = "none";
      x.pause();
    
    }
  }
  const s=()=>{
      setTimeout(()=>{
          var b1=document.getElementById("hint21");
          b1.classList.remove("hin");
          setTimeout(()=>{
            var b2=document.getElementById("hint22");
            b2.classList.remove("hin");
          },6000)
      },3000)
  }
  s();