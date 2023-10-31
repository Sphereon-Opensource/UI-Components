export type ToastConfigParams<Props> = {
  title?: string
  message?: string
  onClick?: () => Promise<void>
  props?: Props
}
