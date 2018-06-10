<template>
  <thead :class="classObject">
    <th v-for="(head,idx) in headers" :key="idx">{{head}}</th>
  </thead>
</template>

<script>
export default {
  name: 'se-table-header',
  props: {
    fullWidth: Boolean,
    headers: Array
  },

  computed: {
    classObject () {
      return {
        'full-width': this.fullWidth
      }
    }
  }
}
</script>
