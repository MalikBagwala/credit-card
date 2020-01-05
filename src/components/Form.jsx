import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Select from "./Select";
import styled from "styled-components";

const Div = styled.div`
  display: flex;

  /* justify-content: flex-start; */
  flex: 1 1 0px;
  align-items: flex-end;
`;

const Form = styled.form`
  width: 100%;
  align-self: flex-end;
`;

const FormSelect = styled(Select)`
  margin-right: 1.3rem;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
`;

const FormButton = styled(Button)`
  margin-top: 1.5rem;
`;

export default function() {
  return (
    <Form>
      <Input autofocus={true} label="Card Number" />
      <Input label="Card Name" />
      <Row>
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
        <Input fill label="CVV" />
      </Row>
      <FormButton fill form>
        Submit
      </FormButton>
    </Form>
  );
}
