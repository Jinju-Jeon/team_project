

$(function(){

  //나중에 바꿀 것: 스크롤탑 0일때만 투명배경 아닐때는 흰배경
  //스크롤 업/다운 따라서 메뉴 온오프

  $(window).scroll(function(){
    let p=$(this).scrollTop()
    if(p===0){
      $('.header').addClass('top')
    } else{$('.header').removeClass('top')}
  })




  $('.gnb ul>li').hover(function(){
    $(this).children('.gnb_hover').stop().fadeIn(300)
    $('.header').removeClass('top')
    },function(){
      $(this).children('.gnb_hover').stop().fadeOut(300)
    })



})////jquery_END






// swiper
new Swiper('.vm_slider', {
    loop: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });


  
new Swiper(".rank_slider", {
    slidesPerView: 'auto',
    rewind: true,
    // loop: true,
/* 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },  */
    
  });

//data-swiper-slide-index  이게 슬라이드 index임에 참고<< index는 자꾸 바뀌니까!!! 근데 어떻게 해야하지



new Swiper(".new_tab", {
  slidesPerView: "auto",
  centeredSlides: true,
  
  observer: true,
  observeParents: true,

  speed: 800,
  // loop: true,
  rewind: true,
  
  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter:true,
  }, 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});


