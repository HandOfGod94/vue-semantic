<template>
  <div id="app">
    <se-container align="right">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
    </se-container>
  </div>
</template>

<script>
import SeContainer from './elements/Container/SeContainer'

export default {
  name: 'App',
  components: {
    SeContainer
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
