<script setup>
defineProps({
  header: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1 class="header">{{ header }}</h1>
  </div>
</template>

<style scoped>
.header {
  text-decoration: none;
  color: #34495e;
  padding: 3px;
  font-weight: 500;
  font-size: 2.8rrem;
}
</style>
