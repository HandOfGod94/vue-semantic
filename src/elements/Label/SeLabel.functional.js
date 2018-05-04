export default {
  functional: true,
  render (h, ctx) {
    const attrs = ctx.data.attrs
    const Component = attrs.as
    const detail = attrs.slots.detail || attrs.detail

    const detailSlot = (
      <div class="detail">
        {detail}
      </div>
    )

    return (
      <Component class={ctx.data.class}>
        {attrs.slots.default}
        {detail && detailSlot}
      </Component>
    )
  }
}
