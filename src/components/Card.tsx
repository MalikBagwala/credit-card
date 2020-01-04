import React from "react";
import styled from "styled-components";
import Form from "./Form";

const Div = styled.div`
  background: white;
  border-radius: 1rem;
  height: 60vh;
  width: 35%;
  box-shadow: 0 30px 60px 0 rgba(218, 65, 103, 0.3);
  padding: 2rem;
`;

export default function() {
  return (
    <Div>
      <Form />
    </Div>
  );
}
