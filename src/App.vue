<script setup>
import TodoListHeader from './components/TodoListHeader.vue'
import TodoList from './components/TodoList.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="60" height="60" />
    <div>
      <TodoListHeader header="To Do-list" />
    </div>
  </header>
  <main>
    <TodoList />
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem 0 0;
}
header {
  line-height: 1.5;
  display: flex;
  place-items: center;
  justify-content: center;
}
</style>
