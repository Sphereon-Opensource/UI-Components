import React, {FC, ReactElement} from 'react'
import {ToastPosition} from 'react-toastify'
import {SSIToastContainerContainerStyled as Container} from '../../../../styles'

type Props = {
    autoHide?: boolean
    visibilityTimeMs?: number
    position?: ToastPosition
    pauseOnHover?: boolean
}

const SSIToastContainer: FC<Props> = (props: Props): ReactElement => {
    const {
        position = 'top-right',
        autoHide = true,
        visibilityTimeMs = 6000,
        pauseOnHover = true,
    } = props

    return (
        <Container
            position={position}
            autoClose={!autoHide ? autoHide : visibilityTimeMs}
            hideProgressBar
            closeButton={false}
            pauseOnHover={pauseOnHover}
        />
    )
}

export default SSIToastContainer
