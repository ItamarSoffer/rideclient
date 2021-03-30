import logo from './logo.svg';
import './App.css';
import AppRouter from './Router/AppRouter'
import React from "react";

function App() {
  return (
          <AppRouter
          isLogged={true}
      />
  );
}

export default App;
