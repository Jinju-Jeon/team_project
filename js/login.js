import userData from "./data.js"



    const userId = document.getElementById('user_id')
    const userPw = document.getElementById('user_pw')
    const loginBtn = document.getElementById('login_btn')
    const message = document.querySelector('.message')

    let prevId = '';
    let count = 0;

    loginBtn.addEventListener('click',()=>{
        let idCount = 0;
        if(prevId !== userId.value){count=0}
        
        userData.forEach((data) => {
            if(userId.value === data.id){
                if(userPw.value === data.pw){
                    message.classList.remove('err')
                    message.classList.add('cor')
                    message.innerText = '로그인 성공'
                } else{
                    message.classList.remove('cor')
                    message.classList.add('err')

                    if(++count>=5){
                        message.innerText = '5회 이상 오류입니다. 비밀번호 찾기로 이동합니다.'
                        setTimeout(()=>{location.href = './findpw.html'},2000)
                    } else{
                        message.innerText = '비밀번호 오류입니다. 5회 오류 시 비밀번호 찾기로 이동합니다. 현재'+count+'회'
                    }//오류 횟수 카운트
                }
                return //if빠져나옴
            } else{
                idCount++
                if(idCount>=userData.length){
                    message.classList.add('err')
                    message.classList.remove('cor')
                    message.innerText = '존재하지 않는 아이디입니다.'
                }//id존재여부 체크                
            }//else

            prevId = userId.value;

        });//forEach
    })







    
/*     
        if(userId.value !== setId){
        } else if(userPw.value !== setPw){

        } else{
        }
    
 */