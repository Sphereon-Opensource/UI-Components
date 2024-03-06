import styled from 'styled-components'
import {backgroundColors, borderColors, fontColors} from '@sphereon/ui-components.core'
import {SSITextH2Css, SSITextH3Css} from '../../../css'

export const SSITableViewContainerStyled = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export const SSITableViewLabelCellStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const SSITableViewTableContainerStyled = styled.table`
  user-select: text;
  width: 100%;
  border-collapse: collapse;
  background-color: ${backgroundColors.lightGrey};
`

export const SSITableViewRowContainerStyled = styled.tr`
  border-bottom: 1px solid ${borderColors.lightGrey};
  background-color: ${backgroundColors.primaryLight};

  &:hover {
    background-color: #ECECEC;
  }
`

export const SSITableViewCellContainerStyled = styled.td`
  ${SSITextH3Css};
  color: ${fontColors.dark};
  padding: 20px 16px 20px 16px;
  text-align: left;
  //setting border-box makes padding be included in the width, otherwise content-box is used and then padding is excluded from the width
  box-sizing: border-box;
`

export const SSITableViewHeaderCellContainerStyled = styled.th`
  ${SSITextH2Css};
  position: relative;
  padding: 20px 16px 20px 16px;
  background-color: ${backgroundColors.primaryLight};
  color: ${fontColors.lightGrey};
  text-align: left;
  //setting border-box makes padding be included in the width, otherwise content-box is used and then padding is excluded from the width
  box-sizing: border-box;
`

export const SSITableViewResultCountCaptionStyled = styled.div`
  ${SSITextH3Css};
  margin-left: 24px;
`

export const TableViewRowSelectionCheckboxContainerStyled = styled.div`
  width: 20px; 
  height: 20px;
`

// TODO implement the resizer for column resizing
// .resizer {
//     position: absolute;
//     right: 0;
//     top: 0;
//     height: 100%;
//     width: 5px;
//     cursor: col-resize;
//     user-select: none;
//     touch-action: none;
//     background-color: blueviolet;
// }
//
// .resizer.isResizing {
//     background: blueviolet;
//     opacity: 1;
// }
//
// @media (hover: hover) {
// .resizer {
//         opacity: 0;
//     }
//
// *:hover > .resizer {
//         opacity: 1;
//     }
// }
