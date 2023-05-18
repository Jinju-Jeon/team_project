import menClothList  from "./data.js"

const productList = document.querySelector('.product_list')

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


for(let i in menClothList){

  const product = document.createElement('div')
  product.setAttribute('class','product')

  const href = document.createElement('a')
  href.setAttribute('href',menClothList[i].href)

  product.appendChild(href)
  
  const itemTop = document.createElement('div')
  itemTop.setAttribute('class','item_top img')
  
  const productImg = document.createElement('img')
  productImg.setAttribute('src',menClothList[i].src)
  
  itemTop.append(productImg,makeIcon())
  
  const productCategory = document.createElement('p')
  productCategory.setAttribute('class','product_category')
  productCategory.appendChild(document.createTextNode(menClothList[i].category))
  
  
  const productInfo = document.createElement('div')
  productInfo.setAttribute('class','product_info')
  
  
  const infoName = document.createElement('p')
  infoName.setAttribute('class','info_name')
  infoName.appendChild(document.createTextNode(menClothList[i].name))
  
  const infoPrice = document.createElement('p')
  infoPrice.setAttribute('class','info_price')
  infoPrice.appendChild(document.createTextNode(menClothList[i].price+'원'))
  
  productInfo.append(infoName,infoPrice)


  href.append(itemTop,productCategory,productInfo)


  productList.appendChild(product)


} //sub item 생성



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
//a태그 이동 방지





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