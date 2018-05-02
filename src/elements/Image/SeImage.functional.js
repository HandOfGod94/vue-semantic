export default {
  functional: true,
  render (h, ctx) {
    const attrs = ctx.data.attrs
    const Component = attrs.as

    return (
      <Component class={ctx.data.class} src={attrs.src}>
        {attrs.slots.default}
      </Component>
    )
  }
}
