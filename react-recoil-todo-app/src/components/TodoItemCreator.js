import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../todoAtoms'

// item들을 만들어주는 컴포넌트. todoAtom의 todoListState를 가져다 활용한다.

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("")
  const setTodoList = useSetRecoilState(todoListState)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ])
    // add 버튼을 누를 때 input의 내용이 없어져야 한다. 즉, 초기화해 주어야 함.
    setInputValue('')
  }

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

// 고유한 id 생성을 위한 유틸리티
let id = 0
function getId() {
  return id++
}


export default TodoItemCreator
