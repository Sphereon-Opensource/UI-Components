import React, {ReactElement, ReactNode} from 'react'
import {TabViewRoute} from '@sphereon/ui-components.core'
import SSITabViewHeader from './SSITabViewHeader/index.js'
import {SSITabViewContainerStyled as Container} from '../../../styles/index.js'

type Props = {
  routes: Array<TabViewRoute>
}

type TabProps = {
  children: ReactNode
}

const Tab: React.FC<TabProps> = (props: TabProps) => {
  return <React.Fragment>{props.children}</React.Fragment>
}

const SSITabView: React.FC<Props> = (props: Props): ReactElement => {
  const {routes = []} = props
  const [activeTabIndex, setActiveTabIndex] = React.useState<number>(1)
  const [content, setContent] = React.useState<any>()

  React.useEffect((): void => {
    routes.forEach((route: TabViewRoute, index: number): void => {
      if (index + 1 === activeTabIndex) {
        setContent(route.content)
      }
    })
  }, [routes, activeTabIndex])

  const onTabChange = async (tabIndex: number): Promise<void> => {
    setActiveTabIndex(tabIndex)
  }

  return (
    <Container>
      <SSITabViewHeader
        navigationState={{
          routes: routes,
          index: activeTabIndex,
        }}
        onIndexChange={onTabChange}
      />
      <Tab>{content}</Tab>
    </Container>
  )
}

export default SSITabView
