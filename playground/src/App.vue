<script setup lang="ts">
import type { XFormSchema } from '@xszs/naive-components'
import { useTable, XForm } from '@xszs/naive-components'
import { NConfigProvider, NTag } from 'naive-ui'

// interface RowData {
//   key: number
//   name: string
//   age: number
//   address: string
//   anotherAddress: string
// }
const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`,
}))
const Table = useTable({
  data,
  columns: [
    {
      title: 'Name',
      key: 'name',
      rowSpan(rowData, rowIndex) {
        console.log(rowData, rowIndex)
        return 1
      },
    },
    {
      title: 'Age',
      key: 'age',
      rowSpan(rowData, rowIndex) {
        const count = data.filter(item => item.age === rowData.age).length
        console.log(count)

        return count
      },
    },
    {
      title: 'Address',
      key: 'address',
    },
  ],
}, {
  useLocalPageNation: true,
})

const schema: XFormSchema[] = [
  {
    label: '姓名',
    prop: 'name',
    type: 'input',
    options: {
      defaultValue: '张三',
      placeholder: '请输入姓名',
    },
  },
  {
    label: '性别',
    prop: 'gender',
    type: 'select',
    options: {
      multiple: true,
      defaultValue: ['male'],
      options: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
        { label: '其他', value: 'other' },
      ],
    },
  },
  {
    label: '年龄',
    prop: 'age',
    type: 'number',
    options: {
    },
  },
  {
    label: '选项组',
    prop: 'test',
    type: 'checkboxGroup',
    options: {
      defaultValue: [1],
      selectOptions: [
        {
          label: '123',
          value: 1,
        },
        {
          label: '1x23',
          value: 2,
        },
        {
          label: '1sad23',
          value: 3,
        },
        {
          label: '1hsjadh23',
          value: 4,
        },
      ],
    },
  },
  {
    label: '选项组2',
    prop: 'test2',
    type: 'radioGroup',
    options: {
      defaultValue: 1,
      selectOptions: [
        {
          label: '123',
          value: 1,
        },
        {
          label: '1x23',
          value: 2,
        },
        {
          label: '1sad23',
          value: 3,
        },
        {
          label: '1hsjadh23',
          value: 4,
        },
      ],
    },
  },
  {
    label: '平分',
    prop: 'test3',
    type: 'rate',
    options: {
      defaultValue: 0,
      count: 5,
      allowHalf: true,
    },
  },
]
const model = ref<Record<string, any>>({})

function handleSubmit() {
  console.log(model.value)
}
</script>

<template>
  <NConfigProvider>
    <XForm :schema="schema" :model="model" />
    <button @click="handleSubmit">
      提交
    </button>
    <Table />
  </NConfigProvider>
</template>
