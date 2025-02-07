import React, { useState } from "react";
import { ProductInput } from "../../interfaces/product";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const productInit: ProductInput ={
  title:'',
  category:'smartphones',
  description:'',
  price:0,
  thumbnail:''
}

function Add() {
  const [product,setProduct] = useState<ProductInput>(productInit);

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // console.log(product);
    try {
      await axios.post(`http://localhost:3000/products`,product)
      toast.success("Thêm thành công")
    } catch (error) {
      // toast.error("Thêm thất bại")
      toast.error((error as AxiosError).message)
    }
    
  }

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>

      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tên sản phẩm
          </label>
          <input type="text" className="form-control" id="title" 
            value={product.title}
            onChange={(e)=>{
              setProduct((prev: ProductInput)=>{
                return {
                  ...prev, // spread
                  title: e.target.value
                }
              })
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá bán
          </label>
          <input type="number" className="form-control" id="price"
            value={product.price}
            onChange={(e)=>{
              setProduct((prev: ProductInput)=>{
                return {
                  ...prev, // spread
                  price: Number(e.target.value)
                }
              })
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Hình ảnh
          </label>
          <input type="text" className="form-control" id="thumbnail"
            value={product.thumbnail}
            onChange={(e)=>{
              setProduct((prev: ProductInput)=>{
                return {
                  ...prev, // spread
                  thumbnail: e.target.value
                }
              })
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mô tả
          </label>
          <input type="text" className="form-control" id="description" 
            value={product.description}
            onChange={(e)=>{
              setProduct((prev: ProductInput)=>{
                return {
                  ...prev, // spread
                  description: e.target.value
                }
              })
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Danh mục
          </label>
          <select className="form-select"
            value={product.category}
            onChange={(e)=>{
              setProduct((prev: ProductInput)=>{
                return {
                  ...prev, // spread
                  category: e.target.value
                }
              })
            }}
          >
            <option value={'smartphones'}>smartphones</option>
            <option value={'laptops'}>laptops</option>
            <option value={'groceries'}>groceries</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
