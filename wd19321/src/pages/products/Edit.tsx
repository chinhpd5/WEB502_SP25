import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ProductInput } from '../../interfaces/product'
import { useNavigate, useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

function Edit() {

  const { 
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<ProductInput>();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if(id){
      const getProductById = async()=>{
        const {data} = await axios.get(`http://localhost:3000/products/${id}`)
        console.log(data);
        if(data){
          reset(data)
        }
      }
      getProductById();
    }
  },[id])  
  
  const onSubmit = async (data:ProductInput) =>{
    // console.log(data);
    try {
      await axios.put(`http://localhost:3000/products/${id}`,data)
      toast.success("Cập nhật thành công");
      navigate('/admin/product')
    } catch (error) {
      toast.error((error as AxiosError).message)
    }
    
  }

  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>

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
            {...register('title',{
              required: "Không để trống tên sản phẩm",
              minLength: {
                value: 3,
                message: "Cần tối thiểu 3 ký tự"
              },
              maxLength: {
                value: 100,
                message: "Cần tối đa 10 ký tự"
              }
            })}
          />
          {errors?.title && <span className="text-danger">{errors?.title?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá bán
          </label>
          <input type="text" className="form-control" id="price" 
          // value={product.price}
          // onChange={(e)=>{
          //   handleChangeInput(e,'price')
          // }}
          {...register('price',{
            required: "Không để trống giá bán",
            min: {
              value: 0,
              message: "Giá bán lớn hơn hoặc bằng 0"
            },
            max: {
              value: 10000,
              message: "Giá bán nhỏ hơn hoặc bằng 1000"
            },
            pattern: {
              value: /^\d+$/,
              message: "Sai định dạng number"
            }
          })}
          />
          {errors?.price && <span className="text-danger">{errors?.price?.message}</span>}

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
          {/* Không để trống hình ảnh, tối đa 255 ký tự */}
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
          {/* Không để trống mô tả */}
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
  )
}

export default Edit