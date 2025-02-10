import React from 'react';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
