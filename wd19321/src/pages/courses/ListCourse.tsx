import axios, { Axios, AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ICourse from "../../interfaces/course";
import { Link } from "react-router-dom";

function ListCourse() {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    // IEEF
    const getAllCourse = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/courses`);
        // console.log(data);
        if (data) {
          setCourses(data);
        }
      } catch (error) {
        toast.error((error as AxiosError).message);
      }
    };
    getAllCourse();
  }, []);

  const handleDelete = async (id: string) =>{
    // console.log(id);
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
      if(id){
        try {
            await axios.delete(`http://localhost:3000/courses/${id}`)
            toast.success("Xóa thành công")

            setCourses((prev: ICourse[])=>{
              return prev.filter((item: ICourse)=>{
                return item.id != id
              })
            })

        } catch (error) {
          toast.error((error as AxiosError).message);
        }
      }
    }
    
  }

  return (
    <div>
      <h1>Danh sách khóa học</h1>
      <Link to={`add`} className="btn btn-primary">Thêm mới</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên khóa học</th>
            <th scope="col">Lượt xem</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Danh mục</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {courses?.map((item: ICourse, index: number) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.courseName}</td>
                <td>{item.views}</td>
                <td><img src={item.thumbnail} height={"70px"} alt="" /></td>
                <td>{item.note}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={()=>{handleDelete(item.id)}} className="btn btn-danger">Xóa</button>
                  <Link className="btn btn-warning" to={`edit/${item.id}`}>Sửa</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListCourse;
