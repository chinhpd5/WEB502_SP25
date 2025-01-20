import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ClientLayout from "./pages/layouts/ClientLayout";

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={<ClientLayout/>}>
          <Route index element={<Home/>} />
          <Route path="product" element={<Products/>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="news" element={<h1>Tin tức</h1>} />
        </Route>

        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
