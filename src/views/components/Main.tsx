/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<TodoItem[]>,
      required: true
    }
  },
  emits: {
    delete: (_id: number) => true
  },
  setup(props, { emit }) {
    return () => (
      <main>
        <ul class="task-list">
          {props.list.map(e => (
            <li key={e.id} class={[e.status ? 'completed' : '']}>
              <input type="checkbox" id={`toggle-${e.id}`} class="toggle-item" v-model={e.status} />
              <label htmlFor={`toggle-${e.id}`}>{e.task}</label>
              <button onClick={() => emit('delete', e.id)}></button>
            </li>
          ))}
        </ul>
      </main>
    )
  }
})
