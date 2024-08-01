export type ProgressIndicatorStep = {
  title?: string
  description?: string
  required?: boolean
}

export enum StepStatus {
  CURRENT = 'current',
  COMPLETED = 'completed',
  NEXT = 'next',
}
