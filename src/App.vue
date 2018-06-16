<template>
  <div id="app">
    <se-container>
      <se-table celled structured>
        <se-table-header>
          <tr>
            <th rowspan="2">Name</th>
            <th rowspan="2">Types</th>
            <th rowspan="2">Files</th>
            <th colspan="3">Languages</th>
          </tr>
          <tr>
            <th>Ruby</th>
            <th>Python</th>
            <th>JS</th>
          </tr>
        </se-table-header>
        <se-table-row>
          <se-table-cell>Alpha Team</se-table-cell>
          <se-table-cell>Project 1</se-table-cell>
          <se-table-cell align="right">2</se-table-cell>
          <se-table-cell align="center" colspan="2">
            <i class="large green checkmark icon"></i>
          </se-table-cell>
          <se-table-cell />
        </se-table-row>
      </se-table>
    </se-container>
  </div>
</template>

<script>
import SeContainer from './elements/Container/SeContainer'
import SeTable from './collection/Table/SeTable.vue'
import SeTableCell from './collection/Table/SeTableCell.vue'
import SeTableHeader from './collection/Table/SeTableHeader.vue'
import SeTableRow from './collection/Table/SeTableRow.vue'

export default {
  name: 'App',
  components: {
    SeContainer,
    SeTable,
    SeTableCell,
    SeTableHeader,
    SeTableRow
  }
}
</script>

<style lang="postcss">
@import "semantic-ui-css/semantic.css";
</style>
