import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ClientLayout from "./pages/layouts/ClientLayout";
import ProductDetail from "./pages/ProductDetail";
import AdminLayout from "./pages/layouts/AdminLayout";
import List from "./pages/products/List";
import Add from "./pages/products/Add";
import { Toaster } from "react-hot-toast";
import Edit from "./pages/products/Edit";
import ListCourse from "./pages/courses/ListCourse";
import AddCourse from "./pages/courses/AddCourse";
import EditCourse from "./pages/courses/EditCourse";
import Register from "./pages/Register";

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

          <Route path="register" element={<Register/>} />
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="product" element={<List/>}/>
          <Route path="product/add" element={<Add/>}/>
          <Route path="product/edit/:id" element={<Edit/>} />
        
          <Route path="course" element={<ListCourse/>} />
          <Route path="course/add" element={<AddCourse/>} />
          <Route path="course/edit/:id" element={<EditCourse/>} />
        </Route>

        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
