/// <reference types="@mui/system" /> // Do not remove as it will trigger: error TS2742: The inferred type of 'PaginationContainerStyled' cannot be named without a reference
/// <reference types="@emotion/styled" /> // Do not remove as it will trigger: error TS2742: The inferred type of 'PaginationContainerStyled' cannot be named without a reference
import {styled} from '@mui/material/styles'
import {Pagination, paginationItemClasses} from '@mui/material'
import {backgroundColors, borderColors, elementColors, fontColors} from '@sphereon/ui-components.core'

export const PaginationContainerStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 16px;
`

export const GoToInputStyled = styled('input')`
  height: 28px;
  width: 44px;
  background-color: ${backgroundColors.primaryLight};
  outline: none;
  color: ${fontColors.dark};
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  border: 1px ${borderColors.lightGrey} solid;
  text-align: center;
  &:focus {
    border: 1px ${elementColors.purple} solid;
  }
`

export const GoToInputContainer = styled('div')`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
`

export const PaginationStyled = styled(Pagination)`
  & .${paginationItemClasses.root} {
    color: ${fontColors.dark};
    background-color: ${backgroundColors.primaryLight};
    border: 1px ${borderColors.lightGrey} solid;
    border-radius: 6px;
    font-size: 14px;
    min-width: 32px;
    min-height: 32px;
    width: 32px;
    height: 32px;
    &:hover {
      background-color: ${backgroundColors.primaryLight};
    },
  }

  & .${paginationItemClasses.selected} {
    background-color: transparent !important;
    border: 1px ${elementColors.purple} solid;
    color: ${elementColors.purple};
  },

  & .${paginationItemClasses.previousNext} {
    color: ${borderColors.lightGrey};
  },

  & .${paginationItemClasses.disabled} {
    color: ${borderColors.lightGrey};
    background-color: ${backgroundColors.lightGrey};
  },

  & .${paginationItemClasses.ellipsis} {
    font-size: 20px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
