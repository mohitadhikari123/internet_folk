import './App.css';
import Banner from './component/Banner';
import AboutUs from './component/AboutUs';
import Articles from './component/Articles';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Banner/>
      <AboutUs/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
