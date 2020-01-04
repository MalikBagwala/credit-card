import React from "react";
import Input from "./Input";
import Button from "./Button.jsx";

export default function() {
  return (
    <form>
      <Input label="Card Number" />
      <Input label="Card Name" />
      <Button fill form>
        Submit
      </Button>
    </form>
  );
}
