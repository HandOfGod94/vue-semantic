import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'se-label-group',
  props: {
    size: String,
    color: String,
    tag: Boolean,
    circurlar: Boolean
  }
})
class SeLabelGroup extends Vue {
  render (h) {
    return (
      <div class={this.classes}>
        {this.$slots.default}
      </div>
    )
  }

  get classes () {
    let classes = {
      ui: true,
      [this.size]: this.size,
      [this.color]: this.color,
      tag: this.tag,
      circurlar: this.circurlar,
      labels: true
    }
    return classes
  }
}

export default SeLabelGroup
