import {FC, ReactElement} from 'react'
import {
    SSIHoverTextTextStyled as Text,
    SSIHoverTextContainerStyled as Container,
    SSIHoverTextTextHoverStyled as TextHover
} from '../../../styles/components'

export type Props = {
    text: string
    truncationLength?: number
    enableHover?: boolean
}

const SSIHoverText: FC<Props> = (props: Props): ReactElement => {
    const {text, truncationLength, enableHover = false} = props
    const value = truncationLength ? text.substring(0, truncationLength) : text
    return (
            <Container>
                <Text>{value}</Text>
                {enableHover &&
                    <TextHover>{text}</TextHover>
                }
            </Container>
    )
}

export default SSIHoverText
