import React from "react";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Select from "./Select";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_FORM } from "../global/reducer.js";
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
  const state1 = useSelector(state => {
    console.log(state);
  });
  const state = {};
  const dispatch = useDispatch();
  function handleChange(id, value) {
    dispatch({
      type: CHANGE_FORM,
      payload: { id, value }
    });
  }
  return (
    <Form>
      <Input autofocus={true} label="Card Number" value={state.cardNumber} />
      <Input label="Card Name" value={state.cardName} />
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
            value={state.expirationDate}
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
