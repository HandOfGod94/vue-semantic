<template>
  <div id="app">
    <se-button icon="cloud" />
    <se-button label="Pause" icon="pause" />
    <se-button label="Next" label-position="right" icon="right arrow" />
    <se-button as="div" label-position="left">
      <se-label slot="label" basic>2048</se-label>
      <se-button as="div" icon="heart">Like</se-button>
    </se-button>
    <se-button-group icon>
      <se-button icon="align left" />
      <se-button icon="align center" />
      <se-button icon="align right" />
      <se-button icon="align justify" />
    </se-button-group>
    <se-button-group icon>
      <se-button icon="bold"/>
      <se-button icon="underline" />
      <se-button icon="text width" />
    </se-button-group>
  </div>
</template>

<script>
import SeLabel from './elements/Label/SeLabel.vue'
import SeButton from './elements/Button/SeButton'
import SeButtonGroup from './elements/Button/SeButtonGroup'

export default {
  name: 'App',
  components: {
    SeLabel,
    SeButton,
    SeButtonGroup
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
