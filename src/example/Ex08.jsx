import React, {useState , useRef} from 'react'

const Ex08 = () => {
const inputRef = useRef();
const [data , setData] = useState([""]);

function addData(){
    setData(data.concat(inputRef.current.value))
}
function deleteData(){
    setData(data.filter((dataE1,index)=> index != data.indexOf(data)))
}





  return (
    <div>
        <h1>2024 올해, 해 봅시다!!!!</h1>
        <input ref={inputRef}></input>
        <button onClick={addData}>계획추가!</button>
       

        <h1>ToDoList</h1>
        <ul>
        {data.map((dataEl)=><li>{dataEl} <button onClick={deleteData}>삭제</button></li>)}
        </ul>
    </div>
  )
}

export default Ex08