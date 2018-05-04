<template>
  <div id="app">
    <se-input v-model="inputData" name="test" placeholder-text="test" type="text" />
    {{inputData}}
    <se-input name="actiontest" placeholder-text="action test" type="text" action>
      <se-button slot="rightAction">Search</se-button>
    </se-input>
  </div>
</template>

<script>
import SeInput from './elements/Input/SeInput.js'
import SeButton from './elements/Button/SeButton'

export default {
  name: 'App',
  data () {
    return {
      inputData: ''
    }
  },
  components: {
    SeInput,
    SeButton
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
