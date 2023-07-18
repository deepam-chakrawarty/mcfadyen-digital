import React from "react";
import Assignment from "./Assignment";
import GlobalStyles from "./GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Assignment />
      </Provider>
    </>
  );
}

export default App;
