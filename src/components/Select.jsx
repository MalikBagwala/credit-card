import React, { useMemo } from "react";
import styled from "styled-components";
import { Label, Wrapper } from "./Input";
import { camelCase } from "lodash-es";
const StyledSelect = styled.select`
  height: 50px;
  border: 1px solid ${props => props.theme["gray-300"]};
  background: white;
  font-size: 1.3rem;
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

const Option = styled.option`
  :focus {
    background: ${props => `${props.theme.primary} !important`};
  }
`;
export default function({ label, id, name, items, fill, ...otherProps }) {
  const inputId = useMemo(() => (id ? id : camelCase(label)), [id, label]);
  const inputName = useMemo(() => (name ? name : inputId), [name, inputId]);
  return (
    <Wrapper fill={fill}>
      <Label>{label}</Label>
      <StyledSelect id={inputId} name={inputName} size={1} {...otherProps}>
        {items &&
          items.map(item => <Option value={item.id} label={item.name} />)}
      </StyledSelect>
    </Wrapper>
  );
}
