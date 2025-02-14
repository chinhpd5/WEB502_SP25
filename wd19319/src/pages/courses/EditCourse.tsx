import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { CourseInput } from '../../interfaces/course';
import { useNavigate, useParams } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

function EditCourse() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<CourseInput>();
  const navigate = useNavigate();
  const {id} = useParams();
  const onSubmit = async (data: CourseInput) =>{
    // console.log(data);
    try {
      await axios.put(`http://localhost:3000/courses/${id}`,data)
      toast.success("Cập nhật thành công")
      navigate('/admin/course')
    } catch (error) {
      toast.error((error as AxiosError).message)
    }
  }

  useEffect(()=>{
    if(id){
      const getCourseById = async ()=>{
        const {data} = await axios.get(`http://localhost:3000/courses/${id}`)
        // console.log(data);
        if(data)
          reset(data)
      }

      getCourseById()
    }
  },[id])

  return (
    <div>
      <h1>Cập nhật khóa học</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">
            Tên khóa học
          </label>
          <input {...register("courseName",{
            required: "Không để trống tên khóa học"
          })} type="text" className="form-control" id="courseName" />
          {errors?.courseName && <span className="text-danger">{errors?.courseName?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="views" className="form-label">
            Lượt xem
          </label>
          <input {...register("views",{
            required: "Không để trống lượt xem",
            min: {
              value: 0,
              message: "Lượt xem cần lớn hơn 0"
            }
          })} type="number" className="form-control" id="views" />
          {errors?.views && <span className="text-danger">{errors?.views?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Hình ảnh
          </label>
          <input {...register("thumbnail",{
            required: "Không để trống hình ảnh"
          })} type="text" className="form-control" id="thumbnail" />
          {errors?.thumbnail && <span className="text-danger">{errors?.thumbnail?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="note" className="form-label">
            Ghi chú
          </label>
          <input {...register("note")} type="text" className="form-control" id="note" />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Danh mục
          </label>
          <select className="form-select" {...register("category")} >
            <option value={'Javascript'}>Javascript</option>
            <option value={'PHP'}>PHP</option>
            <option value={'C++'}>C++</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditCourse