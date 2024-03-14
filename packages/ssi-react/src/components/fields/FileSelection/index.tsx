import React, {CSSProperties, ReactElement} from 'react'
import { getFileSizeDisplay, Localization } from '@sphereon/ui-components.core';
import ComboBox from '../ComboBox';
import DocumentIcon from '../../assets/icons/DocumentIcon';
import ImageIcon from '../../assets/icons/ImageIcon';
import CrossIcon from '../../assets/icons/CrossIcon';
import {
  FileSelectionFieldContainerStyled as Container,
  FileSelectionFieldContentContainerStyled as ContentContainer,
  FileSelectionFieldRemoveContainerStyled as RemoveContainer,
  FileSelectionFieldRemoveButtonStyled as RemoveButton,
  FileSelectionFieldRemoveButtonCircleIconStyled as RemoveButtonCircleIcon,
  FileSelectionFieldIconContainerStyled as IconContainer,
  FileSelectionFieldFileDataContainerStyled as FileDataContainer,
  FileSelectionFieldFileNameCaptionStyled as FileNameCaption,
  FileSelectionFieldFileSizeCaptionStyled as FileSizeCaption,
  FileSelectionFieldPermissionSelectionContainerStyled as PermissionSelectionContainer
} from '../../../styles';
import {AssetFilePermission, FileSelectionFieldType, ValueSelection} from '../../../types'


type Props = {
  file: File
  fileType?: FileSelectionFieldType
  permission?: AssetFilePermission
  onPermissionChange?: (permission: AssetFilePermission) => Promise<void>
  onRemove?: () => Promise<void>
  style?: CSSProperties
}

const filePermissions: Array<ValueSelection> = [
  {label: Localization.translate('file_permission_public_label'), value: 'public'},
  {label: Localization.translate('file_permission_private_label'), value: 'private'},
]

const FileSelection: React.FC<Props> = (props: Props): ReactElement => {
  const {
    file,
    fileType = FileSelectionFieldType.FILE,
    permission,
    onPermissionChange,
    onRemove,
    style
  } = props

  const onChange = async (selection: ValueSelection): Promise<void> => {
    if (onPermissionChange) {
      await onPermissionChange(selection.value as AssetFilePermission)
    }
  }

  return (
    <Container style={style}>
      <ContentContainer>
        <IconContainer>
          { getIcon(fileType) }
        </IconContainer>
        <FileDataContainer>
          <FileNameCaption>{file.name}</FileNameCaption>
          {file.size && <FileSizeCaption>{getFileSizeDisplay(file.size)}</FileSizeCaption>}
        </FileDataContainer>
        {permission && (
            <PermissionSelectionContainer>
              <ComboBox<ValueSelection>
                  style={{width: 152, marginLeft: 'auto'}}
                  defaultValue={filePermissions.find((selection: ValueSelection): boolean => selection.value === permission)}
                  onChange={onChange}
                  options={filePermissions}
              />
            </PermissionSelectionContainer>
        )}
      </ContentContainer>
      { onRemove &&
          <RemoveContainer>
            <RemoveButton onClick={onRemove}>
              <RemoveButtonCircleIcon>
                  <CrossIcon size={10}/>
              </RemoveButtonCircleIcon>
            </RemoveButton>
          </RemoveContainer>
      }
    </Container>
  )
}

const getIcon = (fileType: FileSelectionFieldType): ReactElement => {
  switch(fileType) {
    case FileSelectionFieldType.FILE:
      return <DocumentIcon/>
    case FileSelectionFieldType.IMAGE:
      return <ImageIcon/>
    default:
      return <div/>
  }
}

export default FileSelection
