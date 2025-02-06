import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ClientLayout from "./pages/layouts/ClientLayout";
import ProductDetail from "./pages/ProductDetail";

function App() {

  return (
    <>
      {/* <h1 className="text-center text-danger">Chinhpd5</h1> */}
      <Routes>
        <Route path="/" element={<ClientLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Products/>}/>
          <Route path='product/:id' element={<ProductDetail/>}/>
          <Route path='news' element={<h1>Tin tức</h1>}/>
          <Route path='contact' element={<h1>Liên hệ</h1>}/>
        </Route>

        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
