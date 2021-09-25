function f5() {
    var x = document.getElementById("show4");
    // var x1=document.getElementById("we");
    if (x.style.display === "none") {
      x.style.display = "block";
      // var c=a.appendChild(document.createElement('img')).src = 'image/unknown.png';
      x.classList.remove("hin");
      // x1.classList.remove("hin")
    } else {
      x.style.display = "none";
    //   x.innerHTML="Hint 1:I just need three left turns to reach home. "
    // var c=a.removeChild(document.createElement('img')).src = 'image/unknown.png';
    // x1.classList.add("hin")


    }
  }
  const s=()=>{
      setTimeout(()=>{
          var b=document.getElementById("hint11");
          b.classList.remove("hin")
      },3000)
  }
  s();