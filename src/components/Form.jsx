import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Select from "./Select";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 70%;
  /* justify-content: flex-start; */
  flex: 1 1 0px;
  align-items: flex-end;
`;

const FormSelect = styled(Select)`
  margin-right: 1.3rem;
`;
export default function() {
  return (
    <form>
      <Input label="Card Number" />
      <Input label="Card Name" />
      <Div>
        <FormSelect
          fill
          items={[
            {
              id: 1,
              name: "Malik"
            },
            {
              id: 2,
              name: "Huzefa"
            }
          ]}
          type="select"
          label="Expiration Date"
        />
        <FormSelect
          fill
          items={[
            {
              id: 1,
              name: "Malik"
            },
            {
              id: 2,
              name: "Huzefa"
            }
          ]}
          type="select"
        />
      </Div>
      <Button fill form>
        Submit
      </Button>
    </form>
  );
}
