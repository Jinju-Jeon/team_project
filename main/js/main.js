const aHref = document.querySelectorAll('.link a')
console.log(aHref)
const link = new Array
aHref.forEach((item,i)=>{
  link[i] = item.getAttribute('href')
  
})


import { headerFunction } from "/public/public.js";
//이부분은 치환돌리자


const header = document.querySelector('header')
fetch(link[0])
.then(res => res.text())
.then(data => header.innerHTML = data)

const footer = document.querySelector('footer')
fetch(link[1])
.then(res => res.text())
.then(data => footer.innerHTML = data)

const quick = document.querySelector('.quick')
fetch(link[2])
.then(res => res.text())
.then(data => quick.innerHTML = data)
.then(()=>headerFunction())




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
    rewind: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    on: {
      activeIndexChange: function(){
        rankList1.forEach((rank,i)=>{
          rank.classList.remove('on')
          if(i===this.realIndex){
            rank.classList.add('on')            
          } //if


          if(this.realIndex == 5){
            setTimeout(function(){
              rankSlider1.slideTo(0,300,true) 
            },3000)
            
          }

        })//forEach
      }//activeIndex
    }//on    
  });
rankList1.forEach((rank,i)=>{
  rank.addEventListener('click',function(){
    rankSlider1.slideTo(i,300,true)     
  })
})


//rankslider2
const rankSlider2 = new Swiper(".rank_slider2", {
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  rewind: true,

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


        if(this.realIndex == 5){
          setTimeout(function(){
            rankSlider2.slideTo(0,300,true) 
          },3000)
          
        }

      })//forEach
    }//activeIndex
  }//on    
});

rankList2.forEach((rank,i)=>{
rank.addEventListener('click',function(){
  rankSlider2.slideTo(i,300,true)     
})
})


/* recom */
const plusBtns = document.querySelectorAll('.recom_detail>button')
const plusIcon = document.querySelectorAll('.recom_detail>button span')
const recomDesc = document.querySelectorAll('.recom_desc')
plusBtns.forEach((btn,i)=>{
  btn.addEventListener('mouseenter',()=>{
      recomDesc[i].style.display = 'block'
      gsap.to(recomDesc[i],0.15,{opacity: 1,})
      gsap.to(plusIcon[i],0.15,{rotation: 45, });
    
  
  })//mouseenter

  btn.addEventListener('mouseleave',()=>{
    setTimeout(function(){
      gsap.to(plusIcon[i],0.1,{rotation: 0, });
      gsap.to(recomDesc[i],0.1,{opacity: 0,},function(){
        recomDesc[i].style.display = 'none'
      })
      
    },1500)
    
  })//mouseenter


  
})//forEach
  



/* scroll-event */
window.addEventListener('scroll',()=>{
  /* magazine */
  const magImg = document.querySelectorAll('.magazine .img')
  const magOn = document.querySelector('.magazine').offsetTop
  if(window.scrollY > magOn-600){
    magImg.forEach((img,i)=>{
      gsap.to(img,0.8,{
        y:0,
        opacity: 1,
      }).delay(i*0.3)
    })//foreach
  }//if
  
});
