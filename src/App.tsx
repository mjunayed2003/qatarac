import { Routes, Route } from "react-router-dom";
import Header from "./component/layoput/Header";
import Home from "./component/Home";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </>
  );
}

export default App;
