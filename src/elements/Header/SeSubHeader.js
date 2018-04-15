import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  functional: true,
  name: 'se-sub-header'
})
class SeSubHeader extends Vue {
  render (h, context) {
    return (
      <div class="sub header">{context.children}</div>
    )
  }
}

export default SeSubHeader
