export default {
  functional: true,
  render (h, ctx) {
    const attrs = ctx.data.attrs
    return (
      <div class={ctx.data.class}>
        {attrs.slots.leftAction}
        {attrs.slots.leftLabel}
        <input
          type={attrs.type}
          placeholder={attrs.placeholderText}
          value={attrs.value}
          name={attrs.name}
          onInput={ctx.listeners.input}></input>
        {attrs.icon && <i class={`${attrs.icon} icon`}></i> }
        {attrs.slots.rightLabel}
        {attrs.slots.rightAction}
      </div>
    )
  }
}
