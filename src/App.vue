<template>
  <div id="app">
    <se-button as="div" label-position="left">
      <se-label slot="label" basic>2048</se-label>
      <se-button as="div" icon="heart">Like</se-button>
    </se-button>
    <se-button color="primary">Primary</se-button>
    <se-button color="secondary">Secondary</se-button>
    <se-button color="orange">Orange</se-button>
    <se-button-group icon>
      <se-button icon="align left" />
      <se-button icon="align center" />
      <se-button icon="align right" />
      <se-button icon="align justify" />
    </se-button-group>
  </div>
</template>

<script>
import SeButton from './elements/Button/SeButton'
import SeButtonGroup from './elements/Button/SeButtonGroup'
import SeLabel from './elements/Label/SeLabel.vue'

export default {
  name: 'App',
  components: {
    SeButton,
    SeButtonGroup,
    SeLabel
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
