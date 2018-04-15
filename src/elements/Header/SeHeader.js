import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'se-header',
  props: {
    as: { type: String, required: true },
    inverted: Boolean,
    icon: String,
    image: String,
    content: String,
    subheader: Boolean,
    block: Boolean,
    disabled: Boolean,
    align: String,
    justified: Boolean,
    color: String
  }
})
class SeHeader extends Vue {
  render (h) {
    let HeaderTag = this.as
    return (
      <HeaderTag class={this.classes}>
        {this.icon && <i class={`${this.icon} icon`}></i> }
        {this.image && <img src={this.image} class="ui image"/> }
        {this.content && <div class="content">{this.content} {this.$slots.subheader} </div>}
        {this.$slots.default}
        {!this.content && this.$slots.subheader}
      </HeaderTag>
    )
  }

  get classes () {
    let classes = {
      ui: true,
      inverted: this.inverted,
      [this.color]: this.color,
      [`${this.align} aligned`]: this.align,
      disabled: this.disabled,
      sub: this.subheader,
      block: this.block,
      justified: this.justified,
      header: true
    }
    return classes
  }
}

export default SeHeader
