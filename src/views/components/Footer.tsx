/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, ref, type PropType } from 'vue'

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<TodoItem[]>,
      required: true
    }
  },
  emits: {
    update: (_value: string) => true,
    clear: () => true
  },
  setup(props, { emit }) {
    const selected = ref('all')

    const elements = [
      { label: 'All', value: 'all' },
      { label: 'Done', value: 'do' },
      { label: 'Undone', value: 'un' }
    ]

    return () => (
      <footer>
        <div class="task-tool">
          <span>
            Remain <strong>{props.list.length}</strong>
          </span>
          <ul onClick={() => emit('update', selected.value)}>
            {elements.map((e, i) => (
              <li
                key={i}
                class={[selected.value === e.value ? 'selected' : '']}
                onClick={() => (selected.value = e.value)}
              >
                {e.label}
              </li>
            ))}
          </ul>
          <button onClick={() => emit('clear')}>Clear all</button>
        </div>
      </footer>
    )
  }
})
