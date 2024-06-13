import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

let todoStore = (set) => ({
  todos: [],
  addTodo: (todoText) =>
    set((state) => ({ //원래 있던 스테이트 가져오기
      todos: [ //새 스테이트 넣기
        ...state.todos, //배열 안에 배열이 들어가지 않도록 전개연산자를 넣어 해체해 주기.
        { ///새 내용 넣기
          text: todoText, //텍스트 넣기
          id: getId(), //관리 가능하도록 고윳값 넣기
          isCompleted: false //선택 기본값(빈 체크박스이도록 함)
        }
      ]
    })),
  deleteTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId) //필터를 사용해 원하는 것과 다른 아이디만 빼고 지우도록 함.
    })),
  completeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: true
          }
        }
        return todo
      })
    }))
})

todoStore = devtools(todoStore)
todoStore = persist(todoStore, {
  name: 'Todo',
  getStorage: () => sessionStorage
})

export const useTodoStore = create(todoStore)

let id = 0
function getId() {
  return id++
}