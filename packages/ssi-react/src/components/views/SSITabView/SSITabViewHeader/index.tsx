import React, {ReactElement} from 'react'
import {TabNavigationState, TabViewRoute} from '../../../../types'
import {
  SSITabViewHeaderContainerStyled as Container,
  SSITabViewHeaderTitleContainerStyled as TitleContainer,
} from "../../../../styles/components";

export type Props = {
  navigationState: TabNavigationState
  onIndexChange: (index: number) => void
}

const SSITabViewHeader: React.FC<Props> = (props: Props): ReactElement => {
  const {navigationState, onIndexChange} = props

  return (
    <Container>
      {navigationState.routes.map((value: TabViewRoute, index: number) => {
        const tabIndex: number = index + 1
        const isActiveTab: boolean = tabIndex === navigationState.index

        return (
          <TitleContainer
            key={tabIndex}
            // TODO move these to the styling component using props
            style={{
              fontWeight: !isActiveTab ? '400' : '600',
              // TODO we need a linear gradient here
              ...(isActiveTab && {borderBottom: '2px solid #7276F7', alignSelf: 'stretch'}),
            }}
            onClick={() => onIndexChange(tabIndex)}>
            {value.title}
          </TitleContainer>
        )
      })}
    </Container>
  )
}

export default SSITabViewHeader
