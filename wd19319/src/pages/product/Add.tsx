import React, { useState } from "react";
import { ProductInput } from "../../interfaces/product";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// const productInit: ProductInput = {
//   title:'',
//   price: 0,
//   description:'',
//   thumbnail:'',
//   category:'smartphones'
// }

function Add() {

  // const [product,setProduct] = useState<ProductInput>(productInit)

  // // console.log(product);
  // const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>,key: string)=>{
  //   setProduct((prev:ProductInput)=>{
  //     return {
  //       ...prev, //spread
  //       [key]: e.target.value
  //     }
  //   })
  // }

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
  //   e.preventDefault();
  //   // console.log(product);

  //   try {
  //     await axios.post(`http://localhost:3000/products`,product)
  //     toast.success("Thêm thành công")
  //   } catch (error) {
  //     toast.error((error as AxiosError).message)
  //   }
    
  // }
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<ProductInput>()

  const onSubmit =async (data: ProductInput)=>{
    // console.log(data);
    try {
      await axios.post(`http://localhost:3000/products`,data)
      toast.success("Thêm thành công");
      navigate('/admin/product')
    } catch (error) {
      toast.error((error as AxiosError).message)
    }
  }
  
  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tên sản phẩm
          </label>
          <input type="text" className="form-control" id="title"
            // value={product.title}
            // onChange={(e)=>{handleChangeInput(e,'title')}}
            {...register("title",{
              required: "Không để trống tên sản phẩm", //Không để trống
              minLength: {
                value: 3,
                message: "Cần tối thiểu 3 ký tự"
              },
              maxLength: {
                value: 10,
                message: "Cần tối đa 10 ký tự"
              }
            })}
          />
          {errors?.title && <span className="text-danger">{errors?.title.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá bán
          </label>
          <input type="text" className="form-control" id="price" 
            //  value={product.price}
            //  onChange={(e)=>{handleChangeInput(e,'price')}}
            {...register("price",{
              required: "Không để trống giá bán",
              min: {
                value: 0,
                message: "Giá bán tối thiếu bằng 0"
              },
              pattern: {
                value: /^\d+$/,
                message: "Chưa đúng định dạng số"
              }
            })}
          />
          {/* giá bán tối đa: 1000 */}
          {errors?.price && <span className="text-danger">{errors?.price.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Hình ảnh
          </label>
          <input type="text" className="form-control" id="thumbnail"
            // value={product.thumbnail}
            // onChange={(e)=>{handleChangeInput(e,'thumbnail')}}
            {...register("thumbnail")}
          />
          {/* không để trống hình ảnh, tối đa 255 ký tự */}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mô tả
          </label>
          <input type="text" className="form-control" id="description" 
            // value={product.description}
            // onChange={(e)=>{handleChangeInput(e,'description')}}
            {...register("description")}
          />
          {/* Không để trống */}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Danh mục
          </label>
          <select className="form-select" 
            // value={product.category}
            // onChange={(e)=>{handleChangeInput(e,'category')}}
            {...register("category")}
          >
            <option value={'smartphones'}>smartphones</option>
            <option value={'laptops'}>laptops</option>
            <option value={'fragrances'}>fragrances</option>
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
