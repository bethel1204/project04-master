import React, {useState} from 'react'

let num = 0;
let num2 = 0;

const Ex04 = () => {

  const [ran, setRan] = useState('./img/dice1.png');
  const [ran2, setRan2] = useState('./img/dice1.png');
  const [score, setScore] = useState('');

  const btnCk = (e) => {
    let ranint = parseInt(Math.random() * 6) + 1
    let ranint2 = parseInt(Math.random() * 6) + 1

    setRan('./img/dice' + ranint + '.png');
    setRan2('./img/dice' + ranint2 + '.png');

    if (ranint > ranint2) {
        num = num + 1;
        if (num == 10) {
            setScore('COM WIN')
        }
    } else if (ranint < ranint2) {
        num2 = num2 + 1; 
        if (num2 == 10) {
            setScore('USER WIN')
        }
    }

  };


  return (
    <div>
      <h1>DICE GAME</h1>
      {/* <button onClick={}>Start</button> */}
      <button onClick={btnCk}>Start</button>

      <div className="dice">
        <img src={ran}></img>
        {/* <h1>Com Score : {}</h1> */}
        <h1>Com Score : {num}</h1>
      </div>
      <div className="dice">
        <img src={ran2}></img>
        {/* <h1>User Score : {}</h1> */}
        <h1>User Score : {num2}</h1>
      </div>

      {/* <h1>결과 : {}</h1> */}
      <h1>결과 : {score}</h1>
    </div>
  )
}

export default Ex04;