import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.secondary};
`;

const App: React.FC = () => {
  return <Div></Div>;
};

export default App;
