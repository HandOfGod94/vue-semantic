
export default {
  functional: true,
  name: 'se-label-detail',
  render: function (h, ctx) {
    return (
      <div class="ui detail">{ctx.children}</div>
    )
  }
}
