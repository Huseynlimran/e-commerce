import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Cart from "./pages/Cart";

function App() {
  useEffect(() => {
    console.log(1)
    // products.map((getcate) => setData(getcate));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<SideNav />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
