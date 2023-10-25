import React, {FC, ReactNode} from 'react';
import {OpacityStyleEnum, fontColors, selectionElements} from '@sphereon/ui-components.core';
import {
  SSICheckboxContainerStyled as Container,
  SSICheckboxLabelContainerStyled as LabelCaption,
  SSICheckboxSelectedContainerStyled as SelectedContainer,
  SSICheckboxUnselectedContainerStyled as UnselectedContainer,
} from '../../../styles/components';

export interface IProps {
  onValueChange?: (isChecked: boolean) => Promise<void>;
  initialValue?: boolean;
  // This value can be used to control the checkbox from the outside
  isChecked?: boolean;
  label?: string | ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  selectedColor?: string;
  labelColor?: string;
  checkmarkColor?: string
}

const SSICheckbox: FC<IProps> = (props: IProps): JSX.Element => {
  const {
    backgroundColor,
    borderColor = selectionElements.primaryBorderDark,
    disabled = false,
    initialValue = false,
    label,
    selectedColor = selectionElements.primaryDark,
    labelColor = fontColors.light,
    checkmarkColor = fontColors.dark
  } = props;
  const [isChecked, setChecked] = React.useState(initialValue);
  const value = props.isChecked !== undefined ? props.isChecked : isChecked;

  const onValueChange = async (): Promise<void> => {
    const {onValueChange} = props;

    if (disabled) {
      return
    }

    if (onValueChange) {
      await onValueChange(!isChecked)
    }

    setChecked(!isChecked);
  };

  return (
      <Container
          onClick={onValueChange}
          style={{...(disabled && {opacity: OpacityStyleEnum.DISABLED})}}
      >
        {value ? (
          <SelectedContainer
            style={{backgroundColor: selectedColor, border: `1px solid ${borderColor}`}}
          />
        ) : (
          <UnselectedContainer
            style={{backgroundColor, border: `1px solid ${borderColor}`}}
          />
        )}
        {
          label &&
            ( typeof label === 'string'
                ? <LabelCaption style={{color: labelColor}}>
                      {label}
                  </LabelCaption>
                : label
            )
        }
      </Container>
  );
};

export default SSICheckbox;
