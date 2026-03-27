<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div>
    <button @click="count++">点击</button>
    {{ count }}
  </div>
</template>
