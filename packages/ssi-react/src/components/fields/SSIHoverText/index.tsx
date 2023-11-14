import {FC, ReactElement} from 'react'
import {
  SSIHoverTextTextStyled as Text,
  SSIHoverTextContainerStyled as Container,
  SSIHoverTextTextHoverStyled as TextHover,
} from '../../../styles/components'
import {ColumnHeaderTextOptions} from '../../../types'

export type Props = {
  text: string
  opts?: ColumnHeaderTextOptions
}

const SSIHoverText: FC<Props> = (props: Props): ReactElement => {
  const {text, opts= {}} = props
  const {truncationLength, enableHover = false} = opts
  const value = truncationLength ? text.substring(0, truncationLength) : text
  return (
    <Container>
      <Text>{value}</Text>
      {enableHover && <TextHover>{text}</TextHover>}
    </Container>
  )
}

export default SSIHoverText
