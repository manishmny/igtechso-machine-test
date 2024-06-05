import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import 'swiper/css/effect-coverflow';

import "./App.css";
import Header from "./components/include/Header";
import Footer from "./components/include/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
