<template>
  <div id="app">
    <se-image src="static/user.png" circular size="small" />
    <se-image-group size="small">
      <se-image src="static/user.png" circular size="small" />
      <se-image src="static/user.png" circular size="small" />
      <se-image src="static/user.png" circular size="small" />
    </se-image-group>
  </div>
</template>

<script>
import SeImage from './elements/Image/SeImage'
import SeImageGroup from './elements/Image/SeImageGroup'

export default {
  name: 'App',
  components: {
    SeImage,
    SeImageGroup
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
