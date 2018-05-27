<template>
  <div id="app">
    <se-header as="h2" icon="settings" content="Account Settings" subheader="Manage your preferences" />
  </div>
</template>

<script>
import SeHeader from './elements/Header/SeHeader'

export default {
  name: 'App',
  data () {
    return {
      inputData: ''
    }
  },
  components: {
    SeHeader
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
