import {ComponentType} from 'react'

export type TabRoute = {
  key: string
  title: string
}

export type TabViewRoute = TabRoute & {
  content: ComponentType<unknown>
}

export type TabNavigationState = {
  index: number
  routes: Array<TabViewRoute>
}
