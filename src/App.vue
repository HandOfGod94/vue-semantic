<template>
  <div id="app">
    <se-table :table-data="dataToShow" />
  </div>
</template>

<script>
import SeTable from './collection/SeTable/SeTable'

export default {
  name: 'App',
  data () {
    return {
      dataToShow: [
        {
          name: 'Gahan',
          age: '22',
          company: 'JDA'
        },
        {
          name: 'Rakholia',
          age: '22',
          company: 'jda'
        }
      ]
    }
  },

  components: {
    SeTable
  }
}

</script>

<style lang="postcss">
@import 'semantic-ui-css/semantic.css';
</style>
