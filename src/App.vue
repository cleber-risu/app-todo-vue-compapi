<script>
import TodoSpinner from "./components/TodoSpinner.vue";
import TodoFormAdd from "./components/TodoFormAdd.vue";
import TodoItens from "./components/TodoItens.vue";
import TodoEmpty from "./components/TodoEmpty.vue";

export default {
  name: "App",
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItens,
    TodoEmpty,
  },
  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.$store.dispatch("getTodos").finally(() => {
      this.loading = false;
    });
  },
};
</script>

<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner v-if="loading" />
      <template v-else>
        <TodoFormAdd />

        <TodoItens />

        <TodoEmpty />
      </template>
    </div>
  </div>
</template>
