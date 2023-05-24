

/* scroll-menu */
const headerInner = document.querySelector('.header_inner')
let prev = 0
window.addEventListener('scroll',()=>{
  /* header view */
	if(prev < window.scrollY && window.scrollY>500){
    headerInner.classList.remove('scroll_up')
    headerInner.classList.add('scroll_down')
  } else{
    headerInner.classList.remove('scroll_down')
    headerInner.classList.add('scroll_up')
  }
	prev = window.scrollY;

  headerStyle();
});


/* header-hover */
const gnbLists = document.querySelectorAll('.gnb>ul>li')
const gnbHovers = document.querySelectorAll('.gnb .gnb_hover')

gnbLists.forEach((gnbList,i)=>{
  gnbList.addEventListener('mouseenter',function(){
    document.querySelector('.header').classList.remove('top')
    gnbHovers[i].classList.add('hovered')
    document.querySelector('.bg_opacity').style.display = 'block'
  })

  gnbList.addEventListener('mouseleave',function(){
    gnbHovers[i].classList.remove('hovered')
    document.querySelector('.bg_opacity').style.display = 'none'
    headerStyle();
  })
})


/* search */
const searchBtn = document.querySelector('.search_btn')
const search = document.querySelector('.search')
const searchClose = document.querySelector('.search .close')
searchBtn.addEventListener('click',()=>{
  search.style.display = 'block'
})
searchClose.addEventListener('click',()=>{
  search.style.display = 'none'
})






 

// visual_main
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

//data-swiper-slide-index  이게 슬라이드 index임에 참고<< index는 자꾸 바뀌니까!!! 근데 어떻게 해야하지


/* new */
new Swiper(".new_tab", {
  slidesPerView: "auto",
  centeredSlides: true,
  slideToClickedSlide: true,
  touchRatio: 1,
  
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



/* rank */
const rankList1 = document.querySelectorAll('.rank_list1 li')
const rankList2 = document.querySelectorAll('.rank_list2 li')



//rankslider1
const rankSlider1 = new Swiper(".rank_slider1", {
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    loop: true,
    loopAdditionalSlides: 1,

    /* autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },  */

    on: {
      activeIndexChange: function(){
        rankList1.forEach((rank,i)=>{
          rank.classList.remove('on')
          if(i===this.realIndex){
            rank.classList.add('on')            
          } //if

        })//forEach
      }//activeIndex
    }//on    
  });

rankList1.forEach((rank,i)=>{
  rank.addEventListener('click',function(){
    rankSlider1.slideToLoop(i,300,true)
    
  })
})

let rank1El = rankSlider1.el.querySelectorAll('.swiper-slide')
console.log(rank1El)
//현재 이동한 슬라이더가 리스트 안에서 가장 마지막인 slider라면.. 뒤에 첫째를 append한다 < 이런걸 하고싶음









//rankslider2
const rankSlider2 = new Swiper(".rank_slider2", {
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  loop: true,
  loopAdditionalSlides: 1,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, 

  on: {
    activeIndexChange: function(){
      rankList2.forEach((rank,i)=>{
        rank.classList.remove('on')
        if(i===this.realIndex){
          rank.classList.add('on')            
        } //if

      })//forEach
    }//activeIndex
  }//on    
});
rankList2.forEach((rank,i)=>{
  rank.addEventListener('click',function(){
    rankSlider2.slideToLoop(i,300,true)
  })
})



/* recom */
const plusBtns = document.querySelectorAll('.recom_detail>button')
const plusIcon = document.querySelectorAll('.recom_detail>button span')
const recomDesc = document.querySelectorAll('.recom_desc')
const clickState = new Array
for(let i=0;i<plusBtns.length;i++){
  clickState.push(0)
}

plusBtns.forEach((btn,i)=>{
  btn.addEventListener('click',()=>{
  if(!clickState[i]){
    clickState[i]=1

    // recomDesc[i].classList.add('on')

    recomDesc[i].style.display = 'block'
    gsap.to(recomDesc[i],{opacity: 1,duration: 0.2,})

    gsap.to(plusIcon[i],{rotation: 45, duration: 0.2,});
  } else{
    clickState[i]=0
    gsap.to(recomDesc[i],{opacity: 0,duration: 0.2,},function(){recomDesc[i].style.display = 'none'})
    gsap.to(plusIcon[i],{rotation: 0, duration: 0.2,});
    

  }
  
  })//click
  
})//forEach
  





/* function */
function headerStyle(){
    if(window.scrollY===0){
    document.querySelector('.header').classList.add('top')
  } else{
    document.querySelector('.header').classList.remove('top')
  }

}