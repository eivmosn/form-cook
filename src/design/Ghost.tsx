import {
  NBadge,
  NButton,
} from 'naive-ui'

export default defineComponent({
  inheritAttrs: false,
  name: 'Ghost',
  props: {
    widget: {
      type: Object,
      default: () => ({}),
    },
  },
  render() {
    return (
      <NBadge value={2}>
        <NButton type="info" size="small">
          组件
          {' '}
          {this.widget.id}
        </NButton>
      </NBadge>
    )
  },
})
