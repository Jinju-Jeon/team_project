import userData from "./data.js"

/* ID PW */
const userId = document.getElementById('user_id')
const messageP = document.querySelectorAll('.message')
const userPw = document.getElementById('user_pw')
const userPwchk = document.getElementById('user_pwchk')

const idCheck = document.getElementById('id_check')
let userIndex = 0




idCheck.addEventListener('click',function(){
    for(let i=0;i<userData.length;i++){
        if(userId.value === userData[i].id){
            messageP[0].classList.remove('err')
            messageP[0].classList.add('cor')
            messageP[0].innerText = '아이디가 존재합니다. 비밀번호를 재설정합니다.'
            userPw.disabled = false;
            userPwchk.disabled = false;
            userIndex = i
            break
        } else{
            messageP[0].classList.remove('cor')
            messageP[0].classList.add('err')
            messageP[0].innerText = '존재하지 않는 아이디입니다.'
        }
    }//for
})



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

