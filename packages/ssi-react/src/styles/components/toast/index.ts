import { createGlobalStyle } from 'styled-components'

export const HideToastDefaultIcons = createGlobalStyle`
  .Toastify__toast-icon {
      display: none !important;
  }
  .Toastify__toast--success .Toastify__toast-body::before {
    background-image: none !important;
  }

  .Toastify__toast--error .Toastify__toast-body::before {
    background-image: none !important;
  }

  .Toastify__toast--warning .Toastify__toast-body::before {
    background-image: none !important;
  }

  .Toastify__toast--info .Toastify__toast-body::before {
    background-image: none !important;
  }
`;