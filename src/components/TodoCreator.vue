<script setup>
import { ref } from 'vue'
import { notification } from 'ant-design-vue'


const emit = defineEmits(["add-todo"])

let toDo = ref('')

const addTodo = () => {
  if (toDo.value) {
    emit("add-todo", toDo.value)
    toDo.value = ""
  } else {
    notification.error({
      message: 'Error',
      description: 'Please enter a value before submitting.'
    })
  }
}


</script>

<template>
  <div>
    <input
    v-model="toDo"
    @keyup.enter="addTodo()"
    class="input-wrap"
    type="text"
    placeholder="Enter your task"
    />
  </div>
</template>

<style scoped>
.input-wrap {
  color: grey;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 30rem;
  height: 2rem;
  border: 0.08em solid;
  border-radius: 0.2rem;
}
input[type=text]:focus {
  outline: none;
  border: 0.1em solid #34495e;
}


</style>