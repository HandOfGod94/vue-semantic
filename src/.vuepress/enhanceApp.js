import SeContainer from '../elements/Container/SeContainer.vue'
import SeButton from '../elements/Button/SeButton.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('se-container', SeContainer)
  Vue.component('se-button', SeButton)
}