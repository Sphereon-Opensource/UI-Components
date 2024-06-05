import React, {FC, ReactElement, SyntheticEvent, useState} from 'react';
import {Autocomplete, AutocompleteRenderInputParams, AutocompleteValue, TextField} from '@mui/material';
import {Localization} from '@sphereon/ui-components.core';
import FileSelection from '../../fields/FileSelection';
import DragAndDropBox from '../../fields/DragAndDropBox';
import {
    CredentialIssuanceWizardViewContainerStyled as Container,
    CredentialIssuanceWizardViewCredentialTypeContainerStyled as CredentialTypeContainer,
    CredentialIssuanceWizardViewCredentialTypeTitleStyled as CredentialTypeTitle,
    CredentialIssuanceWizardViewFormContainerStyled as FormContainer,
    CredentialIssuanceWizardViewEvidenceContainerStyled as EvidenceContainer,
    CredentialIssuanceWizardViewEvidenceContentContainerStyled as EvidenceContentContainer,
    CredentialIssuanceWizardViewEvidenceTitleContainerStyled as EvidenceTitleContainer,
    SSITextH2SemiBoldStyled as EvidenceTitle,
    CredentialIssuanceWizardViewEvidenceTitleOptionalStyled as EvidenceTitleOptional,
    SSITextH2Styled as EvidenceDescription,
    CredentialIssuanceWizardViewEvidenceFilesContainerStyled as EvidenceFilesContainer
} from '../../../styles';

import {CredentialFormData, JSONFormState, CredentialFormSelectionType} from '../../../types';
import FormView from "../FormView";

type Props = {
    credentialTypes: Array<CredentialFormSelectionType>
    onSelectCredentialTypeChange?: (credentialType: CredentialFormSelectionType) => Promise<void>
    onCredentialFormDataChange?: (credentialFormData: CredentialFormData) => Promise<void>
    credentialData?: Record<any, any>
}

const CredentialIssuanceWizardView: FC<Props> = (props: Props): ReactElement => {
    const { credentialData, credentialTypes, onSelectCredentialTypeChange, onCredentialFormDataChange } = props
    const [selectedCredentialType, setSelectedCredentialType] = useState<CredentialFormSelectionType | null>(null);
    const [credentialInput, setCredentialInput] = useState<JSONFormState | null>(null);
    const [evidence, setEvidence] = useState<Array<File>>([]);

    const onCredentialTypeChange = (event: SyntheticEvent, value: AutocompleteValue<any, any, any, any>): void => {
        setCredentialInput(null)
        setEvidence([]);
        setSelectedCredentialType(value);
        onSelectCredentialTypeChange?.(value)
    };

    const onCredentialFormInputChange = async (state: JSONFormState): Promise<void> => {
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
                        {(selectedCredentialType.schema && selectedCredentialType.uiSchema) &&
                            <FormView
                                schema={selectedCredentialType.schema}
                                uiSchema={selectedCredentialType.uiSchema}
                                data={credentialData}
                                onFormStateChange={onCredentialFormInputChange}
                            />
                        }
                    </FormContainer>
                    <EvidenceContainer>
                        <EvidenceContentContainer>
                            <div>
                                <EvidenceTitleContainer>
                                    <EvidenceTitle>{Localization.translate('credential_issuance_wizard_evidence_title')}</EvidenceTitle>
                                    <EvidenceTitleOptional>{Localization.translate('optional_label')}</EvidenceTitleOptional>
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
