import React, {useState, useRef} from 'react'

const Ex06 = () => {
// useRef : 태그를 선택하는 기능

const inputRef = useRef();
const [inputText , setInputText] = useState('');
function getData(e){
  // inputRef.current : inputRef가 가르키는 태그를 의미한다.
  // 리액트에서 document.querySeletor('input') or getElementbyoooo
  // -> 으로 태그를 찾아오는것은 권장하지 않는다.
  // inputRef.current.value
  setInputText(inputRef.current.value)
}

    return (
    <div>

        <h1>Input 태그 다루기 </h1>
        {/*
        e : 이벤트 객체 ( 이벤트의 전반적인 내용 전부)
        e,target : 이벤트를 발생시킨 주체를 의미한다.(인풋태그)
        e.target.value : input태그에 적은 값을 의미한다.
        */}
        {/* ref = {inputRef} inputRef 라는 변수를 input태그에 대응 시키겠다. */}
        <input ref={inputRef}></input> 
       <button onClick={getData}>출력</button>
        <h1>{inputText}</h1>




    </div>
  )
}

export default Ex06