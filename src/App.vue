<template>
  <div id="app">
    <se-label>
      <i class="mail icon"></i> 23
    </se-label>
    <se-label>
      Dogs
      <template slot="detail">214</template>
    </se-label>
    <se-label as="a">
      Tag
      <i class="close icon"></i>
    </se-label>
    <se-label detail="214">Dogs</se-label>
    <se-label as="a">
      <se-image src="static/user.png" avatar spaced />
      Elliot
    </se-label>
    <se-label pointing="top" color="red" basic>Pointing</se-label>
  </div>
</template>

<script>
import SeLabel from './elements/Label/SeLabel.vue'
import SeImage from './elements/Image/SeImage.vue'

export default {
  name: 'App',
  components: {
    SeLabel,
    SeImage
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
