import React, {useState} from 'react'

let num = 0;
let num2 = 0;

const Ex04 = () => {

const [com, setCom] = useState('./img/dice1.png');
const [user , setUser] = useState('./img/dice1.png');
const [score , setScore] = useState('');

const btnCk = (e) => {
    let crannum =parseInt(Math.random()*6)+1
    let urannum =parseInt(Math.random()*6)+1

    setCom('./img/dice' + urannum +'.png');
    setUser('./img/dice' + crannum + '.png');

    if(crannum > urannum){
        num = num+1;
        if(num == 10){
            setScore("Com Win")
        }
    }else if(crannum < urannum){
        num2 = num2+1;
        if(num2 == 10){
            setScore('User Win')
        }
    }
}
  return (
    <div>

<div>
      <h1>DICE GAME</h1>
      <button onClick={btnCk} >Start</button>

      <div className="dice">
        <img src={com}></img>
        <h1>Com Score : {num}</h1>
      </div>
      <div className="dice">
        <img src={user}></img>
        <h1>User Score : {num2}</h1>
      </div>

      <h1>결과 : {score}</h1>

    </div>



    </div>
  )
}

export default Ex04