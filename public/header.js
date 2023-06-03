function headerFunction(){

  /* scroll-menu */
  const headerInner = document.querySelector('.header_inner')
  console.log(headerInner)
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
  makeSearch(searchAll,searchList) //
  
  const madeX = document.querySelectorAll('.search ul span')
  console.log(madeX)
  madeX.forEach((x,i)=>{
    x.addEventListener('click',function(){
      this.parentNode.parentNode.removeChild(this.parentNode)
    })
  })

}
function headerStyle(){
    if(window.scrollY===0){
    document.querySelector('.header').classList.add('top')
  } else{
    document.querySelector('.header').classList.remove('top')
  }

}

function makeSearch(searchAll,searchList){
  searchAll.forEach((searchItem,i)=>{
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



export default headerFunction