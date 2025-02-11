import axios from "axios";
import React, { useEffect, useState } from "react";
import IProduct from "../../interfaces/product";

function List() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axios.get(`http://localhost:3000/products`); // destructring
      // console.log(data);
      if (data) {
        setProducts(data);
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
