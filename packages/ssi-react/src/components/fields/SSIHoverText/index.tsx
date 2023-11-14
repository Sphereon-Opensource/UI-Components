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
  const {text, opts } = props
  const value = opts?.truncationLength ? text.substring(0, opts.truncationLength) : text
  return (
    <Container>
      <Text>{value}</Text>
      {opts?.enableHover && <TextHover>{text}</TextHover>}
    </Container>
  )
}

export default SSIHoverText
