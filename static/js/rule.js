function f2(){
    var name = document.getElementById("but")
    name.innerHTML = " Coming Soon!"
    }
   
   
    $(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>800);
    })