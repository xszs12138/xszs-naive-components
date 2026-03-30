<script setup lang="ts">
import type { FormProps } from 'naive-ui'
import type { XFormSchema } from '../XFormCollection/types'
import { NForm } from 'naive-ui'
import XFormCollection from '../XFormCollection/index.vue'

withDefaults(defineProps<{
  config?: Partial<FormProps>
  schema: XFormSchema[]
  model: Record<string, any>
}>(), {

})
</script>

<template>
  <NForm :model="model" label-placement="left" v-bind="config">
    <XFormCollection v-for="item in schema" :key="item.prop" :schema="item" :model="model" />
  </NForm>
</template>
