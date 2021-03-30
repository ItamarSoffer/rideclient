import './App.css';
import AppRouter from './Router/AppRouter'
import React from "react";
import 'antd/dist/antd.css';

function App() {
  return (
          <AppRouter
          isLogged={true}
      />
  );
}

export default App;
