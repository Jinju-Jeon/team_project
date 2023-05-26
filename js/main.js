/* scroll-menu */
const headerInner = document.querySelector('.header_inner')
let prev = 0


//scrollEvent
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
  }
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
  document.querySelector('.bg_opacity').style.display = 'block'
})
searchClose.addEventListener('click',function(){
  search.style.display = 'none'
  document.querySelector('.bg_opacity').style.display = 'none'
})
document.querySelector('.bg_opacity').addEventListener('click',function(){
  search.style.display = 'none'
  this.style.display = 'none'
})

/* search변화 */
const popSearch = ['데일리 슈즈','키즈 바람막','베이직리니어반팔티','운동화','스피드서브']
const recomSearch = ['TENNIS COLLECTION','DAILY SHOES RAYFLIDE','스포츠 언더웨어','가볍고 편한 키즈 운동화 #문더스트']
const recentSearch = ['씨어서커','온라인 단독','테니스 스커트']
const searchAll = [popSearch,recomSearch,recentSearch]
const searchList = document.querySelectorAll('.search .bottom>div>ul')
makeSearch() //

const madeX = document.querySelectorAll('.search ul span')
console.log(madeX)
madeX.forEach((x,i)=>{
  x.addEventListener('click',function(){
    this.parentNode.parentNode.removeChild(this.parentNode)
  })
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
    gsap.to(recomDesc[i],0.2,{opacity: 1,})

    gsap.to(plusIcon[i],0.2,{rotation: 45, });
  } else{
    clickState[i]=0
    gsap.to(recomDesc[i],0.2,{opacity: 0,},function(){recomDesc[i].style.display = 'none'})
    gsap.to(plusIcon[i],0.2,{rotation: 0, });
    

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

function makeSearch(){searchAll.forEach((searchItem,i)=>{
  const listCover = searchList[i]
  searchItem.forEach((keyword,j)=>{
    const list = document.createElement('li')
    list.innerText = keyword

    if(i==2){
      const xBox = document.createElement('span')
      xBox.innerText = 'x'
      list.appendChild(xBox)
    }

    listCover.appendChild(list)
  })
})
}