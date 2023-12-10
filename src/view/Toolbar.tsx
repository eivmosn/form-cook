import type { FunctionalComponent } from 'vue'
import { defineComponent } from 'vue'
import type { DropdownOption } from 'naive-ui'
import { NButton, NDropdown, NTab, NTabs } from 'naive-ui'
import { MenuItem } from './Menubar'

export const ToolItem: FunctionalComponent<{
  options: DropdownOption[]
}> = (props, { slots }) => {
  return (
    <NDropdown
      showArrow
      trigger="hover"
      options={props.options}
    >
      <div class="fc b-rd-4px p-4px text-[var(--text-color-2)] hover:bg-[var(--hover-color)]">
        {slots.default?.()}
      </div>
    </NDropdown>
  )
}

export default defineComponent({
  inheritAttrs: false,
  name: 'Toolbar',
  emits: ['changeSize'],
  render() {
    return (
      <div class="fs gap-10px px-8px min-h-48px h-48px b-bottom b-[var(--border-color)] bg-[var(--card-color)]">
        <div class="fs w-300px">
          <div class="fc b-rd-4px p-4px text-[var(--text-color-2)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 32 32"
            >
              <path fill="currentColor" d="M26 15a6.003 6.003 0 0 0-3.107-5.253A3.98 3.98 0 0 0 24 7h-2a2.002 2.002 0 0 1-2 2a6.004 6.004 0 0 0-5.995 5.892A7 7 0 0 1 12 10a3.996 3.996 0 0 0-3-3.858V4H7v2.142A3.996 3.996 0 0 0 4 10v5H2v1a14 14 0 0 0 28 0v-1Zm-6-4a4.005 4.005 0 0 1 4 4h-8a4.005 4.005 0 0 1 4-4ZM6 10a2 2 0 1 1 4 0a8.991 8.991 0 0 0 1.532 5H6Zm10 18A12.017 12.017 0 0 1 4.041 17H27.96A12.017 12.017 0 0 1 16 28Z" />
            </svg>
          </div>
        </div>
        <div class="flex-1 fs gap-10px">
          <MenuItem onClick={() => this.$emit('changeSize', 'laptop')} active text="客户端" placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M26 24.005H6a2.002 2.002 0 0 1-2-2v-14a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v14a2.003 2.003 0 0 1-2 2Zm-20-16v14h20v-14Zm-4 18h28v2H2z" /></svg>
          </MenuItem>
          <MenuItem onClick={() => this.$emit('changeSize', 'tablet')} text="平板" placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
              <path fill="currentColor" d="M24 13h2v6h-2z" />
              <path fill="currentColor" d="M30 7v18a2.002 2.002 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V7a2.002 2.002 0 0 1 2-2h24a2.003 2.003 0 0 1 2 2ZM4 25h24V7H4Z" />
            </svg>
          </MenuItem>
          <MenuItem onClick={() => this.$emit('changeSize', 'mobile')} text="移动端" placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M22 4H10a2.002 2.002 0 0 0-2 2v22a2.002 2.002 0 0 0 2 2h12a2.003 2.003 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2Zm0 2v2H10V6ZM10 28V10h12v18Z" /></svg>
          </MenuItem>
        </div>
        <div class="fe gap-10px">
          <ToolItem options={[
            {
              label: '重置画布',
              key: 'reset',
            },
          ]}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
              <circle cx="8" cy="16" r="2" fill="currentColor" />
              <circle cx="16" cy="16" r="2" fill="currentColor" />
              <circle cx="24" cy="16" r="2" fill="currentColor" />
            </svg>
          </ToolItem>
          <MenuItem text="重做" placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
              <path fill="currentColor" d="M20 10H7.815l3.587-3.586L10 5l-6 6l6 6l1.402-1.415L7.818 12H20a6 6 0 0 1 0 12h-8v2h8a8 8 0 0 0 0-16Z" />
            </svg>
          </MenuItem>
          <MenuItem text="重做" placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
              <path fill="currentColor" d="M12 10h12.185l-3.587-3.586L22 5l6 6l-6 6l-1.402-1.415L24.182 12H12a6 6 0 0 0 0 12h8v2h-8a8 8 0 0 1 0-16Z" />
            </svg>
          </MenuItem>
          <MenuItem text="预览 ⌘ + P" placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
              <path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28ZM8 6.69v18.62L24.925 16Z" />
            </svg>
          </MenuItem>
          <NButton size="small" type="primary">保存</NButton>
          <div class="w-200px">
            <NTabs defaultValue="component" type="segment" size="small">
              <NTab name="component" label="组件属性" />
              <NTab name="form" label="表单属性" />
            </NTabs>
          </div>
        </div>
      </div>
    )
  },
})
