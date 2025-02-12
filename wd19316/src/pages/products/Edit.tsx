import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ProductInput } from '../../interfaces/product'
import { useNavigate, useParams } from 'react-router-dom'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

function Edit() {
  const {id} = useParams()
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<ProductInput>()
  const navigate = useNavigate();

  const onSubmit = async (data: ProductInput) =>{
    // console.log(data);
    try {
      await axios.put(`http://localhost:3000/products/${id}`,data);
      toast.success("Cập nhật thành công");
      navigate('/admin/product')
    } catch (error) {
      toast.error((error as AxiosError).message)
    }
  }

  useEffect(()=>{
    if(id){
      // lấy thông tin chi tiết sản phẩm
      const getProductById = async () =>{
        try {
          const {data} = await axios.get(`http://localhost:3000/products/${id}`);

          // console.log(data);
          if(data){
            // đổ dữ liệu vào form
            reset(data)
          }
          
        } catch (error) {
          toast.error((error as AxiosError).message)
        }
      }
  
      getProductById();
    }

  },[id])

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
            //   setProduct((prev: ProductInput)=>{
            //     return {
            //       ...prev, // spread
            //       title: e.target.value
            //     }
            //   })
            // }}
            {...register('title',{
              required: "Cần nhập thông tin tên sản phẩm",
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
            {...register('price',{
              required: "Không để trống giá bán",
              min: {
                value: 0,
                message: "Cần nhập số không âm"
              },
              max:{
                value: 1000,
                message: "Giá bán nhỏ hơn 1000"
              },
              pattern: {
                value: /^\d+$/,
                message: "Sai định dạng số"
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
            {...register('thumbnail')}
          />
          {/* không để trống hình ảnh, độ dài tối đa 255 ký tự */}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mô tả
          </label>
          <input type="text" className="form-control" id="description" 
            {...register('description')}
          />
          {/* Không để trống mô tả */}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Danh mục
          </label>
          <select className="form-select"
            {...register("category")}
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
  )
}

export default Edit