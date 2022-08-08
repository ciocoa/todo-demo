import { computed, defineComponent, ref, watch } from 'vue'
import { getLocal, setLocal, TODO } from '@/utils'
import { Footer, Heater, Main } from './components'

export default defineComponent({
  setup() {
    const todoList = ref(getLocal<TodoItem[]>(TODO.LIST) || [])
    const selected = ref('all')

    const onCreate = (task: string) => {
      const id =
        todoList.value.length === 0 ? 100 : todoList.value[todoList.value.length - 1].id + 1
      todoList.value.push({
        id,
        task,
        status: false
      })
    }

    const onDelete = (id: number) => {
      todoList.value.splice(
        todoList.value.findIndex(obj => obj.id === id),
        1
      )
    }

    const onUpdate = (select: string) => {
      selected.value = select
    }

    const onClear = () => {
      todoList.value.filter(obj => obj.status === false)
    }

    const newList = computed(() => {
      if (selected.value === 'do') return todoList.value.filter(obj => obj.status === true)
      else if (selected.value === 'un') return todoList.value.filter(obj => obj.status === false)
      else return todoList.value
    })

    watch(todoList.value, value => setLocal<TodoItem[]>(TODO.LIST, value))

    return () => (
      <section class="container">
        <Heater list={newList.value} onCreate={onCreate} />
        <Main list={newList.value} onDelete={onDelete} />
        <Footer list={newList.value} onUpdate={onUpdate} onClear={onClear} />
      </section>
    )
  }
})
