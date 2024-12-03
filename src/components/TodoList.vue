<script setup>
import { ref } from "vue"
import { uid } from "uid"
import TodoCreator from './TodoCreator.vue'
import TodoItem from './TodoItem.vue'

const todoList = ref([])

const fetchTodoList = () => {
  const savedTodoList = JSON.parse(localStorage.getItem("todoList"))
  if (savedTodoList) {
    todoList.value = savedTodoList
  }
}
fetchTodoList()
// localStorage.clear();

const setTodoListLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList.value))
}

const addTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: false,
    isEditing: false,
  })
  setTodoListLocalStorage()
}

const toggleCompleted = (todo) => {
  const updatedTodoList = todoList.value.map(t =>
    t.id === todo.id
      ? { ...todo, isCompleted: !todo.isCompleted }
      : t
  )
  todoList.value = updatedTodoList
  setTodoListLocalStorage()
}

const deleteTodo = (todo) => {
  const updatedTodoList = todoList.value.filter(t => t.id != todo.id)
  todoList.value = updatedTodoList
  setTodoListLocalStorage()
}

const toggleEditing = (todo) => {
  const updatedTodoList = todoList.value.map(t =>
    t.id === todo.id
      ? { ...todo, isEditing: !todo.isEditing }
      : t
  )
  todoList.value = updatedTodoList
  setTodoListLocalStorage()
}


</script>

<template>
  <div>
  

  <div class="center">
    <TodoCreator 
    @add-todo="addTodo"
    />

    <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"
    @toggle-completed="toggleCompleted"
    @delete-todo="deleteTodo"
    @edit-todo="toggleEditing"/> 
    
  </div>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem 0 0;
}
header {
  line-height: 3;
  display: flex;
  place-items: center;
  justify-content: center;
}
.center {
  width: 28rem;
  margin: auto;
  padding: 10px;
  margin-top: 2rem;
}
</style>
