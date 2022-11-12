import './App.css';
import Home from './Component/Home/Home';
import VideoSection from './Component/Video_Section/VideoSection';
import Product from './Component/Product/Product';
import Services from './Component/Services/Services';
import FinalSection from './Component/FinalSection/FinalSection';
function App() {
  return (
    <div className="App">
    <Home />
    <VideoSection />
    <Product />
    <Services />
    <FinalSection />
    
    </div>
  );
}

export default App;
