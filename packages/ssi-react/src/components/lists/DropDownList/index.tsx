import React, {FC} from 'react'

import {SSIDropDownListContainerStyled as Container} from '../../../styles/components'
import {GeneralButton} from '../../../types'
import DropDownListItem from '../DropDownListItem'

export type Props = {
  buttons: Array<GeneralButton>
}

const DropDownList: FC<Props> = (props: Props): JSX.Element => {
  const getItems = () => {
    const {buttons} = props
    return buttons.map((item: GeneralButton, index: number) => {
      const showBorder = buttons.length > 1 && index !== buttons.length - 1
      return (
        <DropDownListItem
          key={index}
          showBorder={showBorder}
          caption={item.caption}
          onClick={item.onClick}
          icon={item.icon}
          fontColor={item.fontColor}
        />
      )
    })
  }

  return <Container>{getItems()}</Container>
}

export default DropDownList
