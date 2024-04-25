import React, {FC, ReactElement, useState} from 'react'
import {and, isObjectControl, optionIs, RankedTester, rankWith} from '@jsonforms/core'
import {withJsonFormsControlProps} from '@jsonforms/react'
import {Localization, parseBase64Uri} from '@sphereon/ui-components.core'
import DragAndDropBox from '../../DragAndDropBox/index.js'
import PersonPlaceholder from '../../../assets/placeholders/PersonPlaceholder/index.js'
import FileSelection from '../../FileSelection/index.js'
import {base64UriToFile} from '../../../../utils/index.js'
import {
  PassportPhotoControlContainerStyled as Container,
  PassportPhotoControlDragAndDropBoxContainerStyled as DragAndDropBoxContainer,
  PassportPhotoControlPassportPhotoContainerStyled as PassportPhotoContainer,
  PassportPhotoControlPassportPhotoImageStyled as PassportPhotoImage,
} from '../../../../styles/index.js'
import {FileSelectionFieldType, PassportPhoto, PassportPhotoControlData} from '../../../../types/index.js'

type Props = {
  data: PassportPhotoControlData
  handleChange(path: string, value: any): void
  path: string
}

const PassportPhotoControl: FC<Props> = (props: Props): ReactElement => {
  const {data, handleChange, path} = props
  const [image, setImage] = useState<PassportPhoto | undefined>(
    data && {file: base64UriToFile(data.base64Uri, data.fileName, data.mimeType), base64Uri: data.base64Uri},
  )

  const onAddImage = async (file: File): Promise<void> => {
    const reader = new FileReader()
    reader.onload = (): void => {
      const result = reader.result
      if (typeof result === 'string') {
        const parsedBase64Uri = parseBase64Uri(result)
        setImage({file, base64Uri: result})
        handleChange(path, {fileName: file.name, mimeType: parsedBase64Uri.mimeType, base64Uri: result})
      }
    }
    reader.readAsDataURL(file)
  }

  const onRemoveImage = async (): Promise<void> => {
    setImage(undefined)
    handleChange(path, undefined)
  }

  return (
    <Container>
      <DragAndDropBoxContainer>
        <DragAndDropBox
          caption={Localization.translate('drag_and_drop_upload_image_caption')}
          description={Localization.translate('credential_attach_image_description')}
          onChangeFile={onAddImage}
        />
        <PassportPhotoContainer>
          {image ? <PassportPhotoImage src={image.base64Uri} alt={Localization.translate('passport_photo_alt')} /> : <PersonPlaceholder />}
        </PassportPhotoContainer>
      </DragAndDropBoxContainer>
      {image && <FileSelection file={image.file} fileType={FileSelectionFieldType.IMAGE} onRemove={onRemoveImage} />}
    </Container>
  )
}

export const passportPhotoControlTester: RankedTester = rankWith(3, and(isObjectControl, optionIs('type', 'passportPhoto')))

export default withJsonFormsControlProps(PassportPhotoControl)
