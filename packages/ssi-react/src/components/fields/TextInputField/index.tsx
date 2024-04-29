import React, {ChangeEvent, CSSProperties, FC, ReactElement, useState} from 'react'
import {
  TextFieldInputContainerStyled as Container,
  TextFieldInputInputStyled as Input,
  SSITextH2Styled as Label
} from '../../../styles'

type Props = {
  initialValue?: string
  value?: string
  onChangeValue?: (value: string) => Promise<void>
  placeholder?: string
  maxLength?: number
  label?: string
  style?: CSSProperties
}

const TextInputField: FC<Props> = (props: Props): ReactElement => {
  const {
    initialValue,
    label,
    placeholder,
    maxLength,
    onChangeValue,
    style,
  } = props
  const [value, setValue] = React.useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const onChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setValue(event.target.value);
    await onChangeValue?.(event.target.value)
  }

  const onFocus = (): void => {
    setIsFocused(true)
  };

  const onBlur = (): void => {
    setIsFocused(false)
  };

  return (
    <Container style={{...style}}>
      {label &&
          <Label>{label}</Label>
      }
      <Input
        onChange={onChange}
        value={value}
        placeholder={isFocused ? '' : placeholder}
        type={'text'}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
      />
    </Container>
  )
}

export default TextInputField
