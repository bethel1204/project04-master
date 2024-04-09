import React,{useState} from 'react'

let uScore = 0;
let cScore = 0;

const ex04선생님 = () => {

    // 일반 변수는 값이 바뀔때 화면에 적용이 안된다.
    //let comDice = 1
    //state 변수는 값이 바뀔 때 화면에 적용이 된다.
    // 리액트는 화면에 적용될 변수와 적용이 안되는 변수를 구분해놨다
    // 일반변수 : 화면 x , 스테이트 : O
    // set함수가 실행이 된다 --> 재렌더링 된다(state제외)
    const [comDice,setComeDice] = useState(1);
    const [userDice,setUserDice] = useState(1);
    const [ comScore , setComScore] = useState(0);
    const [ userScore,setUserScore] = useState(0);
    //승자 state
    const [win,setWin] = useState('')

    function startCk(){
        //이미지를 랜덤하게 바꿔줘야 한다.
        // comDice = parseInt(Math.random()*6) +1;
        let comRan = parseInt(Math.random()*6) +1
        setComDice(comRan)
        let userRan = parseInt(Math.random()*6)+1
        setUserDice(comUser)

        setComeDice(parseInt(Math.random()*6) +1)
        setUserDice(parseInt(Math.random()*6)+1)

        if(userDice>comDice){
            setUserScore(userScore+1)
            uScore++
        }else if(comDice>userDice){
            setComScore(comScore+1)
            cScore++
        }
        if(userScore==10){
            setWin('사용자')
        }else if(comScore ==10){
            setWin('컴퓨터')
        }
       
    }
  return (
    <div>

<div>
      <h1>DICE GAME</h1>
      <button onClick={startCk}>Start</button>

      <div className="dice">
        <img src={"./img/dice1"+comeDice+".png"}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={"./img/dice1"+userDice+".png"}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {win+"가 이겼습니다."}</h1>

    </div>









    </div>
  )
}

export default ex04선생님