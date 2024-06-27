import styled from 'styled-components'
import {SSITextH1Styled, SSITextH2Styled, SSITextH3Styled, SSITextH4Styled} from '../../../fonts'

export const InformationRequestViewContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;
`

export const InformationRequestViewContentContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-right: auto;
`

export const InformationRequestViewHeaderContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const InformationRequestViewPurposeContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fafafa;`

export const InformationRequestViewTitleStyled = styled(SSITextH1Styled)`
    text-align: left;
    font-weight: bold;
`

export const InformationRequestViewParagraphStyled = styled(SSITextH2Styled)`
    text-align: left;
    font-weight: bold;
`
export const InformationRequestViewDescriptionStyled = styled(SSITextH3Styled)`
    text-align: left;
    font-weight: normal;
`

export const InformationRequestViewFormContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fafafa;
`

export const InformationRequestViewFormTitleStyled = styled(SSITextH2Styled)`
    text-align: left;
`

export const InformationRequestViewFormDetailsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const InformationRequestViewLogoContainerStyled = styled.div`
  margin: 0 12px 0 9px;
`

export const InformationRequestViewRPCardContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
`;


export const InformationRequestViewCardTextContainer = styled.div`
  flex-grow: 1;
`;

export const InformationRequestViewCardTitle = styled(SSITextH4Styled)`
  font-weight: bold;
`;

export const InformationRequestViewCardSubtitle = styled(SSITextH4Styled)`
  font-weight: normal;
  color: #555;
`;
