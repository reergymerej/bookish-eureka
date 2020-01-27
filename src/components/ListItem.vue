<template>
  <li v-on:click="handleClick">
    <span
      v-if="done"
      class="done">
      {{ text }}
    </span>
    <span
      v-if="!done"
      >
      {{ text }}
    </span>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: [
    'id',
    'text',
    'done',
  ],
  methods: {
    handleClick: function() {
      this.$emit('toggle-done', this.id)
    },
  },
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
