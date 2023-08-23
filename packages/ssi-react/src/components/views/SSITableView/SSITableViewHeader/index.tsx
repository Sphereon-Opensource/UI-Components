import {Localization} from '@sphereon/ui-components.core'
import React, {ReactElement} from 'react'
import SSIIconButton from '../../../buttons/SSIIconButton'
import {Button, ButtonIconsEnum} from '../../../../types'
import SSIDropDownList from '../../../lists/SSIDropDownList'
import SSIPrimaryButton from '../../../buttons/SSIPrimaryButton'
import {
  SSITableViewHeaderActionsContainerStyled as ActionsContainer,
  SSITableViewHeaderContainerStyled as Container,
  SSITableViewHeaderContentContainerStyled as ContentContainer,
  SSITableViewHeaderFilterCaptionStyled as FilterCaption,
  SSITableViewHeaderFilterContainerStyled as FilterContainer,
  SSITableViewHeaderShowOptionContainerStyled as ShowOptionContainer,
} from '../../../../styles/components'

export type Props = {
  enableFiltering?: boolean
  actions?: Array<Button>
}

const SSITableViewHeader: React.FC<Props> = (props: Props): ReactElement => {
  const {enableFiltering = false, actions = []} = props

  return (
    <Container>
      <ContentContainer>
        <ActionsContainer>
          {enableFiltering && (
            <FilterContainer>
              <SSIIconButton icon={ButtonIconsEnum.FILTER} onClick={async (): Promise<void> => console.log('add filter clicked')} />
              <FilterCaption>{Localization.translate('action_filter_caption')}</FilterCaption>
            </FilterContainer>
          )}
          <ShowOptionContainer>
            <SSIDropDownList label={Localization.translate('action_show_caption')} initialValue={'Most recent'} />
          </ShowOptionContainer>
          {actions.map((action: Button, index: number) => (
            <SSIPrimaryButton key={index} caption={action.caption} onClick={action.onClick} icon={action.icon} />
          ))}
        </ActionsContainer>
      </ContentContainer>
    </Container>
  )
}

export default SSITableViewHeader
