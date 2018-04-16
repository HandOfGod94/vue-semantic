<template>
  <div id="app">
    <se-image src="static/user.png" size="small" />
    <se-image src="static/user.png" disabled size="small" />
    <se-image src="static/user.png" avatar />
    <se-image src="static/user.png" bordered size="medium" />
    <se-image src="static/user.png" rounded size="medium" />
    <se-image src="static/user.png" circular size="medium" /> <br />
    <se-image src="static/user.png" vertical-align="middle" size="small" />
    <span>Middle Aliged</span><br />
    <se-image src="static/user.png" centered />
    <se-image src="static/user.png" fluid />
  </div>
</template>

<script>
import { SeImage } from './elements/Image'

export default {
  name: 'App',
  components: {
    SeImage
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
