<template>
  <div id="app">
    <se-image-group size="small">
      <se-image src="static/user.png" />
      <se-image src="static/user.png" disabled />
      <se-image src="static/user.png" rounded />
    </se-image-group>
  </div>
</template>

<script>
import { SeImage, SeImageGroup } from './elements/Image'

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
