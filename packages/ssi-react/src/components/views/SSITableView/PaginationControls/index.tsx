import {CSSProperties, FC, ReactElement} from 'react'
import {PaginationProps, Stack} from '@mui/material'
import {GoToInputContainer, GoToInputStyled, PaginationContainerStyled, PaginationStyled} from '../../../../styles/index.js'
import {Localization} from '@sphereon/ui-components.core'

export type PaginationControlsProps = PaginationProps & {
  goToInputId?: string
  containerStyle?: CSSProperties
}

const PaginationControls: FC<PaginationControlsProps> = (props: PaginationControlsProps): ReactElement => {
  const {onKeyDown, containerStyle, goToInputId = 'goTo'} = props
  return (
    <PaginationContainerStyled style={containerStyle}>
      <Stack>
        <PaginationStyled {...props} />
      </Stack>
      <GoToInputContainer>
        {Localization.translate('table_pagination_input_caption_go_to')}
        <GoToInputStyled id={goToInputId} onKeyDown={onKeyDown} />
        {Localization.translate('table_pagination_input_caption_page')}
      </GoToInputContainer>
    </PaginationContainerStyled>
  )
}

export default PaginationControls
