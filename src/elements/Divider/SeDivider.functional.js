export default {
  functional: true,
  render (h, ctx) {
    return (
      <div class={{...ctx.data.class}}>
        {ctx.data.attrs.slots.default}
      </div>
    )
  }
}
