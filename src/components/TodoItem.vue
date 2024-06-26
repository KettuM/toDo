<script setup>
import { ref } from 'vue'
import { DeleteOutlined } from "@ant-design/icons-vue"
import { EditOutlined } from "@ant-design/icons-vue"
import { CheckOutlined } from "@ant-design/icons-vue"

defineProps({
  todo: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['toggle-completed', 'delete-todo', 'edit-todo'])

let text = ref('')

const editTodo = (todo) => {
  if (text.value) {
    todo.todo = text
    emit('edit-todo', todo)
  }
  else {
    emit('edit-todo', todo)
  }
}
</script>

<template>
    <div :class="{ completed: todo.isCompleted, editing: todo.isEditing }" class="wrapper">
        <input type="checkbox" :checked="todo.isCompleted" @input="$emit('toggle-completed', todo)" />
        <div class="todo">
            <input v-if="todo.isEditing" v-model="text" type="text" value="todo.todo">
            <span v-else>
                {{ todo.todo }}
            </span>
        </div>
        <div class="actions">
            <CheckOutlined v-if="todo.isEditing" @click="editTodo(todo)" />
            <EditOutlined v-else class="edit" @click="$emit('edit-todo', todo)" />
            <DeleteOutlined v-tooltip.bottom-start="'Delete'" class="trash" @click="$emit('delete-todo', todo)" />
        </div>

    </div>
</template>

<style scoped>
input[type="checkbox"] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    accent-color: #41b080;
}

.completed {
    text-decoration: line-through;
}

.editing {
    color: #41b080;
}

.wrapper {
    width: 26.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.25rem;
}

.wrapper:hover {
    background-color: #fafdfd;
}

.wrapper:hover .actions {
    opacity: 1;
}

.todo {
    width: 22rem;
}

.edit {
    color: #41b080;
    font-size: 1rem;
    margin-left: auto;
}

.trash {
    color: #f95e5e;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    margin-left: auto;
}

.actions {
    opacity: 0;
    transition: 150ms ease-in-out;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
}
</style>