import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'se-container',
  props: {
    text: Boolean,
    align: String,
    justified: Boolean,
    fluid: Boolean
  }
})
class SeContainer extends Vue {
  render () {
    return (
      <div class={this.classes}>
        {this.$slots.default}
      </div>
    )
  }

  get classes () {
    const classes = {
      ui: true,
      text: this.text,
      [`${this.align} aligned`]: this.align,
      justified: this.justified,
      fluid: this.fluid,
      container: true
    }

    return classes
  }
}

export default SeContainer
