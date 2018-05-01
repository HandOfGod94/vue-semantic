export default {
  functional: true,
  props: ['classes'],
  render (h, ctx) {
    const attrs = ctx.data.attrs
    const subheader = attrs.slots.subheader || attrs.subheader
    const content = attrs.slots.content || attrs.content
    const Component = attrs.as

    const subHeaderSlot = (
      <div class="sub header">
        {subheader}
      </div>
    )

    const contentSlot = (
      <div class="content">
        {content}
        {subheader && subHeaderSlot}
      </div>
    )

    return (
      <Component class={{...ctx.data.class}}>
        {attrs.icon && <i class={`${attrs.icon} icon`}></i>}
        {attrs.slots.default}
        {content && contentSlot}
      </Component>
    )
  }
}
