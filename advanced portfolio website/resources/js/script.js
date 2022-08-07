 
/*============== javascript sticky navigation start ============*/

$(document).ready(function(){

 $(window).scroll(function(){

var top = $(window).scrollTop();
if(top>=20){
    $("nav").addClass("sticky-nav");

}
else 
if(  $("nav").hasClass("sticky-nav")){

    $("nav").removeClass("sticky-nav");

}

 });

});
 





/*============= javascript sticky navigation end ==========*/



/*============= javascript auto typing text start =============== */

var typed = new Typed(".auto-type", {

strings : ["Dipak Pokharel", "Front-end Developer", "Email-Developer"],
typeSpeed: 150,
backSpeed: 150,
loop: true


});





/*============= javascript auto typing text end ================ */


/*============ javascript ripple effect start =================*/

$("document").ready(function(){

"use strict";

        $("header").ripples({
            resolution:512,
            dropRadius: 15,
            perturbance: 0.01,
            
        });

});

/*============== javascript ripple effect end ==================*/

 
 /*================= contact section starts =============*/
  
 
 const scriptURL = 'https://script.google.com/macros/s/AKfycbz9qVJaDKzhlyoNBNb0hw2Fp1MzHF-4KqIfzscrSeOx8NDSDz4jrUffv1Vz3qioMQzI_g/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg =  document.getElementById('msg')

 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {msg.innerHTML = "Message sent successfully!"
    setTimeout(function(){
        msg.innerHTML = ""
    }, 5000)
    form.reset()
    
    
    })
     .catch(error => console.error('Error!', error.message))
 })


 /*=============== contact section ends ===============*/

/*
https://form.jotform.com/61127769065966?utm_source=remoteok.io&ref=remoteok.io&utm_source=remoteok.io&ref=remoteok.io&utm_source=remoteok.com&rid=RNDUuMTIzLjIyMy45MA==&ref=remoteok.com

*/