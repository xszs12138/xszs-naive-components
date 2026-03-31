<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import TestForm from './components/TestForm.vue'
import TestTable from './components/TestTable.vue'

const testComponentsCollection = [
  TestForm,
  TestTable,
]
</script>

<template>
  <NConfigProvider>
    <component :is="component" v-for="component in testComponentsCollection" :key="component.name" />
  </NConfigProvider>
</template>
