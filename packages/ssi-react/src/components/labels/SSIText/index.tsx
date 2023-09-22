import { FC, ReactElement } from 'react'
import { SSITruncatedTextStyled, SSITruncatedContainerStyled, SSITruncatedFullTextStyled } from '../../../styles/components/components/SSIText'

export type Props = {
  truncationLength?: number
  value: string
}

const SSIText: FC<Props> = (props: Props): ReactElement => {
  const { value, truncationLength } = props;

  if (truncationLength && value.length > truncationLength) {
    const truncatedText = value.substring(0, truncationLength)

    return (
        <SSITruncatedContainerStyled>
          <SSITruncatedTextStyled>{truncatedText}</SSITruncatedTextStyled>
          <SSITruncatedFullTextStyled>{value}</SSITruncatedFullTextStyled>
        </SSITruncatedContainerStyled>
    )
  } else {
    return <p>{value}</p>
  }
}

export default SSIText
