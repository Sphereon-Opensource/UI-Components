import {CSSProperties, FC, ReactElement} from 'react'
import {
    CredentialStatus,
    Localization,
    toLocalDateString,
    toLocalDateTimeString
} from '@sphereon/ui-components.core'
import SSIStatusLabel from '../../labels/SSIStatusLabel'
import CredentialMiniCardView, {CredentialMiniCardViewProps} from '../CredentialMiniCardView';
import {
    CredentialViewItemContainerStyled as Container,
    CredentialViewItemDetailsContainerStyled as DetailsContainer,
    SSIFlexDirectionRowViewStyled as ContentRowContainer,
    CredentialViewItemTitleCaptionStyled as TitleCaption,
    SSITextH4Styled as IssuerCaption,
    CredentialViewItemStatusContainerStyled as StatusContainer,
    SSITextH5Styled as IssueDateCaption,
    CredentialViewItemExpirationDateCaptionStyled as ExpirationDateCaption,
} from '../../../styles';

type Props = {
    credentialTitle: string
    credentialStatus: CredentialStatus
    issuerName: string
    issueDate: number
    expirationDate?: number
    showTime?: boolean
    showCard?: boolean
    credentialBranding?: CredentialMiniCardViewProps
    style?: CSSProperties
}

const CredentialViewItem: FC<Props> = (props: Props): ReactElement => {
    const {
        credentialStatus,
        credentialTitle,
        issuerName,
        showTime = false,
        showCard = true,
        credentialBranding,
        style
    } = props

    const issueDate = showTime ? toLocalDateTimeString(props.issueDate) : toLocalDateString(props.issueDate)
    const expirationDate = props.expirationDate
        ? `${Localization.translate('credentials_view_item_expires_on')} ${showTime 
            ? toLocalDateTimeString(props.expirationDate) 
            : toLocalDateString(props.expirationDate)
        }`
        : Localization.translate('credential_status_never_expires_date_label')

    return (
        <Container style={{...style}}>
            { showCard &&
                <CredentialMiniCardView {...credentialBranding}/>
            }
            <DetailsContainer>
                <ContentRowContainer>
                    <div>
                        <TitleCaption>{credentialTitle}</TitleCaption>
                        <IssuerCaption>{issuerName}</IssuerCaption>
                    </div>
                    <StatusContainer>
                        <SSIStatusLabel status={credentialStatus}/>
                    </StatusContainer>
                </ContentRowContainer>
                <ContentRowContainer>
                    <IssueDateCaption>{issueDate}</IssueDateCaption>
                    <ExpirationDateCaption>{expirationDate}</ExpirationDateCaption>
                </ContentRowContainer>
            </DetailsContainer>
        </Container>
    )
}

export default CredentialViewItem
