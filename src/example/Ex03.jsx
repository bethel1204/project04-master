import React,{useState} from 'react'
import '../App.css'

const Ex03 = () => {

c

    // 랜덤게임을 만들어보자.
    // 랜덤하게 컴퓨터가 생성해주는 숫자 : ranNum state 생성
    // 내가 누른 버튼의 숫자 : inputNum state 생성
    // 버튼을 눌렀을 때 실행할 함수 : btnCk 함수 생성

    // Step 1) 랜덤한 숫자를 뽑아준다. => ranNum에 적용
    // Step 2) 사용자가 누른 버튼의 내용을 감지해서 inputNum에 적용
    // Step 3) ranNum 와 inputNum를 비교해서, 같다면 "정답 입니다~" / 아니라면 "땡!"
    
    const [ranNum , setRanNum] = useState(0);
    const [inputNum , setInputNum] = useState(0);

    const btnCk = (e)=>{
        setRanNum(parseInt(Math.random()*3)+1);
        setInputNum(e.target.innerText);
    }
    
    // const btnCk = (e) =>{
    //     console.log('btn ck function')
    //   랜덤한 수
    //     console.log('ranNum',parseInt(Math.random()*3)+1)
    //     // 내가 선택한 수
    //     console.log('inputNum',e.target.innerText)
    //}

    

    return (
    <div className = 'div-center'>
         {/* emoji -> 윈도우 + .  */}
        
        <h1>랜덤게임⚽</h1>
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>
            {/* 복수클릭 => 원하는부분클릭+alt+click~ */}
        </div>
            <div>
                <span>내가 누른 숫자:{inputNum}</span>
                <br/>
                <span>컴퓨터 숫자:{ranNum}</span>
                <br/>

                {/* ranNum과 inputNum의 비교는 이곳에서 할것 */}
             {ranNum == inputNum ?<span>정답</span>: <span>땡입니다!</span>}

            </div>
    </div>
  )}

export default Ex03