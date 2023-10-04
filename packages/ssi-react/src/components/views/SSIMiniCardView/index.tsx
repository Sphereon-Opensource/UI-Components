import React, {CSSProperties, FC, ReactElement} from 'react';
import {credentialCardColors, ImageAttributes} from '@sphereon/ui-components.core';
import {SSIMiniCardViewContainerStyled as Container} from '../../../styles/components';
import SSILogo from '../../assets/logos/SSILogo';

type Props = {
    backgroundImage?: ImageAttributes // TODO WAL-302 Support passing in storage location
    backgroundColor?: string;
    logo?: ImageAttributes
    logoColor?: string
    style?: CSSProperties;
}

const SSIMiniCardView: FC<Props> = (props: Props): ReactElement => {
    const {
        backgroundColor = credentialCardColors.default,
        backgroundImage,
        logo,
        logoColor,
        style
    } = props;

    return (
        <Container style={{...style, backgroundColor}}>
            <div
                style={{
                    // FIXME Putting backgroundSize here as for some reason putting this on the styled component does not work
                    ...(backgroundImage?.uri && {background: `url(${backgroundImage.uri})`, backgroundSize: 'cover'}),
                }}
            >
                <SSILogo logo={logo} color={logoColor} />
            </div>
        </Container>
    );
};

export default SSIMiniCardView;
