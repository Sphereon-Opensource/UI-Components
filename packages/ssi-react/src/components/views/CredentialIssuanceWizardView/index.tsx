import React, {FC, ReactElement, SyntheticEvent, useState} from 'react';
import {Autocomplete, AutocompleteRenderInputParams, AutocompleteValue, TextField} from '@mui/material';
import {materialCells} from '@jsonforms/material-renderers';
import {JsonForms} from '@jsonforms/react';
import {Localization} from '@sphereon/ui-components.core';
import FileSelection from '../../fields/FileSelection';
import DragAndDropBox from '../../fields/DragAndDropBox';
import {jsonFormsMaterialRenderers} from '../../../renders/jsonFormsRenders';
import {
    CredentialIssuanceWizardViewContainerStyled as Container,
    CredentialIssuanceWizardViewCredentialTypeContainerStyled as CredentialTypeContainer,
    CredentialIssuanceWizardViewCredentialTypeTitleStyled as CredentialTypeTitle,
    CredentialIssuanceWizardViewFormContainerStyled as FormContainer,
    CredentialIssuanceWizardViewEvidenceContainerStyled as EvidenceContainer,
    CredentialIssuanceWizardViewEvidenceContentContainerStyled as EvidenceContentContainer,
    CredentialIssuanceWizardViewEvidenceTitleContainerStyled as EvidenceTitleContainer,
    SSITextH2SemiBoldDarkStyled as EvidenceTitle,
    CredentialIssuanceWizardViewEvidenceTitleOptionalStyled as EvidenceTitleOptional,
    SSITextH2DarkStyled as EvidenceDescription,
    CredentialIssuanceWizardViewEvidenceFilesContainerStyled as EvidenceFilesContainer
} from '../../../styles';

import {CredentialFormData, CredentialFormInput, CredentialFormSelectionType} from '../../../types';

type Props = {
    credentialTypes: Array<CredentialFormSelectionType>
    onSelectCredentialTypeChange?: (credentialType: CredentialFormSelectionType) => Promise<void>
    onCredentialFormDataChange?: (credentialFormData: CredentialFormData) => Promise<void>
    credentialData?: Record<any, any>
}

const CredentialIssuanceWizardView: FC<Props> = (props: Props): ReactElement => {
    const { credentialData, credentialTypes, onSelectCredentialTypeChange, onCredentialFormDataChange } = props
    const [selectedCredentialType, setSelectedCredentialType] = useState<CredentialFormSelectionType | null>(null);
    const [credentialInput, setCredentialInput] = useState<CredentialFormInput | null>(null); // TODO rename
    const [evidence, setEvidence] = useState<Array<File>>([]);

    const onCredentialTypeChange = (event: SyntheticEvent, value: AutocompleteValue<any, any, any, any>): void => {
        setCredentialInput(null)
        setEvidence([]);
        setSelectedCredentialType(value);
        onSelectCredentialTypeChange?.(value)
    };

    const onCredentialFormInputChange = (state: CredentialFormInput): void => {
        setCredentialInput(state)
        onCredentialFormDataChange?.({ ...state, evidence })
    };

    const onAddEvidence = async (file: File): Promise<void> => {
        // Cloning array to force rerender
        const evidenceFiles = [...evidence, file]
        setEvidence(evidenceFiles)
        onCredentialFormDataChange?.({ ...credentialInput, evidence: evidenceFiles })
    }

    const onRemoveEvidence = async (index: number): Promise<void> => {
        evidence.splice(index, 1)
        // Cloning array to force rerender
        const evidenceFiles = [...evidence]
        setEvidence(evidenceFiles)
        onCredentialFormDataChange?.({ ...credentialInput, evidence: evidenceFiles })
    }

    const getEvidenceElements = (): Array<ReactElement> => {
        return evidence.map((file: File, index: number) =>
            <FileSelection
                key={index}
                file={file}
                onRemove={async (): Promise<void> => onRemoveEvidence(index)}
            />
        )
    }

    return (
        <Container>
            <CredentialTypeContainer>
                <CredentialTypeTitle>{Localization.translate('credential_issuance_wizard_title')}</CredentialTypeTitle>
                <Autocomplete
                    options={credentialTypes}
                    sx={{ flexGrow: 1 }}
                    renderInput={(params: AutocompleteRenderInputParams) =>
                        <TextField
                            {...params}
                            label={Localization.translate('credential_issuance_wizard_credential_type_label')}
                        />
                    }
                    onChange={onCredentialTypeChange}
                />
            </CredentialTypeContainer>
            {selectedCredentialType &&
                <>
                    <FormContainer>
                        <JsonForms
                            schema={selectedCredentialType.schema}
                            uischema={selectedCredentialType.uiSchema}
                            data={credentialData}
                            renderers={jsonFormsMaterialRenderers}
                            cells={materialCells}
                            onChange={onCredentialFormInputChange}
                        />
                    </FormContainer>
                    <EvidenceContainer>
                        <EvidenceContentContainer>
                            <div>
                                <EvidenceTitleContainer>
                                    <EvidenceTitle>{Localization.translate('credential_issuance_wizard_evidence_title')}</EvidenceTitle>
                                    <EvidenceTitleOptional>{Localization.translate('credential_issuance_wizard_evidence_optional_title')}</EvidenceTitleOptional>
                                </EvidenceTitleContainer>
                                <EvidenceDescription>{Localization.translate('credential_issuance_wizard_evidence_description')}</EvidenceDescription>
                            </div>
                            <EvidenceFilesContainer>
                                <DragAndDropBox
                                    caption={Localization.translate('drag_and_drop_upload_evidence_caption')}
                                    description={Localization.translate('credential_attach_evidence_description')}
                                    onChangeFile={onAddEvidence}
                                />
                                { getEvidenceElements() }
                            </EvidenceFilesContainer>
                        </EvidenceContentContainer>
                    </EvidenceContainer>
                </>
            }
        </Container>
    )
}

export default CredentialIssuanceWizardView;
