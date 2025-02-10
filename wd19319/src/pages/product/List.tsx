import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import IProduct from "../../interfaces/product";
import toast from "react-hot-toast";

function List() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products`); //destructuring
        // console.log(data);
        setProducts(data);
      } catch (error) {
        toast.error((error as AxiosError).message);
      }
    };

    getAllProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <table className="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Giá bán</th>
            <th scope="col">Mô tả</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item: IProduct, index: number) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index+1}</th>
                <td>{item.title}</td>
                <td><img src={item.thumbnail} width={'80px'} alt="" /></td>
                <td>{item.price}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
