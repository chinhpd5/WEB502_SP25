import React, { useState } from "react";
import { ProductInput } from "../../interfaces/product";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

// const productInit: ProductInput = {
//   title:'',
//   thumbnail:'',
//   price: 0,
//   category:'smartphones',
//   description:''
// }

function Add() {
  // const [product,setProduct] = useState<ProductInput>(productInit)

  // const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>,key:string)=>{
  //   setProduct((prev: ProductInput)=>{
  //     return {
  //       ...prev, //spread
  //       [key]: e.target.value
  //     }
  //   })
  // }

  // const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
  //   e.preventDefault();
  //   // console.log(product);
  //   try {
  //     await axios.post(`http://localhost:3000/products`,product);
  //     toast.success("Thêm thành công")
  //   } catch (error) {
  //     // toast.error("Thêm thất bại")
  //     toast.error((error as AxiosError).message)
  //   }
  // }

  const { 
    register,
    handleSubmit
  } = useForm<ProductInput>() 
  
  const onSubmit = async (data:ProductInput) =>{
    // console.log(data);
    try {
      await axios.post(`http://localhost:3000/products`,data);
      toast.success("Thêm thành công")
    } catch (error) {
      // toast.error("Thêm thất bại")
      toast.error((error as AxiosError).message)
    }
  }
  
  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>

      <form 
        // onSubmit={(e)=>{handleSubmit(e)}}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tên sản phẩm
          </label>
          <input type="text" className="form-control" id="title" 
            // value={product.title}
            // onChange={(e)=>{
            //   handleChangeInput(e,'title')
            //   // setProduct((prev: ProductInput)=>{
            //   //   return {
            //   //     ...prev, //spread
            //   //     title: e.target.value
            //   //   }
            //   // })
            // }}
            {...register('title')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá bán
          </label>
          <input type="number" className="form-control" id="price" 
          // value={product.price}
          // onChange={(e)=>{
          //   handleChangeInput(e,'price')
          // }}
          {...register('price')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Hình ảnh
          </label>
          <input type="text" className="form-control" id="thumbnail" 
          // value={product.thumbnail}
          // onChange={(e)=>{
          //   handleChangeInput(e,'thumbnail')
          // }}
          {...register('thumbnail')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mô tả
          </label>
          <input type="text" className="form-control" id="description" 
          // value={product.description}
          // onChange={(e)=>{
          //   handleChangeInput(e,'description')
          // }}
          {...register("description")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Danh mục
          </label>
          <select className="form-select" 
            // value={product.category}
            // onChange={(e)=>{
            //   handleChangeInput(e,'category')
            // }}
            {...register("category")}
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
