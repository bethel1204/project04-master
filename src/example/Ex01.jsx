import React,{useState} from 'react'
import '../App.css'

const Ex01 = () => {

  /* Ex01 학습 목표!
 1) 리액트에서 Event 객체를 사용해보자.
 2) 왜 우리는 리액트에서 변수를 사용할 수 없는지 알아보자.
 3) 변수를 대체해서 State를 사용해보자.
 */

 /* React Event

 1.html 요소안에 onClick : camel Case로 작성
 2.onClick={함수} 이 때 많이 실수 하는게 , 함수 뒤에 ()는 붙이지 않는다.
 3. 이 때 , 함수는 별도로 만든 함수여도 되고 , 안에 바로 함수를 넣는것도 된다.
 -{increase} 가능
 -{()={console.log('function')}} 가능=> 매개변수를 이용할 때 사용
 4. DOM 요소 안에만 이벤트를 설정 할 수 있다.
    -내가 직접 만든 컴포넌트에는 활용 할 수 없다.
    -EX) MenuBox onClick={} => 불가능 , div , button 등 안에 넣는다.
 */

//변수 : 값은 변하지만 화면에 렌더링 되지 않는다.
let num = 0

//state
//const [state이름,그state를변경시키는함수] = usestate(초기값)
//      -state이름: 변수처럼 활용 가능
//      -대부분 set + state 이름을 붙임

// 1. useState를 import 해온다.
// 2. state를 선언한다.

const [num2,setNum2] = useState(0);
// 3. state의 값을 변경한다.
// state를 변경 시키는 함수 (변경할 값)
// setNum2(num2+1)
 /** 숫자를 1씩 증가시키는 함수 */
const increase = ()=>{
  console.log("increase function")
  num+=1;
  setNum2(num2+1)
  }

  /** 숫자를 1씩 감소시키는 함수 */
  const decrease = ()=>{
    console.log('decrease function')
    num-=1;
    setNum2(num2-1)
  }

  return (
    <div className='div-center'>
      <h1>{num2}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>


    </div>
  )
}

export default Ex01