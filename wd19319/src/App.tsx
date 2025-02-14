import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import LayoutClient from "./pages/layouts/LayoutClient";
import ProductDetail from "./pages/ProductDetail";
import List from "./pages/product/List";
import Add from "./pages/product/Add";
import LayoutAdmin from "./pages/layouts/LayoutAdmin";
import { Toaster } from "react-hot-toast";
import Edit from "./pages/product/Edit";
import ListCourse from "./pages/courses/ListCourse";
import AddCourse from "./pages/courses/AddCourse";
import EditCourse from "./pages/courses/EditCourse";


function App() {

  return (
    <>
      {/* <h1 className="text-center text-danger">chinhpd5</h1> */}
      <Routes>
        
        <Route path="/" element={<LayoutClient/>}>
          <Route index element={<Home/>}/>
          <Route path="product" element={<Products/>}/>
          <Route path="product/:id" element={<ProductDetail/>}/>
          <Route path="news" element={<h1>Tin tức</h1>}/>
          <Route path="about" element={<h1>About</h1>}/>
        </Route>

        <Route path="/admin" element={<LayoutAdmin/>}>
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
