import styled from 'styled-components'
import {SSIFlexDirectionColumnViewStyled, SSIFlexDirectionRowViewStyled} from '../../containers/index.js'
import {SSITextH3Styled, SSITextH5Styled} from '../../../fonts/index.js'

// TODO use this version as the template for the port for the mobile version
// FIXME when we port the mobile version look at how to handle the padding as this is in conflict with the web version
export const CredentialViewItemContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  padding: 18px 24px;
  gap: 8px;
  align-items: center;
`

// FIXME using min-width, but we should use max-width with flex, but for some reason it does not want to fill the available space that way
export const CredentialViewItemDetailsContainerStyled = styled(SSIFlexDirectionColumnViewStyled)`
  gap: 6px;
  min-width: 245px;
`

export const CredentialViewItemTitleCaptionStyled = styled(SSITextH3Styled)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
`

export const CredentialViewItemStatusContainerStyled = styled.div`
  margin-top: 3px;
  margin-left: auto;
  padding-left: 9px;
`

export const CredentialViewItemExpirationDateCaptionStyled = styled(SSITextH5Styled)`
  margin-left: auto;
`
