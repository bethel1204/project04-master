import React, {useState, useRef, useEffect} from 'react'

const Ex08 = () => {
  const inputRef=useRef();


const [ todos , setTodos ] = useState([{
  content : "물 마시기",
  completed : false,
  num : 1
}])
/* 스프레드 문법(spread)
 ...객체 : 객체를 새로 만들어 값을 넣어주는 복사를 진행하겠다.

*/
/* totos 리스트 내에 새로운 todo를 추가하는 것 */
const handleNewTodoAdd = ()=>{
  console.log('새로운 todo', inputRef.current.value)
  setTodos([...todos,{
    content : inputRef.current.value,
    completed : false ,
    num : todos.length+1
  }])
  inputRef.current.value = ""
  
}
/** 체크 버튼을 클릭했을 때 , 할일을 완료 상태로 바꾸고 밑줄을 그어준다. */
const handleTodoCompleted = (num) =>{
  console.log('completed function' , num)

  const newTodos = [...todos]

  let idx = newTodos.findIndex(item => item.num == num);
  console.log('idx',idx)

  todos[idx].completed = !newTodos[idx].completed
  setTodos(newTodos)



}

/* 선택한 todo를 삭제하는 함수*/
const handleTodoDelete = (num)=>{
  console.log('delete function',num)
  const newTodos = [...todos]
  let idx = newTodos.findIndex(item =>item.num == num);
  //배열함수 : splice
  // (원본 배열에 새로운 요소를 추가하거나, 삭제하거나, 교체한 배열을 반환하는 함수)
  // 배열.splice(변경을시작할idx , 제거할수 , 추가할내용 )

  newTodos.splice(idx,1)
  setTodos(newTodos)

  
}



useEffect(()=>{
  inputRef.current.focus();
},[])
  return (
    <div>
        <h1>2024 올해, 해 봅시다!!!!</h1>
        <input type='text' ref={inputRef} ></input>
        <button onClick={handleNewTodoAdd} >계획추가!</button>
       

        <h1>ToDoList</h1>
        <ul>
        {todos.map((item)=>(
          <li key={item.num}>
            <input type='checkbox' onChange={()=>{handleTodoCompleted(item.num)}}></input>
            <label
            style = {{
              textDecoration : item.completed ? 'line-through' : 'none'
            }}
            >
            <span>{item.content}</span>
            </label>
            <button onClick={()=>{handleTodoDelete(item.num)}}> 삭제</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Ex08