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
      
      const a=document.getElementById("te");
      var b=document.getElementById("he").value;
      // if(b=='suraj'){
      //     a.innerHTML="fail"
      // }
      var a1=document.getElementById("hint11");
  var a2=document.getElementById("hint12");
  // a1.remove("hint11");
  // a2.remove("hint12");
      var b1=document.getElementById("hint21");
  var b2=document.getElementById("hint22");
  
  // a1.add("hint11")
      const h=()=>{
  
          setTimeout(()=>{
     
  var b=document.getElementById("hint11");
  
  
  
  b.classList.remove("hin")
  
  setTimeout(() => {
         
  var b=document.getElementById("hint12");
  
  
  b.classList.remove("hin")
  }, 360000);
          },180000)
      }
      h();
      function f1(){
      //  var f=document.getElementById("hint");
      //  f.remove("hint")
  
  var text=document.getElementById("he").value;
          if(text==='The Further' || text==='the further'){
              // var c=a.appendChild(document.createElement('img')).src = 'll.png';
              a.innerHTML="The new place my family shifted to in 1971 had such an eerie vibe that I didn't dare enter the house even once. Upon sensing the evil within, I tried to warn my family who in turn restrained me outside the house which led to my death the next day. Who am I?"
              document.getElementById("he").value=""
              
            var g = document.getElementById("show6");
            g.innerHTML="";
            var gy = document.getElementById("s1");
            gy.innerHTML=""
            var gya= document.getElementById("show1");
            gya.innerHTML="";
              const s=()=>{
                     a1.remove("hint11");
   a2.remove("hint12");
  
  
          setTimeout(()=>{
  var d=document.getElementById("hint21");
  
  d.classList.remove("hin")
  setTimeout(()=>{
      var d=document.getElementById("hint22");
  
  d.classList.remove("hin")
  },360000)
          },180000)
      }
      s();
              var on=document.getElementById("but");
        
              on.addEventListener('click',()=>{
  
                  // b.classList.add("hin")
    var b=document.getElementById("he").value;

          if(b==='sadie' || b==='Sadie' || b==='SADIE'){
var next=document.getElementById("next");
next.classList.remove("hin")
              // f2()
     
 
                            
              const s=()=>{
                      var f=document.getElementById("hint")
                      f.remove("hint")
                      var f1=document.getElementById("hint1")
                      f1.remove("hint1")
          setTimeout(()=>{
  var d=document.getElementById("hint2");
  
  d.classList.remove("hin")
          },5000)
      }
      s();
             
              var on=document.getElementById("but");
             
              on.addEventListener('click',()=>{
           
                  var b=document.getElementById("he").value;
  //                 const s=()=>{
  //                     var f=document.getElementById("hint")
  //                     f.remove("hint")
  //         setTimeout(()=>{
  // var d=document.getElementById("hint3");
  
  // d.classList.remove("hin")
  //         },5000)
  //     }
  //     s();
          if(b=='etash'){
              // a.innerHTML=  " <img src="IETE LOGO WHITE.png" alt="" srcset="">"
              // f2()
              var b=document.getElementById("he").value;
          a.innerHTML=""
              var c=a.appendChild(document.createElement('img')).src = 'll.png';
  
             c.style.height="20"
          }
              })
          }
              })
          }
       
          }
      
          document.onkeydown = function (e) {
            if (e.ctrlKey) {
              return false;
            }
          }
          document.addEventListener('contextmenu', event => event.preventDefault());