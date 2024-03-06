import React, {FC, ReactElement, useState} from 'react';
import {
    and,
    isObjectControl,
    optionIs,
    RankedTester,
    rankWith,
} from '@jsonforms/core';
import { withJsonFormsControlProps } from '@jsonforms/react';
import { base64toFile, Localization } from '@sphereon/ui-components.core';
import DragAndDropBox from '../../DragAndDropBox';
import PersonPlaceholder from '../../../assets/placeholders/PersonPlaceholder';
import FileSelection from '../../FileSelection';
import {
    PassportPhotoControlContainerStyled as Container,
    PassportPhotoControlDragAndDropBoxContainerStyled as DragAndDropBoxContainer,
    PassportPhotoControlPassportPhotoContainerStyled as PassportPhotoContainer,
    PassportPhotoControlPassportPhotoImageStyled as PassportPhotoImage
} from '../../../../styles';
import {FileSelectionFieldType, PassportPhoto, PassportPhotoControlData} from '../../../../types';

type Props = {
    data: PassportPhotoControlData
    handleChange(path: string, value: any): void
    path: string
}

const PassportPhotoControl: FC<Props> = (props: Props): ReactElement => {
    const { data, handleChange, path } = props
    const [image, setImage] = useState<PassportPhoto | undefined>(data && { file: base64toFile(data.base64, data.fileName, data.mimeType), base64: data.base64 });

    const onAddImage = async (file: File): Promise<void> => {
        const reader = new FileReader();
        reader.onload = (): void => {
            const result = reader.result;
            if (typeof result === 'string') {
                const base64Parts = result.split(';base64,');
                const mimeType = base64Parts[0].replace("data:", "")
                setImage({ file, base64: result })
                handleChange(path, { fileName: file.name, mimeType, base64: result})
            }
        };
        reader.readAsDataURL(file);
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
                    { image
                        ? <PassportPhotoImage src={image.base64} alt={Localization.translate('passport_photo_alt')} />
                        : <PersonPlaceholder/>
                    }
                </PassportPhotoContainer>
            </DragAndDropBoxContainer>
            { image &&
                <FileSelection
                    file={image.file}
                    fileType={FileSelectionFieldType.IMAGE}
                    onRemove={onRemoveImage}
                />
            }
        </Container>
    )
}

export const passportPhotoControlTester: RankedTester = rankWith(
    3,
    and(
        isObjectControl,
        optionIs('type', 'passportPhoto')
    )
);

export default withJsonFormsControlProps(PassportPhotoControl);
