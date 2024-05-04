import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./app/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
