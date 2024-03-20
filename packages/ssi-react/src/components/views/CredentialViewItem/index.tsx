import {CSSProperties, FC, ReactElement} from 'react'
import {CredentialStatus, Localization, toLocalDateString, toLocalDateTimeString} from '@sphereon/ui-components.core'
import SSIStatusLabel from '../../labels/SSIStatusLabel'
import {
    CredentialViewItemContainerStyled as Container,
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
    style?: CSSProperties
}

const CredentialViewItem: FC<Props> = (props: Props): ReactElement => {
    const {
        credentialStatus,
        credentialTitle,
        issuerName,
        showTime = false,
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
        </Container>
    )
}

export default CredentialViewItem
