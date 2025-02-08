import React, { useState } from "react";
import { ProductInput } from "../../interfaces/product";

const productInit: ProductInput = {
  title:'',
  thumbnail:'',
  price: 0,
  category:'smartphones',
  description:''
}

function Add() {
  const [product,setProduct] = useState<ProductInput>(productInit)

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>,key:string)=>{
    setProduct((prev: ProductInput)=>{
      return {
        ...prev, //spread
        [key]: e.target.value
      }
    })
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(product);
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
              handleChangeInput(e,'title')
              // setProduct((prev: ProductInput)=>{
              //   return {
              //     ...prev, //spread
              //     title: e.target.value
              //   }
              // })
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
            handleChangeInput(e,'price')
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
            handleChangeInput(e,'thumbnail')
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
            handleChangeInput(e,'description')
          }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Danh mục
          </label>
          <select className="form-select" 
            value={product.category}
            onChange={(e)=>{
              handleChangeInput(e,'category')
            }}
          >
            <option value={'smartphones'}>smartphones</option>
            <option value={'laptops'}>laptops</option>
            <option value={'skincare'}>skincare</option>
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
