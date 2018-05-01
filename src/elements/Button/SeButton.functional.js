export default {
  functional: true,
  render (h, ctx) {
    const attrs = ctx.data.attrs
    const Component = attrs.as
    return (
      <Component class={ctx.data.class}>
        {attrs.icon && <i class={`${attrs.icon} icon`}></i> }
        {attrs.slots.label || attrs.label}
        {attrs.slots.default}
      </Component>
    )
  }
}
