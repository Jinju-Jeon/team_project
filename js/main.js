

$(function(){

  //나중에 바꿀 것: 스크롤탑 0일때만 투명배경 아닐때는 흰배경
  //스크롤 업/다운 따라서 메뉴 온오프

  $(window).scroll(function(){
    let p=$(this).scrollTop()
    if(p===0){
      $('.header').addClass('top')
    } else{$('.header').removeClass('top')}
  })




  $('.gnb>li').hover(function(){
    $(this).children('.gnb_hover').stop().fadeIn(300)
    },function(){
      $(this).children('.gnb_hover').stop().fadeOut(300)
    })


    



})////jquery_END





const swiper = new Swiper('.vm_slider', {
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });


  
swiper = new Swiper(".rank_slider", {
    slidesPerView: 'auto',
    loop: true,


    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
//data-swiper-slide-index < 이게 슬라이드 index임에 참고



