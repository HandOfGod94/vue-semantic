import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'se-sub-header'
})
class SeSubHeader extends Vue {
  render () {
    return (
      <div class="sub header">{this.$slots.default}</div>
    )
  }
}

export default SeSubHeader
