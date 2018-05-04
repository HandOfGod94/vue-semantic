<template>
  <div id="app">
    <se-label detail="214">Dogs</se-label>
  </div>
</template>

<script>
import SeLabel from './elements/Label/SeLabel'
import SeLabelGroup from './elements/Label/SeLabelGroup'

export default {
  name: 'App',
  components: {
    SeLabel,
    SeLabelGroup
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
