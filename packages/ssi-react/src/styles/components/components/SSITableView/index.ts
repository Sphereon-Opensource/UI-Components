import styled from 'styled-components'
import {backgroundColors, borderColors, fontColors} from "@sphereon/ui-components.core";

export const SSITableViewContainerStyled = styled.div`
  background-color: ${backgroundColors.lightGrey};
  display: flex;
  flex-grow: 1;
  flex-direction: column
`

export const SSITableViewLabelCellStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const SSITableViewTableContainerStyled = styled.table`
  user-select: text;
  width: fit-content;
  border-collapse: collapse;
`

export const SSITableViewRowContainerStyled = styled.tr`
  border-bottom: 1px solid ${borderColors.lightGrey};
`

export const SSITableViewCellContainerStyled = styled.td`
  color: ${fontColors.dark};
  background-color: ${backgroundColors.primaryLight};
  padding: 20px 16px 20px 16px;
  text-align: left;
`

export const SSITableViewHeaderCellContainerStyled = styled.th`
  position: relative;
  padding: 20px 16px 20px 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: ${backgroundColors.primaryLight};
  color: ${fontColors.lightGrey};
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
