<template>
  <thead :class="classObject">
    <slot>
      <th v-for="(head,idx) in headers" :key="idx">{{head}}</th>
    </slot>
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
