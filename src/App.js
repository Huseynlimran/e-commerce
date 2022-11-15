import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>

          <Route path="/cart" element={<Cart />}></Route>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
