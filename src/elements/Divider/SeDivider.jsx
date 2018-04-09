import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'se-divider',
  props: {
    horizontal: Boolean,
    inverted: Boolean,
    fitted: Boolean,
    hidden: Boolean,
    section: Boolean,
    clearing: Boolean
  }
})
class SeDivider extends Vue {
  render () {
    return (
      <div class={this.classes}></div>
    )
  }

  get classes () {
    const classes = {
      ui: true,
      horizontal: this.horizontal,
      inverted: this.inverted,
      fitted: this.fitted,
      hidden: this.hidden,
      section: this.section,
      clearing: this.clearing,
      divider: true
    }

    return classes
  }
}

export default SeDivider
