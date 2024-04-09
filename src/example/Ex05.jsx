import React,{useState , useEffect} from 'react'

const Ex05 = () => {
    //useEffect --> state값이 바뀌고 난 직후 특정 로직을 싱행시키고 싶을 때
 const[num , setNum] = useState(0);

 //num값이 10이 된다면 alert을 띄우고 싶습니다.
 useEffect(()=>{
    //state 값을 통해서 로직을 작성할 수 있다.
    console.log(num)

 })
 
    return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>+</button>
    </div>
  )
}

export default Ex05