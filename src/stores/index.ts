import { defineStore } from 'pinia'
import { getLocal, setLocal, TODO } from '@/utils'

export const useStore = defineStore('index', {
  state: () => ({
    todoList: [] as TodoItem[]
  }),
  getters: {
    getTodoList: state => state.todoList || getLocal<TodoItem[]>(TODO.LIST)
  },
  actions: {
    setTodoList(data: TodoItem[]) {
      this.todoList = data
      setLocal<TodoItem[]>(TODO.LIST, data)
    }
  }
})
