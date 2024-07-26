<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
};
</script>

<template>
  <div class="space-y-2">
    <TodoItem v-for="todo in $store.state.todos" :key="todo" :todo="todo" />
  </div>
</template>
