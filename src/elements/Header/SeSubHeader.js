
export default {
  functional: true,
  name: 'se-sub-header',
  render: function (h, ctx) {
    return (
      <div class="sub header">{ctx.children}</div>
    )
  }
}
