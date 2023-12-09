import { NButton, NButtonGroup, NTooltip } from 'naive-ui'
import type { FunctionalComponent } from 'vue'
import { defineComponent } from 'vue'

const Buttons = [
  {
    label: '清空',
    value: 'clear',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <g fill="currentColor">
          <path d="m163.48 131.48l9.21 9.21a16 16 0 0 1 0 22.62L152 184l-80-80l20.69-20.69a16 16 0 0 1 22.62 0l9.21 9.21a8 8 0 0 0 11.61-.32L191 31a24 24 0 0 1 34 34l-61.17 54.9a8 8 0 0 0-.35 11.58Z" opacity=".2" />
          <path d="M230.64 25.36a32 32 0 0 0-45.26 0c-.1.1-.2.2-.29.31l-54.91 61.18l-9.18-9.21a24 24 0 0 0-33.95 0l-76.69 76.7a8 8 0 0 0 0 11.31l80 80a8 8 0 0 0 11.31 0L178.36 169a24 24 0 0 0 0-33.95l-9.21-9.2l61.18-54.91a2.91 2.91 0 0 0 .31-.3a32 32 0 0 0 0-45.28ZM96 228.69L79.32 212l22.34-22.35a8 8 0 0 0-11.31-11.31L68 200.68L55.32 188l22.34-22.35a8 8 0 0 0-11.31-11.31L44 176.68L27.31 160L72 115.31L140.69 184ZM219.46 59.16l-61 54.75a16 16 0 0 0-.62 23.22l9.2 9.21a8 8 0 0 1 0 11.31l-15 15L83.32 104l15-15a8 8 0 0 1 11.31 0l9.21 9.2a16 16 0 0 0 23.22-.62l54.75-61a16 16 0 0 1 22.62 22.62Z" />
        </g>
      </svg>
    ),
  },
  {
    label: '复制',
    value: 'copy',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <g fill="currentColor">
          <path d="M216 40v128h-48V88H88V40Z" opacity=".2" />
          <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
        </g>
      </svg>
    ),
  },
  {
    label: '删除',
    value: 'delete',
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <g fill="currentColor">
          <path d="M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity=".2" />
          <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
        </g>
      </svg>
    ),
  },
]

const Selector: FunctionalComponent = () => {
  return (
    <NButtonGroup size="tiny" class="b-rd-0! absolute bottom-0 right-0">
      {
        Buttons.map((button) => {
          return (
            <NTooltip trigger="hover">
              {{
                trigger: () => (
                  <NButton type="primary" class="b-rd-0! w-22px!">
                    {{ icon: button.icon }}
                  </NButton>
                ),
                default: () => button.label,
              }}
            </NTooltip>
          )
        })
      }
    </NButtonGroup>
  )
}

export default defineComponent({
  inheritAttrs: false,
  name: 'Controller',
  setup() {

  },
  render() {
    return (
      <div
        class="b b-[var(--border-color)] min-h-55px relative"
        style="grid-column: span 12 / span 12"
      >
        <Selector />
      </div>
    )
  },
})
