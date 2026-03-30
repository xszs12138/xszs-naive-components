<script setup lang="ts">
import type { XFormSchema } from './types'
import { NCheckbox, NCheckboxGroup, NDatePicker, NFormItem, NInput, NInputNumber, NRadio, NRadioGroup, NRate, NSelect, NTimePicker, NTreeSelect } from 'naive-ui'
import { onMounted } from 'vue'

const props = defineProps<{
  schema: XFormSchema
}>()
const model = defineModel<Record<string, any>>('model', { required: true })

onMounted(() => {
  const defaultValue = (props.schema.options as any)?.defaultValue
  if (defaultValue !== undefined) {
    model.value[props.schema.prop] = defaultValue
  }
})
</script>

<template>
  <NFormItem v-bind="schema">
    <NInput
      v-if="schema.type === 'input'" v-model:value="model[schema.prop]" :placeholder="`请输入${schema.label}`"
      v-bind="schema.options"
    />
    <NSelect
      v-if="schema.type === 'select'" v-model:value="model[schema.prop]" :placeholder="`请选择${schema.label}`"
      v-bind="schema.options"
    />
    <NRadio
      v-if="schema.type === 'radio'" v-model:value="model[schema.prop]" :placeholder="`请选择${schema.label}`"
      v-bind="schema.options"
    />
    <NRadioGroup
      v-if="schema.type === 'radioGroup'" v-model:value="model[schema.prop]"
      :placeholder="`请选择${schema.label}`" v-bind="schema.options"
    >
      <NRadio v-for="item in schema.options!.selectOptions" :key="item.label" v-bind="item" />
    </NRadioGroup>
    <NCheckbox
      v-if="schema.type === 'checkbox'" v-model:value="model[schema.prop]" :placeholder="`请选择${schema.label}`"
      v-bind="schema.options"
    />
    <NDatePicker
      v-if="schema.type === 'datePicker'" v-model:value="model[schema.prop]"
      :placeholder="`请选择${schema.label}`" v-bind="schema.options"
    />
    <NTimePicker
      v-if="schema.type === 'timePicker'" v-model:value="model[schema.prop]"
      :placeholder="`请选择${schema.label}`" v-bind="schema.options"
    />
    <NTreeSelect
      v-if="schema.type === 'treeSelect'" v-model:value="model[schema.prop]"
      :placeholder="`请选择${schema.label}`" v-bind="schema.options"
    />
    <NInputNumber
      v-if="schema.type === 'number'" v-model:value="model[schema.prop]" :placeholder="`请输入${schema.label}`"
      v-bind="schema.options"
    />

    <NCheckboxGroup
      v-if="schema.type === 'checkboxGroup'" v-model:value="model[schema.prop]"
      :placeholder="`请选择${schema.label}`" v-bind="schema.options"
    >
      <NCheckbox v-for="item in schema.options!.selectOptions" :key="item.value" v-bind="item" />
    </NCheckboxGroup>
    <NRate v-if="schema.type === 'rate'" v-model:value="model[schema.prop]" v-bind="schema.options" />
  </NFormItem>
</template>
