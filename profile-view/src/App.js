import './app.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
