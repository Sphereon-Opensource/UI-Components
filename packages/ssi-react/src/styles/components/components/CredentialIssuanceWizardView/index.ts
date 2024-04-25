import styledComponents from 'styled-components'
import {backgroundColors, borderColors, SSIRoundedEdgesCss} from '@sphereon/ui-components.core'
import {SSITextH1SemiBoldStyled, SSITextH2Styled} from '../../../fonts/index.js'

export const CredentialIssuanceWizardViewContainerStyled = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 560px;
  height: fit-content;
`

export const CredentialIssuanceWizardViewCredentialTypeContainerStyled = styledComponents.div`
  border: 1px solid ${borderColors.lightGrey};
  ${SSIRoundedEdgesCss};
  background-color: ${backgroundColors.primaryLight};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`

export const CredentialIssuanceWizardViewCredentialTypeTitleStyled = styledComponents(SSITextH1SemiBoldStyled)`
  text-align: left;
`

export const CredentialIssuanceWizardViewFormContainerStyled = styledComponents.div`
  flex-grow: 1;
  border: 1px solid ${borderColors.lightGrey};
  background-color: ${backgroundColors.primaryLight};
  ${SSIRoundedEdgesCss};
  padding: 24px;
`

export const CredentialIssuanceWizardViewEvidenceContainerStyled = styledComponents.div`
  flex-grow: 1;
  border: 1px solid ${borderColors.lightGrey};
  background-color: ${backgroundColors.primaryLight};
  ${SSIRoundedEdgesCss};
  padding: 24px;
`

export const CredentialIssuanceWizardViewEvidenceContentContainerStyled = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const CredentialIssuanceWizardViewEvidenceTitleContainerStyled = styledComponents.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`

export const CredentialIssuanceWizardViewEvidenceTitleOptionalStyled = styledComponents(SSITextH2Styled)`
  font-style: italic;
`

export const CredentialIssuanceWizardViewEvidenceFilesContainerStyled = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
