import {FC, ReactElement} from 'react'
import {LabelTypeEnum} from '../../../types'
import {SSITypeLabelContainerStyled as Container} from '../../../styles/components'
import {backgroundColors, gradientColors} from '@sphereon/ui-components.core'

export type Props = {
  type: LabelTypeEnum
}

const getBackground = (type: LabelTypeEnum): string => {
  switch (type) {
    case LabelTypeEnum.ISSUER:
      return gradientColors['200']
    case LabelTypeEnum.VERIFIER:
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
