import styled from "styled-components/native";


const TextInputContainer = styled.View<{focused: boolean}>`
  width: 100%;
  margin-top: 8px;
  padding: 8px;
`;
const TextInputBorder = styled.View<{focused: boolean; errorMessage: boolean}>`
  background-color: white;
  border-radius: 5px;
  border: ${({focused, errorMessage}) => (focused || errorMessage ? 2 : 1)}px
    solid
    ${({focused, errorMessage}) =>
  errorMessage
    ? 'red'
    : focused
    ? '#9999ff'
    : 'black'};
`;

const TextInputStyled = styled.TextInput`
  font-size: 18px;
  padding: 8px;
`;
const TextInputLabel = styled.Text<{
  focused: boolean;
  touched: boolean;
  labelled: boolean;
  errorMessage: boolean;
}>`
  opacity: ${({focused, touched, labelled, errorMessage}) =>
  (focused || touched || errorMessage) && labelled ? 1 : 0};
  position: absolute;
  left: 8px;
  top: -12px;
  padding-left: 8px;
  padding-right: 8px;
                                                                                                                                                                                                                                                                          
`;

export {TextInputContainer, TextInputBorder, TextInputStyled , TextInputLabel}
