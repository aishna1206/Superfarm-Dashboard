// src/App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Dashboard />
      </main>
      {/* Optional Footer can be added here */}
      {/* <footer>
        <p>© 2024 SuperFarm Analytics</p>
      </footer> */}
    </div>
  );
};

export default App;
