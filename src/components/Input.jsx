import React, { useMemo } from "react";
import styled from "styled-components";
import { camelCase } from "lodash-es";
export const Wrapper = styled.div`
  width: ${props => props.width};
  margin-bottom: 1.3rem;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  height: 50px;
  border: 1px solid ${props => props.theme["gray-300"]};
  font-size: 1.3rem;
  width: 100%;
  color: ${props => props.theme["gray-500"]};
  padding: 0.7rem 1rem;
  border-radius: 5px;
  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.primary};
    box-shadow: 0 1px 3px rgba(218, 65, 103, 0.12),
      0 1px 2px rgba(218, 65, 103, 0.24);
  }
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.theme["gray-500"]};
  margin-bottom: 0.3rem;
`;

// export interface InputProps {
//   label?: string;
//   id?: string;
//   name?: string;
// }
export default function({ label, id, name, ...otherProps }) {
  const inputId = useMemo(() => (id ? id : camelCase(label)), [id, label]);
  const inputName = useMemo(() => (name ? name : inputId), [name, inputId]);
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput id={inputId} name={inputName} {...otherProps} />
    </Wrapper>
  );
}
