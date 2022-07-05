import "./App.css";
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home";
import Article from "./pages/Article";
import News from "./pages/News";
import About from "./pages/About";
import Market from "./pages/Market/index";
import Faq from './pages/Faq'
import Footer from "./components/Footer/index";
import Item from "./pages/Item/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news">
            <Route path=":articleId" element={<Article />} />
            <Route index element={<News />} />
          </Route>
          <Route path="market">
            <Route path=":itemId" element={<Item />} />
            <Route index element={<Market />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
