import styled from 'styled-components'
import { Pagination, paginationItemClasses } from '@mui/material';

export const PaginationContainerStyled = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    gap: 32px;
`

export const GoToInputStyled = styled.input`
    height: 28px;
    width: 44px; 
    background-color: #FBFBFB; 
    outline: none;
    color: #303030;
    font-weight: 500;
    font-size: 14px;
    border-radius: 6px;
    border: 1px #C4C5CA solid;
    text-align: center;
    &:focus {
        border: 1px #7276F7 solid;
    }
`

export const GoToInputContainer = styled.div`
    display: inline-flex; 
    gap: 10px; 
    align-items: center;
    font-weight: 500;
    font-size: 14px;
`

export const PaginationStyled = styled(Pagination)`
    & .${paginationItemClasses.root} {
      color: #303030;
      background-color: #FBFBFB;
      border: 1px #C4C5CA solid;
      border-radius: 6px;
      font-size: 14px;
      min-width: 32px;
      min-height: 32px;
      width: 32px;
      height: 32px;
      &:hover {
        background-color: #FBFBFB;
      },
    }

    & .${paginationItemClasses.selected} {
        background-color: #FBFBFB;
        border: 1px #7276F7 solid;
        color: #7276F7;
        &:hover {
            background-color: #FBFBFB;
        }
    },

    & .${paginationItemClasses.previousNext} {
        color: #C4C5CA;
    },

    & .${paginationItemClasses.disabled} {
        color: #C4C5CA;
        background-color: #8D9099;
    },

    & .${paginationItemClasses.ellipsis} {
        user-select: none;
        display: flex;
        align-items: end;
    }
`
