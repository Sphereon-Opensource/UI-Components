export type ProgressIndicatorStep = {
  title?: string
  description?: string
}

export enum StepStatus {
  CURRENT = 'current',
  COMPLETED = 'completed',
  NEXT = 'next',
}
