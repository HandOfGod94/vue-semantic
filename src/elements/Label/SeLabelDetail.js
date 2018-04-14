import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  functional: true,
  name: 'se-label-detail'
})
class SeLabelDetail extends Vue {
  render (h, context) {
    return (
      <div class="ui detail">{context.children}</div>
    )
  }
}

export default SeLabelDetail
