$(document).ready(()=>{
/**NAVBAR NAVIGATION LINK */
  const homeBtn =$('#homeBtn');
  const quiSommeNousBtn = $('#quiSommeNousBtn');
  const nosTravauxBtn = $('#nosTravauxBtn');
  const lientUtilesBtn = $('#lientUtilesBtn');
  const contactBtn = $('#contactBtn');

  
 /**section to display */
 let firstCard = $('#firstCard'); 
 let mission  = $('#mission');
 let nosTravauxSec =  $('#nos-travaux');
 let lientUtilesSec =  $('#lient-utiles');
 let contactSec = $('#contact');
 
window.sr = ScrollReveal();
sr.reveal('header',{
  duration:500,
  origin:'top',
  distance:'250px',
  easing: 'linear'
 });
 sr.reveal('.slogan',{
    duration:500,
    origin:'top', 
    distance:'350px',
    easing: 'linear'
  });
 
  homeBtn.on('click',()=>{ 
  sr.reveal(firstCard,{
    duration:500,
    origin:'right', 
    distance:'-350px',
    easing: 'linear'
  });
});

homeBtn.on('click',()=>{ 
sr.reveal(secondCard,{
  duration:500,
  origin:'left', 
  distance:'-350px',
  easing: 'linear'
});
});
homeBtn.on('click',()=>{ 
  sr.reveal(mission,{
    duration:500,
    origin:'left', 
    distance:'-350px',
    easing: 'linear'
  });
  });

  $(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname ==
        this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});