import styled from 'styled-components'
import {backgroundColors, borderColors, SSIRoundedEdgesCss} from "@sphereon/ui-components.core";
import {SSITextH1SemiBoldStyled, SSITextH2Styled} from "../../../fonts";

export const CredentialIssuanceWizardViewContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 560px;
  height: fit-content;
`

export const CredentialIssuanceWizardViewCredentialTypeContainerStyled = styled.div`
  border: 1px solid ${borderColors.lightGrey};
  ${SSIRoundedEdgesCss};
  background-color: ${backgroundColors.primaryLight};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`

export const CredentialIssuanceWizardViewCredentialTypeTitleStyled = styled(SSITextH1SemiBoldStyled)`
  text-align: left;
`

export const CredentialIssuanceWizardViewFormContainerStyled = styled.div`
  flex-grow: 1;
  border: 1px solid ${borderColors.lightGrey};
  background-color: ${backgroundColors.primaryLight};
  ${SSIRoundedEdgesCss};
  padding: 24px;
`

export const CredentialIssuanceWizardViewEvidenceContainerStyled = styled.div`
  flex-grow: 1;
  border: 1px solid ${borderColors.lightGrey};
  background-color: ${backgroundColors.primaryLight};
  ${SSIRoundedEdgesCss};
  padding: 24px;
`

export const CredentialIssuanceWizardViewEvidenceContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const CredentialIssuanceWizardViewEvidenceTitleContainerStyled = styled.div`
  display: flex; 
  flex-direction: row;
  gap: 4px;
`

export const CredentialIssuanceWizardViewEvidenceTitleOptionalStyled = styled(SSITextH2Styled)`
  font-style: italic;
`

export const CredentialIssuanceWizardViewEvidenceFilesContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
