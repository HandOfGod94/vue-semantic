import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'se-image',
  props: {
    as: { type: String, default: 'img' },
    src: { type: String, require: true },
    size: String,
    hidden: Boolean,
    disabled: Boolean,
    avatar: Boolean,
    bordered: Boolean,
    fluid: Boolean,
    rounded: Boolean,
    circular: Boolean,
    verticalAlign: Boolean,
    centered: Boolean,
    spaced: Boolean,
    float: String
  }
})
class SeImage extends Vue {
  render (h) {
    let Image = this.as
    return (
      <Image class={this.classes} src={this.as === 'img' && this.src}>
        { this.as !== 'img' && this.$slots.default}
      </Image>
    )
  }

  get classes () {
    let classes = {
      ui: true,
      hidden: this.hidden,
      disabled: this.disabled,
      [this.size]: this.size,
      bordered: this.bordered,
      avatar: this.avatar,
      fluid: this.fluid,
      rounded: this.rounded,
      circular: this.circular,
      [`${this.verticalAlign} aligned`]: this.verticalAlign,
      centered: this.centered,
      spaced: this.spaced,
      [`${this.float} floated`]: this.float,
      image: true
    }
    return classes
  }
}

export default SeImage
