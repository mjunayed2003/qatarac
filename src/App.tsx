import { Routes, Route } from "react-router-dom";
import Header from "./component/layoput/Header";
import Home from "./component/Home";
import ServicesPage from "./component/Service";
import GalleryPage from "./component/Gallery";
import About from "./component/About";
import FloatingButton from "./component/layoput/FloatingButton";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Footer from "./component/layoput/Footer";

function App() {
  return (
    <>
      <Header />
    
      <main className="pt-[105px] md:pt-[100px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <FloatingButton />

      <Footer />
    </>
  );
}

export default App;