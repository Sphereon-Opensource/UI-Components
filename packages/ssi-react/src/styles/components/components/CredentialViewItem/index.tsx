import styled from 'styled-components'
import {SSIFlexDirectionColumnViewStyled} from '../../containers'
import {SSITextH3Styled, SSITextH5Styled} from '../../../fonts'

// TODO use this version as the template for the port for the mobile version

// FIXME when we port the mobile version look at how to handle the padding as this is in conflict with the web version
export const CredentialViewItemContainerStyled = styled(SSIFlexDirectionColumnViewStyled)`
  gap: 6px;
`

export const CredentialViewItemTitleCaptionStyled = styled(SSITextH3Styled)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
`;

export const CredentialViewItemStatusContainerStyled = styled.div`
  margin-top: 3px;
  margin-left: auto;
  padding-left: 9px;
`;

export const CredentialViewItemExpirationDateCaptionStyled = styled(SSITextH5Styled)`
  margin-left: auto;
`;
