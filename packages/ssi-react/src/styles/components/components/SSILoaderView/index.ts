import {elements} from "@sphereon/ui-components.core";
import styled from "styled-components";
import {SSITextH2SemiBoldLightStyled} from "../../fonts";
import {Oval} from "react-loader-spinner";

export const SSILoadingScreenActivityIndicatorContainerStyled = styled.div`
  margin-top: 282px;
`;

export const SSILoadingScreenActivityCaptionStyled = styled(SSITextH2SemiBoldLightStyled)`
  margin-top: 69px;
`;

export const SSILoadingScreenActivityIndicatorStyled = styled(Oval).attrs({
  ariaLabel: 'oval-loader',
  wrapperStyle: {}
})``;