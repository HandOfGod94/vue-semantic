<template>
  <div id="app">
    <se-container>
      <se-table :table-data="dataToShow" :table-meta="tableMeta" celled />
    </se-container>
  </div>
</template>

<script>
import SeTable from './collection/Table/SeTable'
import SeContainer from './elements/Container/SeContainer'
import TableMetadata from './meta/TableMetadata'

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
      ],
      tableMeta: new TableMetadata({
        editRule: ({name, company}) => name === 'Rakholia' || company === 'JDA',
        errorRule: ({age}) => age < 24,
        warnRule: ({company}) => company === 'jda'
      })
    }
  },

  components: {
    SeTable,
    SeContainer
  }
}
</script>

<style lang="postcss">
@import "semantic-ui-css/semantic.css";
</style>
