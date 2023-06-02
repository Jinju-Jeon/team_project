




/* 변수설정 */
let price = 119000
let orderPrice = 0
const divEl = function(className){
    let div = document.createElement('div')
    div.classList.add(className)
    return div
}
const pEl = function(className){
    let p = document.createElement('p')
    p.classList.add(className)
}
const spanEl = function(){return document.createElement('span')}



/* 주문수량 및 가격 */
const quntMinus = document.getElementById('qunt_minus')
const quntPlus = document.getElementById('qunt_plus')
const qunt = document.getElementById('qunt')

const sizeRadio = document.getElementsByName('size')
const priceHtml = document.querySelector('p.price')

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
////주문 수량 및 가격





/* 리뷰 추가 */
const reviewPrev = document.querySelector('.review_prev')

const reviewMy = document.querySelector('.my_review')
const reviewSubmit = reviewMy.querySelector('button')

const myPoint = reviewMy.querySelectorAll('input[type=radio]')
const myText = reviewMy.querySelector('textarea')
const myPhoto = reviewMy.querySelector('input[type=file]')
const photoArea = document.querySelector('.photo_area')

let pointCnt = 0
writeAction()

let chkStatus = 0
reviewSubmit.addEventListener('click',()=>{
    reviewChk()



    //틀
    const reviewContent = divEl('review_content')

    //별점
    const prevPoint = divEl('prev_point') //이거 변수 여러개 선택적으로 받는 방법 기억나면 바꾸기
    prevPoint.classList.add('point')
    starSpan(pointCnt,prevPoint)
        
    //텍스트
    const prevText = divEl('prev_text')
    prevText.innerText = myText.value

    //파일
    let prevImg = divEl('prev_img')
    let imgs = photoArea.querySelectorAll('.img')
    imgs.forEach((item)=>{
        prevImg.appendChild(item)
    })

    
    
    if(imgs.length===0){
        reviewContent.append(prevPoint,prevText)
    } else{
        reviewContent.append(prevPoint,prevText,prevImg)
    }
    



    console.log(reviewContent)
    
    

    
})
////리뷰 추가














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

//리뷰 전송 전 체크
function reviewChk(){
    myPoint.forEach((item)=>{
        if(item.checked){
            chkStatus = 1
            return
        }
    })

    if(!chkStatus){
        alert('별점을 매겨주세요')
        return
    } else if (myText.value.length<10){
        alert('리뷰는 10자 이상 작성해주세요')
        return
    }
}

//이미지 파일 div내에 삽입(파일리스트,.img들어갈 div)
function imgLoad(files,coverDiv){
    const fileList = Array.from(files)
    fileList.forEach((item)=>{
        let imgDiv = divEl('img')
        let imgEl = document.createElement('img')
        let imgUrl = URL.createObjectURL(item)

        imgEl.setAttribute('src',imgUrl)
        imgDiv.appendChild(imgEl)
        coverDiv.appendChild(imgDiv)  
    })
}

function starSpan(cnt,coverDiv){
    
    for(let i=1;i<=cnt;i++){
        let myStar = spanEl()
        myStar.classList.add('material-icons-round')
        myStar.innerText = 'star'
        coverDiv.appendChild(myStar)
    }
    for(let i=1;i<=(5-cnt);i++){
        let myStar = spanEl()
        myStar.classList.add('material-icons-round')
        myStar.innerText = 'star_outline'
        coverDiv.appendChild(myStar)
    }

}

//작성 과정 중 액션
function writeAction(){
    //사진 업로드 수 제한
    let beforeFileset = myPhoto.files
    myPhoto.addEventListener('change',function(){
        if((this.files.length+photoArea.childNodes.length-1)>5){
            alert('사진은 최대 5장까지 업로드 가능합니다.')
            myPhoto.files = beforeFileset
            return
        } else{
            beforeFileset = myPhoto.files  
            imgLoad(myPhoto.files,photoArea)
        }
    
    })

    //별
    myPoint.forEach((item)=>{
        item.addEventListener('click',function(){
            pointCnt = this.value
            const myPointLabel = reviewMy.querySelectorAll('p.stars label span.star_icon')
            myPointLabel.forEach((item)=>{
                item.innerText = 'star_outline'
            })        
            for(let i=0; i<pointCnt;i++){
                myPointLabel[i].innerText = 'star'
            }

            document.querySelector('.my_point .point_no').innerText = (pointCnt+'.0')


        })
    })

}