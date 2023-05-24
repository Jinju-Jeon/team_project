import menClothList  from "./data.js"

const productList = document.querySelector('.product_list')
itemLoad(menClothList)
prE()



/* scroll-menu */
const headerInner = document.querySelector('.header_inner')
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
})
searchClose.addEventListener('click',()=>{
  search.style.display = 'none'
})








//item정렬기능
const productSort = document.getElementById('product_sort')
productSort.addEventListener('change',function(){
  
  const soldArray = _.sortBy(menClothList,'sold').reverse()
  const lowPriceArray = _.sortBy(menClothList,'price')

  switch(productSort.selectedIndex){
    case 0: 
      itemLoad(menClothList)
      break;
    case 1:
      itemLoad(soldArray)
      break;
    case 2:
      itemLoad(lowPriceArray)
      break;
    case 3:
      itemLoad(lowPriceArray.reverse())

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

//function
//sub item 생성
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
    productCategory.appendChild(document.createTextNode(itemArray[i].category))
    
    
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
  
  prE()

}

//a태그 이동 방지
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

}











//가격필터
const priceFilter = document.querySelectorAll('.price_list input')





