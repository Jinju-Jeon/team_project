import userData from "./data.js"




/* ID PW */
const userId = document.getElementById('user_id')
const messageP = document.querySelectorAll('.message')

const userPw = document.getElementById('user_pw')
const userPwchk = document.getElementById('user_pwchk')


/* id길이 및 중복여부 체크 */

userId.addEventListener('change',function(){
    for(let i=0;i<userData.length;i++){
        if(this.value===userData[i].id){
            messageP[0].classList.remove('cor')
            messageP[0].classList.add('err')
            messageP[0].innerText = '중복된 아이디입니다.'
            break
            //중복일 시 for 탈출
        }  //중복 아닐 시 길이 체크
        else{ 
            if(this.value.length<4){
                messageP[0].classList.remove('cor')
                messageP[0].classList.add('err')
                messageP[0].innerText = '조건에 맞지 않는 아이디입니다.'
                this.focus()
            } else{
                messageP[0].classList.remove('err')
                messageP[0].classList.add('cor')
                messageP[0].innerText = '사용 가능한 아이디입니다.'
            }
        }//길이체크else
    }//for
})//EL


userPw.addEventListener('change',function(){
    if(this.value.length<8){
        messageP[1].classList.remove('cor')
        messageP[1].classList.add('err')
        messageP[1].innerText = '조건에 맞지 않는 비밀번호입니다.'
        this.focus()
    } else{
        messageP[1].classList.remove('err')
        messageP[1].classList.add('cor')
        messageP[1].innerText = '사용 가능한 비밀번호입니다.'
    }
    pwConform()
    
})

userPwchk.addEventListener('change',pwConform)


function pwConform(){
    if(userPwchk.value===userPw.value){
        messageP[2].classList.remove('err')
        messageP[2].classList.add('cor')
        messageP[2].innerText = '비밀번호가 일치합니다.'
        document.querySelector('.pwchk i').classList.add('cor')
    } else{
        messageP[2].classList.remove('cor')
        messageP[2].classList.add('err')
        messageP[2].innerText = '비밀번호가 일치하지 않습니다.'
        document.querySelector('.pwchk i').classList.remove('cor')
    }

}


/* 개인정보 */
const userTel2 = document.getElementById('user_tel2')
const userTel3 = document.getElementById('user_tel3')

userTel2.addEventListener('keyup',function(){
    if(this.value.length>=4){
        userTel3.focus()
    }
})
userTel3.addEventListener('keyup',function(){
    if(this.value.length>=4){
        agreeWhole.focus()
    }
})




/* 체크박스 */
const agreeWhole = document.getElementById('agree_whole')
const agreeChks = document.getElementsByName('agree')
const receiveChks = document.getElementsByName('receive')

const detailBtn = document.querySelectorAll('.detail_btn')

//clickevent
agreeWhole.addEventListener('click',allChk)
agreeChks[0].addEventListener('click',termClick)
agreeChks[1].addEventListener('click',termClick)
agreeChks[2].addEventListener('click',termClick)
agreeChks[3].addEventListener('click',termClick)
agreeChks[3].addEventListener('click',receiveWhole)
receiveChks[0].addEventListener('click',receiveClick)
receiveChks[1].addEventListener('click',receiveClick)


//약관 펼침
let state = Array()
for(let i=0;i<detailBtn.length;i++){
    state[i] = 0
    detailBtn[i].addEventListener('click',function(){
        let detail = this.parentNode.children[3]
        if(!state[i]){
            this.innerHTML = '접기<i class="fas fa-chevron-up"></i>'
            
            detail.style.display = 'block'
            state[i]=1
        } else{
            this.innerHTML = '상세보기<i class="fas fa-chevron-down"></i>'

            detail.style.display = 'none'
            state[i]=0
        }
        
    })
}////for

function receiveClick(){
    if(receiveChks[0].checked && receiveChks[1].checked){
        agreeChks[3].checked = true
        termClick()
    } else{
        agreeChks[3].checked = false
        termClick()
    }
}

function allChk(){
    if(agreeWhole.checked){
        agreeChks.forEach(function(agreeChk){
            agreeChk.checked = true
        })
    } else{
        agreeChks.forEach(function(agreeChk){
            agreeChk.checked = false})
    }

    receiveWhole()
} //allChk

function termClick(){
    if(agreeChks[0].checked && agreeChks[1].checked && agreeChks[2].checked && agreeChks[3].checked ){
        agreeWhole.checked = true   
    }else{
        agreeWhole.checked = false   
    }
    
}

function receiveWhole(){
    if(agreeChks[3].checked){
        receiveChks.forEach(function(receiveChk){
            receiveChk.checked = true
        })
    } else{
        receiveChks.forEach(function(receiveChk){
            receiveChk.checked = false
        })
    }
}//reciveWhole


