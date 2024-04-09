import React, {useRef,useState} from 'react'

const Ex07 = () => {
    //DB에서 가져온 정보
    let array = ['큐브','초밥','짜장면','냉면','돈까스']
    const [data , setData] = useState(['큐브','초밥','짜장면','냉면','돈까스']);

const inputRef = useRef();

    function addData(){
        //1. 입력 받은 데이터를 가져오기
        //inputRef.current.value
        //2. 가져온 데이터를 array에 추가하기
        //array.push(inputRef.current.value)
        //state 로 만들어진 배열에는 , push or pop 사용할 수 없다.
        //state 로 만들어진 배열에 데이터를 추가할때는 concat를 사용해야 한다.
        
        //push --> 기존 배열에 데이터를 추가 --> 기존 배열이 바뀐다
        //concat --> 기존배열에 데이터를 추가해서 --> 새로운 배열을 생성
        // concat --> 기존 배열은 안바뀐다.
        setData(data.concat(inputRef.current.value))

    }

    function deleteData(){
        //data.pop(); : State(변수)에는 못쓴다. pop,push X
        //filter 함수 : 배열에 조건을 줘서 새로운 배열을 만들어주는 함수이다.
        setData(data.filter((dataEl,index)=> index != data.length-1))
    }

  return (
    <div>
        <input ref={inputRef}></input>
        <button onClick={addData}>추가</button>
        <button onClick={deleteData}> 마지막 데이터 삭제</button>
    <ul>
        {/* <li>{array[0]}</li> 
        <li>{array[1]}</li>
        <li>{array[2]}</li>
        <li>{array[3]}</li>
        <li>{array[4]}</li>*/}

        {/* 
            map() : 배열 안에 있는 요소들을 특정 규칙에 맞게끔 바꿔서
                    새로운 배열을 만들어 주는 함수
        */}
       {/* {data : 배열에 있는 요소를 의미한다.} */}
        {data.map((dataEl)=><li>{dataEl}</li>)}

        {/* 
        array = ['큐브','초밥','짜장면','냉면','돈까스']
        array = [<li>큐브</li>,
                 <li>초밥</li>,
                 <li>짜장면</li>,
                 <li>냉면</li>,
                 <li>돈까스</li>]
        */} 
    </ul>



    </div>







  )
}

export default Ex07