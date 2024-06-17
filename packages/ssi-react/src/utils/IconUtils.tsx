import React, {ReactElement} from 'react'
import {ButtonIcon, fontColors} from '@sphereon/ui-components.core'
import SSIAddIcon from '../components/assets/icons/SSIAddIcon'
import SSIArrowDownIcon from '../components/assets/icons/SSIArrowDownIcon'
import MeatBallsIcon from '../components/assets/icons/MeatBallsIcon'
import CopyIcon from '../components/assets/icons/CopyIcon'
import DeleteIcon from '../components/assets/icons/DeleteIcon'
import SSIFilterIcon from '../components/assets/icons/SSIFilterIcon'
import PencilIcon from '../components/assets/icons/PencilIcon'
import ViewIcon from '../components/assets/icons/ViewIcon'

export const getIcon = (icon: ButtonIcon, color: string = fontColors.dark): ReactElement => {
  switch (icon) {
    case ButtonIcon.ADD:
      return <SSIAddIcon color={color} />
    case ButtonIcon.ARROW_DOWN:
      return <SSIArrowDownIcon color={color} />
    case ButtonIcon.MEATBALLS:
      return <MeatBallsIcon color={color} />
    case ButtonIcon.EDIT:
      return <PencilIcon color={color} />
    case ButtonIcon.COPY:
      return <CopyIcon color={color} />
    case ButtonIcon.DELETE:
      return <DeleteIcon color={color} />
    case ButtonIcon.FILTER:
      return <SSIFilterIcon color={color} />
    case ButtonIcon.VIEW:
      return <ViewIcon color={color} />
    default:
      return <div />
  }
}
