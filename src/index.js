import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ResetCss from "./components/ResetCss";
import styled from "styled-components";
const ScreenSize = styled.div`
  width: 375px;
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScreenSize>
    <ResetCss />
    <App />
  </ScreenSize>
);
