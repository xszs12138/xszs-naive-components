import type { CheckboxGroupProps, CheckboxProps, DatePickerProps, FormItemProps, InputNumberProps, InputProps, RadioGroupProps, RadioProps, RateProps, SelectProps, SwitchProps, TimePickerProps, TreeSelectProps } from 'naive-ui'

export type XFormSchema = Partial<FormItemProps> & { column?: number, prop: string, label: string } & (
  | { type: 'input', options?: Partial<InputProps> }
  | { type: 'number', options?: Partial<InputNumberProps> }
  | { type: 'select', options?: Partial<SelectProps> }
  | { type: 'radio', options?: Partial<RadioProps> }
  | { type: 'radioGroup', options?: Partial<RadioGroupProps> & { selectOptions: RadioProps[] } }
  | { type: 'switch', options?: Partial<SwitchProps> }
  | { type: 'checkbox', options?: Partial<CheckboxProps> }
  | { type: 'checkboxGroup', options?: Partial<CheckboxGroupProps> & { selectOptions: CheckboxProps[] } }
  | { type: 'datePicker', options?: Partial<DatePickerProps> }
  | { type: 'timePicker', options?: Partial<TimePickerProps> }
  | { type: 'treeSelect', options?: Partial<TreeSelectProps> }
  | { type: 'rate', options?: Partial<RateProps> }
)
