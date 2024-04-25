import React, {FC, ReactElement, useEffect} from 'react';
import {JSONTree, LabelRenderer} from 'react-json-tree';
import {
    backgroundColors,
    calculateAspectRatio,
    fontColors,
    ImageAttributes,
    isBase64ImageUri,
    isBoolean,
    Localization,
    parseToBoolean
} from '@sphereon/ui-components.core';
import SSICheckmarkBadge from '../../assets/badges/SSICheckmarkBadge';
import SSIExclamationMarkBadge from '../../assets/badges/SSIExclamationMarkBadge';
import {getImageSize} from '../../../utils';
import {
    JSONDataViewContainerStyled as Container,
    JSONDataViewHeaderContainerStyled as HeaderContainer,
    JSONDataViewColumnHeaderCaptionStyled as ColumnHeaderCaption,
    JSONDataViewDataContainerCaptionStyled as ContainerCaption,
    JSONDataViewDataImageValueStyled as ImageValue,
    JSONDataViewDataTextValueStyled as TextValue,
    JSONDataViewDataLabelStyled as Label
} from '../../../styles';

// This component is still an early WIP. But for now it was mentioned not to focus on it too much

type Props = {
    data: Record<string, any>
    showHeader?: boolean
    shouldExpandNodeInitially?: (() => boolean) | boolean
}

const JSONDataView: FC<Props> = (props: Props): ReactElement => {
    const {
        showHeader = true,
        shouldExpandNodeInitially = () => false
    } = props
    const expandNodeInitially = typeof shouldExpandNodeInitially === 'function' ? shouldExpandNodeInitially : () => shouldExpandNodeInitially
    const [focused, setFocused] = React.useState<boolean>(false)
    const [data, setData] = React.useState<Record<string, any> | undefined>()

    const preprocessData = async (data: Record<string, any>): Promise<Record<string, any>> => {
        if (typeof data !== 'object' || data === null) {
            return data;
        }

        const processedData: Record<string, any> = {};
        await Promise.all(Object.entries(data).map(async ([key, value]: [string, any]): Promise<void> => {
            if (typeof value === 'object' && value !== null) {
                processedData[key] = await preprocessData(value);
            } else if (typeof value === 'string' && isBase64ImageUri(value)) {
                const base64Uri = value;
                const dimensions = await getImageSize(base64Uri);

                processedData[key] = {
                    uri: base64Uri,
                    dimensions: {
                        height: dimensions.height,
                        width: dimensions.width,
                        aspectRatio: calculateAspectRatio(dimensions.width, dimensions.height)
                    }
                };
            } else {
                processedData[key] = value;
            }
        }));

        return processedData;
    };

    useEffect((): void => {
        preprocessData(props.data).then((data: Record<string, any>) => setData(data))
    }, [props.data]);

    const getItemString = (): null => {
        return null
    }

    const valueRenderer = (valueAsString: unknown, value: unknown): ReactElement => {
        if (isBoolean(value)) {
            return parseToBoolean(value) ? <SSICheckmarkBadge/> : <SSIExclamationMarkBadge/>
        }

        if (typeof value === 'object'
            && value !== null
            && 'uri' in value
        ) {
            const imageData = value as ImageAttributes
            return <ImageValue
                style={{
                    aspectRatio: imageData.dimensions?.aspectRatio,
                    backgroundImage: `url(${imageData.uri})`,
                }}
            />
        }

        return <TextValue>{value?.toString()}</TextValue>
    }


    const labelRenderer: LabelRenderer = ([key]): ReactElement => {
        return <Label>{key}</Label>;
    };

    const isCustomNode = (value: unknown): boolean => {
        // returning custom node here for images as we need the object to be considered as 1 value, so we can render it as an image
        return typeof value === 'object' && value !== null && 'uri' in value && 'dimensions' in value
    }

    return (
        <Container>
            { showHeader &&
                <HeaderContainer>
                    <ColumnHeaderCaption>{Localization.translate('json_data_view_attribute_column_label')}</ColumnHeaderCaption>
                    <ColumnHeaderCaption>{Localization.translate('json_data_view_value_column_label')}</ColumnHeaderCaption>
                </HeaderContainer>
            }
            <ContainerCaption
                 onMouseEnter={() => setFocused(true)}
                 onMouseLeave={() => setFocused(false)}
            >
                { data &&
                    <JSONTree
                        theme={{
                            base0D: fontColors.dark,
                            tree: {
                                margin: 0,
                                backgroundColor: backgroundColors.primaryLight,
                            },
                            arrowContainer: {
                                paddingRight: 6,
                            },
                            arrow: {
                                fontSize: 10,
                                ...(!focused && {display: 'none'}),
                            },
                        }}
                        hideRoot
                        shouldExpandNodeInitially={expandNodeInitially}
                        getItemString={getItemString}
                        labelRenderer={labelRenderer}
                        valueRenderer={valueRenderer}
                        isCustomNode={isCustomNode}
                        data={data}
                    />
                }
            </ContainerCaption>
        </Container>
    )
}

export default JSONDataView
