import {FC, ReactElement} from 'react'
import {backgroundColors, gradientColors, LabelType} from '@sphereon/ui-components.core'
import {SSITypeLabelContainerStyled as Container} from '../../../styles'

type Props = {
  type: LabelType
}

const getBackground = (type: LabelType): string => {
  switch (type) {
    case LabelType.ISSUER:
      return gradientColors['200']
    case LabelType.VERIFIER:
      return gradientColors['100']
    default:
      return backgroundColors.primaryLight
  }
}

const SSITypeLabel: FC<Props> = (props: Props): ReactElement => {
  const {type} = props
  return <Container style={{background: getBackground(type)}}>{type}</Container>
}

export default SSITypeLabel
