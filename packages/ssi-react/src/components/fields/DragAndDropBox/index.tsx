import React, {ChangeEvent, DragEvent, ReactElement, useRef} from 'react'
import {
  DragAndDropBoxContainerStyled as Container,
  DragAndDropBoxHiddenInputStyled as HiddenInput,
  DragAndDropBoxCaptionContainerStyled as CaptionContainer,
  SSITextH2DarkStyled as Caption,
  DragAndDropBoxDescriptionStyled as Description,
} from '../../../styles/index.js'

type Props = {
  caption: string
  description?: string
  onChangeFile: (file: File) => Promise<void>
}

const DragAndDropBox: React.FC<Props> = (props: Props): ReactElement => {
  const {caption, description, onChangeFile} = props
  const inputFile = useRef<HTMLInputElement | null>(null)

  const onSelect = async (): Promise<void> => {
    inputFile.current?.click()
  }

  const onChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    // FIXME add support for multiple files
    const file: File | undefined = event.target.files?.[0]
    if (file) {
      await onChangeFile(file)
    }
  }

  const onDrop = async (event: DragEvent<HTMLDivElement>): Promise<void> => {
    event.preventDefault()
    const file: File = event.dataTransfer.files[0]
    const reader: FileReader = new FileReader()
    reader.onload = async (): Promise<void> => {
      await onChangeFile(file)
    }

    reader.readAsText(file)
  }

  const onDragOver = async (event: DragEvent<HTMLDivElement>): Promise<void> => {
    event.preventDefault()
  }

  return (
    <Container onClick={onSelect} onDrop={onDrop} onDragOver={onDragOver}>
      <HiddenInput ref={inputFile} type="file" onChange={onChange} />
      <CaptionContainer>
        <Caption>{caption}</Caption>
        <Description>{description}</Description>
      </CaptionContainer>
    </Container>
  )
}

export default DragAndDropBox
