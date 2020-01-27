<template>
  <div id="todo-list">
    <ul
      v-for="item in items"
      v-bind:key="item.id"
    >
      <ListItem
        v-bind:text="item.text"
        v-bind:done="item.done"
        v-bind:id="item.id"
        v-on:toggle-done="handleToggleDone"
      />
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'TodoList',
  components: {
    ListItem,
  },
  data: function () {
    return {
      items: [
        { id: 0, text: 'foo', done: false },
        { id: 1, text: 'bar', done: true },
        { id: 2, text: 'baz', done: false },
        { id: 3, text: 'quux', done: false },
      ],
    }
  },
  methods: {
    handleToggleDone: function (id) {
      this.items = this.items.map((item) => {
        return item.id === id
          ? {
            ...item,
            done: !item.done,
          }
          : item
      })
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
