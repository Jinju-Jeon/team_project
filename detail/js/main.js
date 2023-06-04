const aHref = document.querySelectorAll('.link a')
console.log(aHref)
const link = new Array
aHref.forEach((item,i)=>{
  link[i] = item.getAttribute('href')
  console.log(link[i])
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





//popup닫기용
document.querySelector('.popup').addEventListener('click',()=>document.getElementById('exchange_popup').click())


/* 변수설정 */
let price = 119000
let orderPrice = 0
let repBtns = new Array
const divEl = function(className){
    let div = document.createElement('div')
    div.classList.add(className)
    return div
}
const pEl = function(className){
    let p = document.createElement('p')
    p.classList.add(className)
    return p
}
const spanEl = function(){return document.createElement('span')}


/* 이미지 */
const imgList  = document.querySelectorAll('.img_list .img')
const mainImg = document.querySelector('.product_img>.img img')
imgList.forEach((item,i)=>{
    item.addEventListener('mouseenter',function(){
        let src = './img/product_img'+(i+1)+'.jpg'
        mainImg.setAttribute('src',src)

    })
})

//ansArea 초기설정
ansArea()


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

    //리뷰 작성 체크
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
        myText.select()
        return
    }

    newReview()

    myText.value=''
    
    

    
})
////리뷰 추가





/* 문의사항 */
const qnaBtn = document.getElementById('qna_submit')
const qnaTxt = document.getElementById('my_qna')
const inquiryPrev = document.querySelector('.inquiry_prev')
qnaBtn.addEventListener('click',()=>{
    newInq()
    ansArea()
})


/* 문의답변 */











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
        myStar.classList.add('star_icon')
        myStar.innerText = 'star'
        coverDiv.appendChild(myStar)
    }
    for(let i=1;i<=(5-cnt);i++){
        let myStar = spanEl()
        myStar.classList.add('material-icons-round')
        myStar.classList.add('star_icon')
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

//리뷰 추가
function newReview(){

    //틀
    const reviewContent = divEl('review_content')

    //별점
    const prevPoint = pEl('stars')
    prevPoint.classList.add('point')
    starSpan(pointCnt,prevPoint)

    let pointNo = spanEl()
    pointNo.classList.add('point_no')
    pointNo.textContent = (pointCnt+'.0')

    prevPoint.appendChild(pointNo)
        
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



    
    reviewPrev.prepend(reviewContent)
}

function newInq(){
    const inqContent = divEl('inquiry_content')
    const questionCover = divEl('question_cover')
    
    const answerCover = divEl('answer_cover')

    const question = pEl('question')
    question.innerText = qnaTxt.value
    

    const inqStat = spanEl()
    inqStat.classList.add('wait','inquiry_status')
    inqStat.innerText = '답변 대기'

    questionCover.append(inqStat,question)

    inqContent.append(questionCover,answerCover)
    inqContent.classList.add('not_ans')
    inquiryPrev.prepend(inqContent)

    qnaTxt.value=""
}
//답변란 메이커

function ansArea(){

    let notAns = document.querySelectorAll('.not_ans .answer_cover')
    notAns.forEach((item,i)=>{
        item.replaceChildren()
        item.setAttribute('class','')
        item.classList.add('answer_cover',('answer_cover'+i))

        const txtArea = document.createElement('textarea')
        txtArea.classList.add('rep_txt')
        txtArea.setAttribute('placeholder','답변을 작성해주세요')
        txtArea.setAttribute('id','rep_txt'+i)

        const repBtn = document.createElement('button')
        repBtn.setAttribute('class','rep_btn')
        repBtn.setAttribute('id','rep_btn'+i)
        repBtn.setAttribute('value',i)
        repBtn.innerText = '답변 작성'

        item.append(txtArea,repBtn)




    })

    
    repBtns = document.querySelectorAll('.rep_btn')

    makeRep(repBtns)

}

function makeRep(array){
    array.forEach((item,i)=>{
        item.addEventListener('click',()=>{
            let answered = document.querySelector(('.answer_cover'+i))
            let reply = document.querySelector(('#rep_txt'+i))
            
            let repEl = pEl('answer')
            repEl.innerText = reply.value

            answered.replaceChildren()
            answered.parentNode.classList.remove('not_ans')
            let stat = answered.parentNode.querySelector('span.wait')
            stat.classList.remove('wait')
            stat.classList.add('rep')
            stat.innerText = '답변 완료'

            answered.appendChild(repEl)

            
            
        })//aEL
    })//forEach
    
    repToggle()
    
}//function

function repToggle(){
    const repQ = document.querySelectorAll('.question_cover')
    const repA = document.querySelectorAll('.answer_cover')

    let stat = []
    for(let i=0;i<repQ.length;i++){
        stat[i] = 0
    }

    repQ.forEach((item,i)=>{
        item.addEventListener('click',function(){
            console.log('click')
            if(!stat[i]){
                stat[i]=1
                repA[i].style.display = 'flex'
            }else{
                stat[i]=0
                repA[i].style.display = 'none'
            }
        })
    })
    
}