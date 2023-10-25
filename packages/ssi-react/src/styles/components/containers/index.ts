import styled from 'styled-components'

import {SSIBackgroundPrimaryDarkColorCss, SSIRoundedEdgesCss} from '@sphereon/ui-components.core'

export const SSIFlexDirectionRowViewStyled = styled.div`
  display: flex;
  flex-direction: row;
`

export const SSIFlexDirectionColumnViewStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const SSIAlphaContainerStyled = styled(SSIFlexDirectionColumnViewStyled)`
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.2);
`

export const SSIRoundedContainerStyled = styled.div`
  ${SSIRoundedEdgesCss};
  overflow: hidden;
`

export const SSIBasicContainerStyled = styled.div`
  flex: 1;
  ${SSIBackgroundPrimaryDarkColorCss};
`;

export const SSIBasicHorizontalCenterContainerStyled = styled(SSIBasicContainerStyled)`
  align-items: center;
`;
