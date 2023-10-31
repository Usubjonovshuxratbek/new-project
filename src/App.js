import './App.css';
import About from './components/About/About';
import Asaid from './components/Asaid/Asaid';
import Banner from './components/Banner/Banner';
import Favourite from './components/Favourite/Favourite';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import New from './components/New/New';
import Sign from './components/Sign/Sign';

function App() {
  return (
    <div className="App">
      <Header />
      <Asaid />
      <New />
      <Banner />
      <Favourite />
      <About />
      <Sign />
      <Footer />
    </div>
  );
}

export default App;
