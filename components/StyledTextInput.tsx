import React, {useState} from 'react';
import {TextInputContainer, TextInputBorder, TextInputStyled , TextInputLabel} from "./StyledTextInput.style";

import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Text
} from 'react-native';
import {FieldProps, getIn} from 'formik';


interface TextInputStyleProps {
  label?: string; // custom styled label
  disabled?: boolean; // when user shouldn't be able to affect input
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export interface TextInputType
  extends TextInputProps,
    FieldProps,
    TextInputStyleProps,
    Omit<TextInputProps, 'name' | 'value' | 'error'> {}

export function StyledTextInput({
                            field,
                            form,
                            onBlur,
                            label,
                            ...props
                          }: TextInputType) {
  const {onBlur: fieldOnBlur, onChange, name} = field;
  const {touched, errors} = form;

  const fieldTouched = Boolean(touched[name]);
  const error =
    Boolean(fieldTouched && !!getIn(errors, name)) && getIn(errors, name);

  // state for handling focus and touched on a component level
  const [focused, setFocused] = useState(false);

  return (
    <TextInputContainer focused={focused}>
      <TextInputBorder focused={focused} errorMessage={Boolean(error)}>
        <TextInputStyled
          value={field.value}
          allowFontScaling={false}
          autoCorrect={false}
          onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            onBlur ? onBlur(e) : fieldOnBlur(name)(e);
            setFocused(false);
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onChangeText={onChange(name)}
          placeholderTextColor={
            error ? 'red' : 'black'
          }
          selectionColor={error ? 'red' : 'black'}
          {...props}
        />
      </TextInputBorder>

      <TextInputLabel
        errorMessage={Boolean(error)}
        labelled={Boolean(label)}
        focused={focused}
        touched={Boolean(fieldTouched)}
      >
        {label}
      </TextInputLabel>

      {error && (
        <Text  style={{marginTop: 8, color:'red'}}>
          {error}
        </Text>
      )}
    </TextInputContainer>
  );
}
