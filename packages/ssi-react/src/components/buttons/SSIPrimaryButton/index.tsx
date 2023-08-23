import {fontColors} from '@sphereon/ui-components.core'
import {FC, ReactElement} from 'react'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import {SSIPrimaryButtonContainerStyled as Container, SSIPrimaryButtonCaptionStyled as Caption} from '../../../styles/components'

export type Props = {
  caption: string
  onClick: () => Promise<void>
  icon?: string // TODO enum
  disabled?: boolean // TODO implement
}

const SSIPrimaryButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, icon, onClick} = props

  return (
    <Container onClick={onClick}>
      {icon && <SSIAddIcon color={fontColors.light} />}
      <Caption>{caption}</Caption>
    </Container>
  )
}

export default SSIPrimaryButton
