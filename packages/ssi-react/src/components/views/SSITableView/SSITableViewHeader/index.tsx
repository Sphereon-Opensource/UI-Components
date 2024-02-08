import {ButtonIcon, Localization} from '@sphereon/ui-components.core'
import React, {ReactElement} from 'react'
import SSIIconButton from '../../../buttons/SSIIconButton'
import DropDownList from '../../../lists/DropDownList'
import SSIPrimaryButton from '../../../buttons/SSIPrimaryButton'
import {
  SSITableViewHeaderActionsContainerStyled as ActionsContainer,
  SSITableViewHeaderContainerStyled as Container,
  SSITableViewHeaderContentContainerStyled as ContentContainer,
  SSITextH3Styled as FilterCaption,
  SSITableViewHeaderFilterContainerStyled as FilterContainer,
  SSITableViewHeaderShowOptionContainerStyled as ShowOptionContainer,
} from '../../../../styles'
import {Button} from '../../../../types'

type Props = {
  enableFiltering?: boolean
  enableMostRecent?: boolean
  actions?: Array<Button>
}

const SSITableViewHeader: React.FC<Props> = (props: Props): ReactElement => {
  const {enableFiltering = false, enableMostRecent = false, actions = []} = props

  return (
    <Container>
      <ContentContainer>
        <ActionsContainer>
          {enableFiltering && (
            <FilterContainer>
              <SSIIconButton icon={ButtonIcon.FILTER} onClick={async (): Promise<void> => console.log('add filter clicked')} />
              <FilterCaption>{Localization.translate('action_filter_caption')}</FilterCaption>
            </FilterContainer>
          )}
          //todo: revisit this part when we have the most recent functionality
          {/*{enableMostRecent && (
            <ShowOptionContainer>
              <DropDownList label={Localization.translate('action_show_caption')} initialValue={'Most recent'} />
            </ShowOptionContainer>
          )}*/}
          {actions.map((action: Button, index: number) => (
            <SSIPrimaryButton key={index} caption={action.caption} onClick={action.onClick} icon={action.icon} />
          ))}
        </ActionsContainer>
      </ContentContainer>
    </Container>
  )
}

export default SSITableViewHeader
