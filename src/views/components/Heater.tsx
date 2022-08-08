/* eslint-disable @typescript-eslint/no-unused-vars */
import { computed, defineComponent, ref, type PropType } from 'vue'
import { checkNotNull } from '@/utils'

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<TodoItem[]>,
      required: true
    }
  },
  emits: {
    create: (_value: string) => true
  },
  setup(props, { emit }) {
    const task = ref('')

    const selectedAll = computed({
      get: () => props.list.length !== 0 && props.list.every(e => e.status === true),
      set: value => props.list.forEach(e => (e.status = value))
    })

    const onKeydown = async (payload: KeyboardEvent) => {
      if (payload.code === 'Enter' || payload.code === 'NumpadEnter') {
        try {
          await checkNotNull(task.value, 'not null')
          emit('create', task.value)
          task.value = ''
        } catch (error) {
          console.log(error)
        }
      }
    }

    return () => (
      <header>
        <h1>todo...</h1>
        <input type="checkbox" id="toggle-group" class="toggle-group" v-model={selectedAll.value} />
        <label htmlFor="toggle-group"></label>
        <input
          type="text"
          autofocus
          placeholder="Please input"
          class="task-name"
          v-model={task.value}
          onKeydown={onKeydown}
        />
      </header>
    )
  }
})
