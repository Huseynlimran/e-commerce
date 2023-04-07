import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Cart from "./pages/Cart";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" element={<SideNav />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
