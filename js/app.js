$(document).ready(()=>{
/**NAVBAR NAVIGATION LINK */
  const homeBtn =$('#homeBtn');
  const quiSommeNousBtn = $('#quiSommeNousBtn');
  const nosTravauxBtn = $('#nosTravauxBtn');
  const lientUtilesBtn = $('#lientUtilesBtn');
  const contactBtn = $('#contactBtn');

  /**section to display */
  let accueilSec = $('#accueil'); 
 let quiSommeNousSec = $('#qui-nousSommes');
 let nosTravauxSec =  $('#nos-travaux');
 let lientUtilesSec =  $('#lient-utiles');
 let contactSec = $('#contact');

  /**Function to display sections */
  homeBtn.on('click',()=>{   
      accueilSec.fadeIn('slow');
      accueilSec.css({"margin-top": "259px"})
      quiSommeNousSec.fadeOut();
      nosTravauxSec.fadeOut();
      lientUtilesSec.fadeOut();    
  });
  quiSommeNousBtn.on('click',()=>{  
    quiSommeNousSec.fadeIn('slow');
    accueilSec.fadeOut();
    nosTravauxSec.fadeOut();
    lientUtilesSec.fadeOut();   
});
  nosTravauxBtn.on('click',()=>{
    nosTravauxSec.fadeIn('slow');
    quiSommeNousSec.fadeOut();
    accueilSec.fadeOut();   
    lientUtilesSec.fadeOut(); 

});
  lientUtilesBtn.on('click',()=>{
    lientUtilesSec.fadeIn('slow');
    nosTravauxSec.fadeOut();
    quiSommeNousSec.fadeOut();
    accueilSec.fadeOut();  
});
 
window.sr = ScrollReveal();
sr.reveal('.navbar-brand',{
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
});