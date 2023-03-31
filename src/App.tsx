import React from 'react';
import './App.css';
import Employee from "./components/ListEmployees";
import  ErrorBoundary from "./errorBoundary";

function App() {

  return (
   <ErrorBoundary>
     <div className="App">
      <header className="App-header">      
       <Employee/>
      </header>
    </div>
   </ErrorBoundary>
  );
}

export default App;
