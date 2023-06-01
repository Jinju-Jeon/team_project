
/* 주문수량 및 가격 */
const quntMinus = document.getElementById('qunt_minus')
const quntPlus = document.getElementById('qunt_plus')
const qunt = document.getElementById('qunt')

const sizeRadio = document.getElementsByName('size')
const priceHtml = document.querySelector('p.price')
let price = 119000
let orderPrice = 0

quntMinus.addEventListener('click',()=>{
    if(qunt.value<=1){return}
    qunt.value--
    sizeAlert()
    priceChange()
})
quntPlus.addEventListener('click',()=>{
    qunt.value++
    sizeAlert()
    priceChange()
})

qunt.addEventListener('change',()=>{
    sizeAlert()
    priceChange()
})

sizeRadio.forEach((item)=>{
    item.addEventListener('click',function(){
        priceChange()
    })
})





/* function */
function sizeAlert(){
    if(!sizeRadio[0].checked && !sizeRadio[1].checked && !sizeRadio[2].checked){
        alert('사이즈를 먼저 선택해주세요')
        qunt.value = 1
    }
}


function priceChange(){
    orderPrice = price*qunt.value
    orderPrice = orderPrice.toLocaleString()
    priceHtml.innerText = (orderPrice+'원')
    
}