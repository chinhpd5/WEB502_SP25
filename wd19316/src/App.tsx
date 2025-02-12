import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ClientLayout from "./pages/layouts/ClientLayout";
import ProductDetail from "./pages/ProductDetail";
import AdminLayout from "./pages/layouts/AdminLayout";
import List from "./pages/products/List";
import Add from "./pages/products/Add";
import { Toaster } from "react-hot-toast";
import Edit from "./pages/products/Edit";
import ListCourse from "./pages/course/ListCourse";

function App() {

  return (
    <>
      {/* <h1 className="text-center text-danger">chinhpd5</h1> */}
      <Routes>

        <Route path="/" element={<ClientLayout/>}>
          <Route index element={<Home/>} />
          <Route path="product" element={<Products/>} />
          <Route path="product/:id" element={<ProductDetail/>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="news" element={<h1>Tin tức</h1>} />
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="product" element={<List/>}/>
          <Route path="product/add" element={<Add/>}/>
          <Route path="product/edit/:id" element={<Edit/>} />

          <Route path="course" element={<ListCourse/>} />
        </Route>

        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
