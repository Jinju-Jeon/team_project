

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
      $('.header').addClass('top')
    })



})////jquery_END






// swiper
const swiper1 = new Swiper('.vm_slider', {
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


  
const swiper2 = new Swiper(".rank_slider", {
    slidesPerView: 'auto',
    loop: true,
/* 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },  */
    
  });

//data-swiper-slide-index  이게 슬라이드 index임에 참고<< index는 자꾸 바뀌니까!!! 근데 어떻게 해야하지



const swiper3 = new Swiper(".new_tab", {
  slidesPerView: "auto",
  centeredSlides: true,

  speed: 800,

  loop: true,

/*   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */ 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  pagination: {
    el: ".swiper-pagination",
  },
  
});



const rankImg1 = document.querySelectorAll('.rank_tab.tab1 .swiper-slide')
const rankList1 = document.querySelectorAll('.rank_tab.tab1 .rank_list li')
const rankWrapper1 = document.querySelector('.rank_tab.tab1 .swiper-wrapper')


console.log(rankImg1)
console.log(rankList1)
console.log(rankWrapper1)

for(let i=0;i<rankImg1.length;i++){
  rankImg1[i].addEventListener("DOMAttrModified",function(){
    //클래스 변경 감지 > on 전체 해제 > 해당 index와 동일한 rankList1에 on 부여
    //가 안되나?

  })

  rankList1[i].addEventListener('click',function(){
    for(let rankImg of rankImg1){
      rankImg.classList.remove('swiper-slide-prev')
      rankImg.classList.remove('swiper-slide-active')
      rankImg.classList.remove('swiper-slide-next')
    }

    rankImg1[(i+6-1)%6].classList.add('swiper-slide-prev')
    rankImg1[i%6].classList.add('swiper-slide-active')
    rankImg1[(i+1)%6].classList.add('swiper-slide-next')
  }) //class는 바뀌는데 움직이진 않음...  switchcase로 이동시키기 > 실패! 


}