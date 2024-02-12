import {CSSProperties, FC} from 'react'
import {PaginationProps, Stack} from '@mui/material'
import {GoToInputContainer, GoToInputStyled, PaginationContainerStyled, PaginationStyled} from '../../../../styles'

export type PaginationControlsProps = PaginationProps & {
  goToInputId?: string
  containerStyle?: CSSProperties
}

const PaginationControls: FC<PaginationControlsProps> = (props: PaginationControlsProps) => {
  const { onKeyDown, containerStyle, goToInputId = 'goTo' } = props
    return (
        <PaginationContainerStyled style={containerStyle}>
            <Stack>
                <PaginationStyled {...props} />
            </Stack>
            <GoToInputContainer>
                Go to <GoToInputStyled
              id={goToInputId}
              onKeyDown={onKeyDown}
            /> page
            </GoToInputContainer>
        </PaginationContainerStyled>
    )
}

export default PaginationControls
