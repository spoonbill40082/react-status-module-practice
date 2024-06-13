import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoItemCreator from './components/TodoItemCreator';
import { filteredTodoListState } from './todoAtoms';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import { currentUserNameQuery } from './userAtoms';

function App() {
  //useRecoilValue를 이용해 todoListState 값을 읽어준다.
  // useRecoilValue를 이용하면 state 상태 값만을 참조할 수 있다.
  // const todoList = useRecoilValue(todoListState);

  const filteredTodoList = useRecoilValue(filteredTodoListState)
  // console.log('todoList', todoList)
  console.log('filteredTodoList', filteredTodoList)

  return (
    <div>
      <Suspense fallback={<div>LOADING...</div>}>
        <CurrentUserInfo />
      </Suspense>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default App;


function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery)
  return <div>{userName}</div>
}