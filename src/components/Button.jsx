import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  background: ${props => props.theme[props.intent]};
  color: white;
  border-radius: 5px;
  width: ${props => (props.fill ? "100%" : null)};
  height: ${props => (props.form ? "50px" : null)};
  box-shadow: 3px 10px 20px 0px rgba(218, 65, 103, 0.24);
  transition: all 0.15s ease-in;
  :hover {
    opacity: 0.9;
  }
`;

export default function Button({ ...otherProps }) {
  return <StyledButton {...otherProps} />;
}

Button.defaultProps = {
  intent: "primary"
};
