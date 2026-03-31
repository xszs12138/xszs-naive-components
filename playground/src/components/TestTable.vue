<script setup lang="ts">
import { dealSpanMethod, useTable } from '@xszs/naive-components'
import { data } from './mock/data'

function rowSpanBySlot(row: TransactionRecord) {
  return dealSpanMethod(row, data, ['infoDate', 'infoTime'])
}

interface TransactionRecord {
  applyDate: string
  createdAt: number
  customerId: number
  customerName: string
  days: number
  id: number
  infoDate: string
  infoTime: string
  loss: number
  periodSelfDealAmount: number
  periodSelfDealFee: number
  periodSelfDealPrice: number
  totalAmount: number
  totalFee: number
  totalLoss: number
  totalTradeRole: number
  tradeRole: number
  transactionName: string
  updatedAt: number
  weightedPrice: number | null
}

const Table = useTable({
  data,
  rowKey: row => row.id,
  columns: [
    {
      title: '交易单元',
      key: 'customerName',
    },
    {
      title: '标的日期',
      key: 'infoDate',
      rowSpan: rowSpanBySlot,
    },
    {
      title: '时段',
      key: 'infoTime',
      rowSpan: rowSpanBySlot,
      render: row => `${Number.parseInt(row.infoTime.split(':')[0], 10)}时段`,
    },
    {
      title: '买卖方向（汇总）',
      key: 'totalTradeRole',
      rowSpan: row => dealSpanMethod(row, data, ['infoDate', 'infoTime', 'totalTradeRole']),
      render: row => (row.totalTradeRole === 1 ? '买' : '卖'),
    },
    {
      title: '加权均价',
      key: 'weightedPrice',
      rowSpan: rowSpanBySlot,
      render: row => (row.weightedPrice == null ? '' : String(row.weightedPrice)),
    },
    {
      title: '成交电量',
      key: 'totalAmount',
      rowSpan: rowSpanBySlot,
    },
    {
      title: '交易电费',
      key: 'totalFee',
      rowSpan: rowSpanBySlot,
    },
    {
      title: '分时交易损益',
      key: 'totalLoss',
      rowSpan: rowSpanBySlot,
    },
    {
      title: '申报日期',
      key: 'applyDate',
      rowSpan: () => 1,
    },
    {
      title: '类型',
      key: 'days',
      render: row => `D + ${row.days}`,
      rowSpan: () => 1,
    },
    {
      title: '买卖方向',
      key: 'tradeRole',
      render: row => (row.tradeRole === 1 ? '买' : '卖'),
      rowSpan: () => 1,
    },
  ],
}, {
  useLocalPageNation: true,
})
</script>

<template>
  <Table />
</template>
