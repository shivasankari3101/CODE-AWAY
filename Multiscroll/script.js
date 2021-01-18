var main_div1=document.getElementsByClassName("main_div1")[0];
var main_div2=document.getElementsByClassName("main_div2")[0];
var dots=document.getElementsByClassName("dot");

function showactive(n){
    for(var i=0;i<dots.length;i++){
        dots[i].style.backgroundColor="#f7f7f7";
        dots[i].style.transform="scale(1)";
    }
    dots[n].style.backgroundColor="#5c636e";
    dots[n].style.transform="scale(1.3)";
}

function showslide1(){
   main_div1.style.transform="translateY(0)";
   main_div2.style.transform="translateY(0)";
   showactive(0);
}

function showslide2(){
    main_div1.style.transform="translateY(-100%)";
    main_div2.style.transform="translateY(100%)";
    showactive(1);
}

function showslide3(){
    main_div1.style.transform="translateY(-200%)";
    main_div2.style.transform="translateY(200%)";
    showactive(2);
}

showslide1();