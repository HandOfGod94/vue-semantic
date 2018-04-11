<template>
  <div id="app">
    <se-image :src="imageSrc" ></se-image>
    <se-image :src="imageSrc" circular size="small"></se-image>
    <se-image :src="imageSrc" avatar float="right" bordered />
    <se-image :src="imageSrc" size="tiny" vertical-align="top"></se-image> <span> Hello world</span><br />
    <se-image :src="imageSrc" size="tiny" vertical-align="bottom"></se-image> <span> Hello world</span>
    <se-image as="div">
      <img :src="imageSrc"  />
    </se-image>
  </div>
</template>

<script>
import SeImage from './elements/Image/SeImage'
import logo from './assets/logo.png'

export default {
  name: 'App',
  data: function () {
    return {
      imageSrc: logo
    }
  },
  components: {
    SeImage
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
