import SeContainer from '../elements/Container/SeContainer.vue'
import SeButton from '../elements/Button/SeButton'
import SeButtonGroup from '../elements/Button/SeButtonGroup'
import SeLabel from '../elements/Label/SeLabel.vue'
import SeDivider from '../elements/Divider/SeDivider.vue'
import SeHeader from '../elements/Header/SeHeader.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('se-container', SeContainer)
  Vue.component('se-button-group', SeButtonGroup)
  Vue.component('se-button',SeButton)
  Vue.component('se-label', SeLabel)
  Vue.component('se-divider', SeDivider)
  Vue.component('se-header', SeHeader)
}