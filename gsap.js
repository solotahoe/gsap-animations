const navButton= document.querySelector(".nav-button");
const navOpen= document.querySelector(".nav-open");
const datearea=document.querySelector(".cover-date");

const tl = new TimelineLite({paused:true, reversed:true});

tl.to(".cover", 0.8 ,{width:'60%',ease:Power2.easeOut})
 .to("nav", 0.8, {height:'100%', ease:Power2.easeOut}, '-=.5s')
 .fromTo('.nav-open', 0.8,{opacity:0, x:50, ease:Power2.easeOut}, {opacity:1, x:0, onComplete: function(){
     navOpen.style.pointerEvents="auto";
 }})
 .to(datearea, 0.8, {x:500, ease:Power2.easeOut},'-=0.5s');

 navButton.addEventListener("click", ()=>{
     if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;

     }
    toggleTween(tl)
 });

 function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();

 }