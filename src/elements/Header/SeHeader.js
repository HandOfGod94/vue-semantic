
export default {
  name: 'se-header',
  props: {
    as: { type: String, required: true },
    inverted: Boolean,
    sub: Boolean,
    block: Boolean,
    icon: String,
    iconHeader: Boolean,
    float: String,
    disabled: Boolean,
    align: String,
    justified: Boolean,
    color: String,
    content: String,
    subheader: String
  },

  computed: {
    classObject () {
      return {
        ui: true,
        inverted: this.inverted,
        [this.color]: this.color,
        [`${this.float} floated`]: this.float,
        [`${this.align} aligned`]: this.align,
        disabled: this.disabled,
        icon: this.iconHeader,
        sub: this.sub,
        block: this.block,
        justified: this.justified,
        header: true
      }
    },
    hasContent () { return !!this.$slots['content'] || this.content },
    hasSubheader () { return !!this.$slots['subheader'] || this.subheader }
  },

  render (h) {
    const Component = this.as

    const subHeaderSlot = (
      <div class="sub header">
        {this.$slots.subheader || this.subheader}
      </div>
    )

    const contentSlot = (
      <div class="content">
        {this.$slots.content || this.content}
        {this.hasSubheader && subHeaderSlot}
      </div>
    )

    return (
      <Component class={this.classObject}>
        {this.icon && <i class={`${this.icon} icon`}></i>}
        {this.$slots.default}
        {this.hasContent && contentSlot}
      </Component>
    )
  }
}
