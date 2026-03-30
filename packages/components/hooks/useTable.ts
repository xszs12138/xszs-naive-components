import type { DataTableColumns, DataTableProps, PaginationProps } from 'naive-ui'
import type { DefineComponent, MaybeRef } from 'vue'
import { NDataTable } from 'naive-ui'
import { defineComponent, h, reactive, unref } from 'vue'

type TableOptions<T extends Record<string, unknown> = Record<string, unknown>> = {
  data: MaybeRef<T[]>
  columns: DataTableColumns<T>
} & Partial<Omit<DataTableProps, 'data' | 'columns'>>

interface ToolOptions {
  openEllipsis?: boolean
  useLocalPageNation?: boolean | Pick<PaginationProps, 'page' | 'pageSize' | 'showSizePicker' | 'pageSizes'>
}

export default function useTable<T extends Record<string, unknown> = Record<string, unknown>>(
  options: TableOptions<T>,
  toolOptions?: ToolOptions,
): DefineComponent<DataTableProps> {
  function mergeToolOptions(): ToolOptions {
    const defaultConfig: ToolOptions = {
      openEllipsis: true,
      useLocalPageNation: false,
    }
    return {
      ...defaultConfig,
      ...toolOptions,
    }
  }
  const mergeToolConfig = mergeToolOptions()
  if (mergeToolConfig.openEllipsis) {
    options.columns = options.columns.map(item => ({ ...item, ellipsis: { tooltip: true } }))
  }
  if (mergeToolConfig.useLocalPageNation) {
    if (typeof mergeToolConfig.useLocalPageNation === 'boolean' && mergeToolConfig.useLocalPageNation === true) {
      const pagination = reactive({
        page: 1,
        pageSize: 10,
        showSizePicker: true,
        pageSizes: [10, 20, 50],
        onChange: (page: number) => {
          pagination.page = page
        },
        onUpdatePageSize: (pageSize: number) => {
          pagination.pageSize = pageSize
          pagination.page = 1
        },
      })
      options.pagination = pagination
    }
    else if (typeof mergeToolConfig.useLocalPageNation === 'object') {
      const pagination = reactive({
        page: mergeToolConfig.useLocalPageNation.page,
        pageSize: mergeToolConfig.useLocalPageNation.pageSize,
        showSizePicker: mergeToolConfig.useLocalPageNation.showSizePicker,
        pageSizes: mergeToolConfig.useLocalPageNation.pageSizes,
        onChange: (page: number) => {
          pagination.page = page
        },
        onUpdatePageSize: (pageSize: number) => {
          pagination.pageSize = pageSize
          pagination.page = 1
        },
      })
      options.pagination = pagination
    }
  }
  console.log('===>', options)

  return defineComponent({
    name: 'XTable',
    setup() {
      return () =>
        h(NDataTable, {
          ...options,
          data: unref(options.data),
        })
    },
  })
}
