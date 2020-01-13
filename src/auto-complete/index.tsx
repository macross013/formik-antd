import { AutoComplete as $AutoComplete } from 'antd'
import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import { AutoCompleteProps as $AutoCompleteProps } from 'antd/lib/auto-complete'

export type AutoCompleteProps = FormikFieldProps & $AutoCompleteProps

export const AutoComplete = ({
  name,
  validate,
  onChange,
  onBlur,
  ...restProps
}: AutoCompleteProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form }: FieldProps) => (
      <$AutoComplete
        defaultValue={value}
        onChange={(value, option) => {
          form.setFieldValue(name, value != null ? value.valueOf() : value)
          onChange && onChange(value, option)
        }}
        onBlur={(value) => {
          form.setFieldTouched(name)
          onBlur && onBlur(value)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default AutoComplete
