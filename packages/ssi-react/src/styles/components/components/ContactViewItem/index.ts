import styled from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers';
import {SSITextH5Styled} from '../../../fonts';

export const ContactViewItemContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  padding: 16px 24px 18px 7px;
`;

export const ContactViewItemNewStatusContainerStyled = styled.div`
  height: 10px;
  width: 17px;
  margin: auto 0;
`;

export const ContactViewItemLogoContainerStyled = styled.div`
  width: 78px;
  margin: 2.5px 4px 2.5px 0;
  align-items: center;
  justify-content: center;
`;

export const ContactViewItemContactDetailsContainerStyled = styled.div`
  margin-bottom: 6px;
`;

// TODO we need to have a color here and not use opacity for colors
// opacity: 0.8;
// TODO move color
export const ContactViewItemContactUriCaptionStyled = styled(SSITextH5Styled)`
  color: #4F4F4F;
`;
