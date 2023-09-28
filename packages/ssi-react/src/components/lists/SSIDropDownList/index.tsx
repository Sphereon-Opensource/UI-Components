import React, {FC, ReactElement} from 'react'
import SSIIconButton from '../../buttons/SSIIconButton'
import {ButtonIconsEnum} from '../../../types'
import {
  SSIDropDownListContainerStyled as Container,
  SSITextH3Styled as LabelCaption,
  SSIDropDownListSelectedValueStyled as SelectedValue,
} from '../../../styles/components'

// TODO extend with selectable values and an actual dropdown element

export type Props = {
  initialValue: string
  label?: string
}

const SSIDropDownList: FC<Props> = (props: Props): ReactElement => {
  const {initialValue, label} = props
  const [value, setValue] = React.useState<string>(initialValue)

  return (
    <Container>
      {label && <LabelCaption>{label}</LabelCaption>}
      <SelectedValue>{value}</SelectedValue>
      <SSIIconButton icon={ButtonIconsEnum.ARROW_DOWN} onClick={async (): Promise<void> => console.log('drop down clicked')} />
    </Container>
  )
}

export default SSIDropDownList
