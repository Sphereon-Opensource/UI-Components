import { FC, ReactElement } from 'react'
import { SSIDUUIDText, SSIUUIDContainer, SSIUUIDFullText } from '../../../styles/components/components/SSIUUIDLabel'

export type Props = {
  uuid: string
}

const SSITruncatedUUID: FC<Props> = (props: Props): ReactElement => {
  const {uuid} = props
  const truncatedUUID = uuid.split('-')[0]
  return <SSIUUIDContainer>
    <SSIDUUIDText>{truncatedUUID}</SSIDUUIDText>
    <SSIUUIDFullText>{uuid}</SSIUUIDFullText>
  </SSIUUIDContainer>
}

export default SSITruncatedUUID
