import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/Alert";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContactButton from "./components/FloatingContactButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <AlertProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <FloatingContactButton />
          <Alert />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AlertProvider>
  );
}
