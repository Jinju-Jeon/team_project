
import menClothList  from "./data.js"

const productList = document.querySelector('.product_list')
let nowList = menClothList
let state = 0

itemLoad(nowList)
prE()



/* scroll-event */
const headerInner = document.querySelector('.header_inner')
const quickMenu = document.querySelector('.quick')
let prev = 0
window.addEventListener('scroll',()=>{
  /* header view */
	if(prev < window.scrollY && window.scrollY>300){
    headerInner.classList.remove('scroll_up')
    headerInner.classList.add('scroll_down')
  } else{
    headerInner.classList.remove('scroll_down')
    headerInner.classList.add('scroll_up')
  }
	prev = window.scrollY;


  /* quickmenu위치 */
  gsap.to(quickMenu,0.5,{
    top: window.scrollY + window.innerHeight*0.3
  })
  
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
madeX.forEach((x,i)=>{
  x.addEventListener('click',function(){
    this.parentNode.parentNode.removeChild(this.parentNode)
  })
})





//아이템 표시 방식(3,4)
const viewType = document.getElementsByName('view_type')
viewType[0].addEventListener('change',function(){ 
let nowProduct = document.querySelectorAll('.product') 
  if(this){
    nowProduct.forEach((item,i)=>{
      item.classList.add('v3')
    })//foreach
  }//if-else
})
viewType[1].addEventListener('change',function(){ 
let nowProduct = document.querySelectorAll('.product') 
  if(this){
    nowProduct.forEach((item,i)=>{
      item.classList.remove('v3')
    })//foreach
  }//if-else
})

//정렬 적용
const sortType = document.getElementById('product_sort')
sortType.addEventListener('change',()=>{
  productSort()
  itemLoad(nowList)

})


/* 
전체 리스트 로드 > 정렬 적용 > 다른 필터 적용 
>>전부true 혹은 전부 false인가? > 그대로 로드
>>일부만 true인가? > 필터 적용
*/


/********** 필터링 **********/
//컬러필터
const colorChk = document.querySelectorAll('.filter_color input')
colorChk.forEach((item)=>{
  item.addEventListener('click',()=>{

    nowList = menClothList 

    productSort()
    sizeFilter()
    priceFilter()
    genderFilter()

    colorFilter()
    itemLoad(nowList)
    



  })//aEL
})//forEach

//사이즈필터
const sizeChk = document.querySelectorAll('.filter_size input')
sizeChk.forEach((item)=>{
  item.addEventListener('click',()=>{

  nowList = menClothList 

  productSort()
  colorFilter()
  priceFilter()
  genderFilter()
  
  sizeFilter()
  itemLoad(nowList)
 
    
  })
})


//가격필터
const priceChk = document.getElementsByName('price')
priceChk.forEach((item)=>{
  item.addEventListener('click',function(){
    nowList = menClothList 

    productSort()
    colorFilter()
    sizeFilter()
    genderFilter()
    
    priceFilter()
    itemLoad(nowList)
    
  })//aEL
})///forEach





//성별필터
const genderChk = document.querySelectorAll('.filter_gender input')
genderChk.forEach((item)=>{
  item.addEventListener('click',function(){

    nowList = menClothList 

    productSort()
    colorFilter()
    sizeFilter()
    priceFilter()
    
    genderFilter()
    itemLoad(nowList)


  })
})//forEach



const filterToggle = document.getElementById('filter_toggle')
const filterBottom = document.querySelector('.filter_bottom')

let stateT = 0
filterToggle.addEventListener('click',function(){
  if(!stateT){
    stateT = 1
    this.innerHTML = '필터 닫기<span class="material-icons"> remove </span>'
    gsap.to(filterBottom,0.3,{height: 400})


  } else{
    stateT = 0
    this.innerHTML = '필터 열기<span class="material-icons"> add </span>'
    gsap.to(filterBottom,0.3,{height: 0})
  }
})














//hover효과
const productImgs = document.querySelectorAll('.item_top.img')
productImgs.forEach((img)=>{
  img.addEventListener('mouseenter',function(){
    let src = img.children[0].src
    let newSrc = src.replace('.jpg','-2.jpg')
    img.children[0].src = newSrc
  })
  
  img.addEventListener('mouseleave',function(){
    let src = img.children[0].src
    let oldSrc = src.replace('-2.jpg','.jpg')
    img.children[0].src = oldSrc
  })
})



//quickmenu 버튼
const scrollUD = document.querySelectorAll('.quick_bottom li')
scrollUD[0].addEventListener('click',()=>{
  gsap.to(window,1,{
    scrollTo: 0,
  })
})
scrollUD[1].addEventListener('click',()=>{
  gsap.to(window,1,{
    scrollTo: document.body.scrollHeight,
  })
})






/********** function **********/

function itemLoad(itemArray){
  productList.replaceChildren()

  const makeIcon = () =>{
    const icon = document.createElement('div')
    icon.setAttribute('class','icon')
    
    const cartBtn = document.createElement('button')
    cartBtn.setAttribute('class','cart_btn')
    cartBtn.setAttribute('type','button')
  
    const iconCart = document.createElement('span')
    iconCart.setAttribute('class','material-icons')
    iconCart.appendChild(document.createTextNode('shopping_cart'))
  
    
    const heartBtn = document.createElement('button')
    heartBtn.setAttribute('class','heart_btn')
    heartBtn.setAttribute('type','button')
  
    const iconHeart = document.createElement('span')
    iconHeart.setAttribute('class','material-icons-outlined')
    iconHeart.appendChild(document.createTextNode('favorite_border'))
    
    cartBtn.appendChild(iconCart)
    heartBtn.appendChild(iconHeart)
  
    icon.append(cartBtn,heartBtn)
    
    return icon
  } 
  for(let i in itemArray){
  
    const product = document.createElement('div')
    product.setAttribute('class','product')
  
    const href = document.createElement('a')
    href.setAttribute('href',itemArray[i].href)
  
    product.appendChild(href)
    
    const itemTop = document.createElement('div')
    itemTop.setAttribute('class','item_top img')
    
    const productImg = document.createElement('img')
    productImg.setAttribute('src',itemArray[i].src)
    
    itemTop.append(productImg,makeIcon())
    
    const productCategory = document.createElement('p')
    productCategory.setAttribute('class','product_category')
    productCategory.appendChild(document.createTextNode(itemArray[i].gender))
    
    
    const productInfo = document.createElement('div')
    productInfo.setAttribute('class','product_info')
    
    
    const infoName = document.createElement('p')
    infoName.setAttribute('class','info_name')
    infoName.appendChild(document.createTextNode(itemArray[i].name))
    
    const infoPrice = document.createElement('p')
    infoPrice.setAttribute('class','info_price')
    let priceString = itemArray[i].price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  
  
    infoPrice.appendChild(document.createTextNode(priceString+'원'))
    
    productInfo.append(infoName,infoPrice)
  
  
    href.append(itemTop,productCategory,productInfo)
  
  
    productList.appendChild(product)
  
  
  } //forEach

  if(itemArray.length===0){
    const noP = document.createElement('p')
    noP.setAttribute('class','no_product')
    noP.textContent = '해당하는 상품이 없습니다.'
    productList.appendChild(noP)
  }
  
  prE()

}
//sub item 생성


function prE(){
  const elCart = document.querySelectorAll('.cart_btn')
  const elHeart = document.querySelectorAll('.heart_btn')
  for(let item of elCart){
      item.addEventListener('click',function(e){
        e.preventDefault()
  
      })
  } 
  for(let item of elHeart){
      item.addEventListener('click',function(e){
        e.preventDefault()
        
      })
  }

}//a태그 이동 방지

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
}//Search란 함수


function productSort(){
  
  const soldArray = _.orderBy(nowList,['sold'],['desc'])
  const lowPriceArray = _.sortBy(soldArray,['price'])
  const highPriceArray = _.orderBy(soldArray,['price'],['desc'])

  

  switch(sortType.selectedIndex){
    case 0: 
      nowList = _.sortBy(nowList,['id'])
      break;
    case 1:
      nowList = soldArray
      
      break;
    case 2:
      nowList = lowPriceArray
      
      break;
    case 3:
      nowList = highPriceArray

  }//switch-case
}//정렬적용



function allChk(array){
  if(array.length===2){
    if(array[0].checked===array[1].checked){state = 1}
    else{state=0}

    return
  } //2일때(전체에서 왜 안 먹지)

  for(let i=0;i<array.length-1;i++){
    if(array[i].checked !== array[i+1].checked){
      state=0;
      break;
    } else{state = 1}    
  }//for

}//전체체크확인

function colorFilter(){ 

  //전체체크여부확인
  allChk(colorChk)

  //아닐시 nowList 변경
  if(state===0){
    nowList = nowList.filter(function(item){
      let chk = document.querySelector('input[value='+item.color+']')
      return chk.checked == true
    })//filter
  } //if

}//colorFilter


function sizeFilter(){
  //전체체크여부확인
  allChk(sizeChk)

  //아닐시 nowList 변경
  if(state===0){
    nowList = nowList.filter(function(product){
      let size = product.size
      for(let i=0;i<size.length;i++){
        let chk = document.querySelector('input[value="'+size[i]+'"]')
        if(chk.checked==true){
          return true
        }
      }//for 끝
      return false      
    })//filter
  } //if

}

function genderFilter(){
  //전체로드

  allChk(genderChk)

  if(state===0){
    nowList = nowList.filter(function(product){
      let chk = document.querySelector('input[value='+product.gender+']')
        if(chk.checked===true){
          return true
        } else {return false} //return

    })//filter
  }//if
}


function priceFilter(){
  let checked = parseInt(document.querySelector('input[name=price]:checked').value)
    
  switch(checked){
    case 1:
      break;
    case 2:
      nowList = nowList.filter((item)=> (item.price<=39000))
      break;
    case 3:
      nowList = nowList.filter((item)=> (item.price>39000 && item.price<=49000))
      break;
    case 4:
      nowList = nowList.filter((item)=> (item.price>49000 && item.price<=59000))
      break;
    case 5:
      nowList = nowList.filter((item)=> (item.price>59000 && item.price<=79000))
      break;
    case 6:
      nowList = nowList.filter((item)=> (item.price>79000))
      break; 
  }
}

