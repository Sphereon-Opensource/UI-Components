import React, {CSSProperties, ReactElement} from 'react'
import CreatableSelect from 'react-select/creatable'
import {CSSObjectWithLabel} from 'react-select'
import {backgroundColors, fontColors} from '@sphereon/ui-components.core'

type ComboBoxOption = {
  label: string
  value: any
}

type Props<T extends ComboBoxOption> = {
  onChange?: (value: T) => Promise<void>
  noOptionsMessage?: string
  placeholder?: string
  defaultValue?: T
  value?: T
  inlineOption?: InlineOption
  options: Array<T>
  style?: CSSProperties
}

type InlineOption = {
  caption: string
  onCreate: (name: string) => Promise<void>
}

const ComboBox = <T extends ComboBoxOption>(props: Props<T>): ReactElement => {
  const {
      onChange,
      noOptionsMessage,
      placeholder,
      defaultValue,
      inlineOption,
      options = []
  } = props
  const [value, setValue] = React.useState<T | undefined>(props.value)

  const creatableProps = inlineOption
    ? {
        allowCreateWhileLoading: true,
        isValidNewOption: () => true,
        onCreateOption: inlineOption.onCreate,
        createOptionPosition: 'last' as const,
        formatCreateLabel: () => `${inlineOption.caption}`,
      }
    : {}

  const onValueChange = async (newValue: any): Promise<void> => {
      setValue(newValue)
      await onChange?.(newValue)
  }

  return (
    <CreatableSelect
      // do not remove, fixes the issue when component is in a container with overflow: hidden. menuPortalTarget accepts an HTML-element and renders the menu into that element.
      menuPortalTarget={document.querySelector('body')}
      styles={{
        control: (provided: CSSObjectWithLabel, state: any) => ({
          ...provided,
          maxWidth: 455,
          borderColor: state.isFocused ? '#7276F7' : provided.borderColor,
          '&:hover': {
            borderColor: '#7276F7',
          },
          boxShadow: 'none',
          height: 48,
          backgroundColor: backgroundColors.primaryLight,
        }),
        menu: (provided: CSSObjectWithLabel) => ({
          ...provided,
          maxWidth: 455,
          zIndex: 999, // Ensuring the dropdown menu has a higher z-index
        }),
        option: (provided: CSSObjectWithLabel, state) => ({
          ...provided,
          color: 'rgba(17, 17, 19, 0.60)',
          backgroundColor: state.isSelected ? '#7B61FF' : state.isFocused ? '#B7B8D9' : backgroundColors.primaryLight,
          '&:hover': {
            backgroundColor: '#B7B8D9',
          },
        }),
        singleValue: (provided: CSSObjectWithLabel) => ({
          ...provided,
          color: fontColors.dark,
        }),
      }}
      defaultValue={defaultValue}
      onChange={onValueChange}
      value={value}
      options={options}
      placeholder={placeholder}
      noOptionsMessage={noOptionsMessage ? (): string => noOptionsMessage : undefined}
      maxMenuHeight={210}
      {...creatableProps}
    />
  )
}

export default ComboBox
