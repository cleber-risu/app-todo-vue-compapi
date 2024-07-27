import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
    storeTodo(state, payload) {
      // state.todos.push(payload);
      state.todos = [payload, ...state.todos];
    },
  },
  getters: {},
  actions: {
    getTodos({ commit }) {
      return axios.get("http://localhost:3000/todos").then((response) => {
        commit("storeTodos", response.data);
      });
    },

    addTodo({ commit }, data) {
      return axios
        .post("http://localhost:3000/todos", data)
        .then((response) => {
          console.log(response.data);
          commit("storeTodo", response.data);
        });
    },
  },
  modules: {},
});
