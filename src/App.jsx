import { useState } from "react";
import { Homepage } from "./components/homepage";
import { GlobalStyle } from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer theme="dark" />
      <Homepage />
    </>
  );
}

export default App;
