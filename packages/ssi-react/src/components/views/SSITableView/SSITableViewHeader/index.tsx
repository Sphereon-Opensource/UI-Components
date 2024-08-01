import {ButtonIcon, Localization, statusColors} from '@sphereon/ui-components.core'
import React, {ReactElement} from 'react'
import IconButton from '../../../buttons/IconButton'
import DropDownList from '../../../lists/DropDownList'
import PrimaryButton from '../../../buttons/PrimaryButton'
import {
  SSITableViewHeaderActionsContainerStyled as ActionsContainer,
  SSITableViewHeaderContainerStyled as Container,
  SSITableViewHeaderContentContainerStyled as ContentContainer,
  SSITextH3Styled as FilterCaption,
  SSITableViewHeaderFilterContainerStyled as FilterContainer,
  SSITableViewHeaderShowOptionContainerStyled as ShowOptionContainer,
  TableViewHeaderStaticActionsContainerStyled as StaticActionsContainer,
} from '../../../../styles'
import {Button} from '../../../../types'

type Props = {
  enableFiltering?: boolean
  enableMostRecent?: boolean
  actions?: Array<Button>
  onDelete?: () => Promise<void>
}

const SSITableViewHeader: React.FC<Props> = (props: Props): ReactElement => {
  const {enableFiltering = false, enableMostRecent = false, actions = [], onDelete} = props

  const onDeleteClick = async (): Promise<void> => {
    await onDelete?.()
  }

  return (
    <Container>
      <StaticActionsContainer>
        {onDelete && (
          <IconButton
            caption={Localization.translate('action_delete_label')}
            icon={ButtonIcon.DELETE}
            iconColor={statusColors.error}
            onClick={onDeleteClick}
          />
        )}
      </StaticActionsContainer>
      <ContentContainer style={{width: 'fit-content'}}>
        <ActionsContainer>
          {enableFiltering && (
            <FilterContainer>
              <IconButton icon={ButtonIcon.FILTER} onClick={async (): Promise<void> => console.log('add filter clicked')} />
              <FilterCaption>{Localization.translate('action_filter_caption')}</FilterCaption>
            </FilterContainer>
          )}
          {/*{enableMostRecent && (
            <ShowOptionContainer>
              <DropDownList label={Localization.translate('action_show_caption')} initialValue={'Most recent'} />
            </ShowOptionContainer>
          )}*/}
          {actions.map((action: Button, index: number) => (
            <PrimaryButton key={index} caption={action.caption} onClick={action.onClick} icon={action.icon} />
          ))}
        </ActionsContainer>
      </ContentContainer>
    </Container>
  )
}

export default SSITableViewHeader
