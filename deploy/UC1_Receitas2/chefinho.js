let swiperCards = new Swiper('.cartao_conteudo', {
    loop: true,
    spacebetween: 62,
    grabcursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicbullets:true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
}); 

function show_camada1(){
  document.getElementById("camada1").style.visibility="visible";
  document.getElementById("camada2").style.visibility="hidden";
  document.getElementById("camada3").style.visibility="hidden";
  document.getElementById("camada4").style.visibility="hidden";
  document.getElementById("camada5").style.visibility="hidden";
}

function show_camada2(){
  document.getElementById("camada1").style.visibility="hidden";
  document.getElementById("camada2").style.visibility="visible";
  document.getElementById("camada3").style.visibility="hidden";
  document.getElementById("camada4").style.visibility="hidden";
  document.getElementById("camada5").style.visibility="hidden";
}

function show_camada3(){
  document.getElementById("camada1").style.visibility="hidden";
  document.getElementById("camada2").style.visibility="hidden";
  document.getElementById("camada3").style.visibility="visible";
  document.getElementById("camada4").style.visibility="hidden";
  document.getElementById("camada5").style.visibility="hidden";
}

function show_camada4(){
  document.getElementById("camada1").style.visibility="hidden";
  document.getElementById("camada2").style.visibility="hidden";
  document.getElementById("camada3").style.visibility="hidden";
  document.getElementById("camada4").style.visibility="visible";
  document.getElementById("camada5").style.visibility="hidden";
}

function show_camada5(){
  document.getElementById("camada1").style.visibility="hidden";
  document.getElementById("camada2").style.visibility="hidden";
  document.getElementById("camada3").style.visibility="hidden";
  document.getElementById("camada4").style.visibility="hidden";
  document.getElementById("camada5").style.visibility="visible";
}