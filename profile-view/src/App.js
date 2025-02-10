import React from 'react';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
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
      <Analytics />
    </div>
  );
}

export default App;
