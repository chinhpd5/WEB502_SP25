import { useForm } from "react-hook-form";
import { CourseInput } from "../../interfaces/course";
import toast from "react-hot-toast";
import axios, { Axios, AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<CourseInput>();
  const navigate = useNavigate();

  const onSubmit = async (data: CourseInput) =>{
    // console.log(data);
    try {
      await axios.post(`http://localhost:3000/courses`,data)
      toast.success("Thêm thành công")
      navigate('/admin/course')

    } catch (error) {
      toast.error((error as AxiosError).message)
    }
  }

  return (
    <>
      <h1>Thêm mới khóa học</h1>
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
            required:"Không để trống tên khóa học",
            min: {
              value: 0,
              message: "Lượt xem cần lớn hơn hoặc bằng 0"
            }
          })} type="number" className="form-control" id="views" />
          {errors?.views && <span className="text-danger">{errors?.views?.message}</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Hình ảnh
          </label>
          <input type="text" {...register("thumbnail",{
            required:"Không để trống hình ảnh"
          })} className="form-control" id="thumbnail" />
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
          <select className="form-select" {...register("category")}>
            <option value={'Javascript'}>Javascript</option>
            <option value={'PHP'}>PHP</option>
            <option value={'C++'}>C++</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddCourse;
