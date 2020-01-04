import React from "react";
import styled from "styled-components";
import Card from "./components/Card";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.secondary};
`;

const App: React.FC = () => {
  return (
    <Div>
      <Card />
    </Div>
  );
};

export default App;
