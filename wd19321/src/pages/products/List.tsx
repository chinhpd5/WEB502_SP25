import axios, { Axios, AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import IProduct from "../../interfaces/product";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function List() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`); // destructring
        // console.log(data);
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        toast.error((error as AxiosError).message)
      }
    };

    getAllProducts();
  }, []);

  // console.log(products);

  const handleDetele = async (id:string) =>{
    // console.log(id);
    if(window.confirm("Bạn có chắc chắn muốn xóa không ?")){
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success("Xóa thành công")
  
        setProducts((prev: IProduct[])=>{
          return prev.filter((item:IProduct)=>{
            return item.id != id
          })
        })
      } catch (error) {
        toast.error((error as AxiosError).message)
      }
    }
  }

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <Link className="btn btn-primary" to={`add`}>Thêm mới</Link>
      {/* <Link className="btn btn-primary" to={`/admin/product/add`}>Thêm mới</Link> */}
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Giá bán</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Danh mục</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item: IProduct, index: number) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index+1}</th>
                <td>{item.title}</td>
                <td><img src={item.thumbnail} height={'80px'} alt="" /></td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={()=>{handleDetele(item.id)}} className="btn btn-danger">Xóa</button>
                  {/* <Link className="btn btn-warning" to={`/admin/product/edit/${item.id}`}>Sửa</Link> */}
                  <Link className="btn btn-warning" to={`edit/${item.id}`}>Sửa</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
