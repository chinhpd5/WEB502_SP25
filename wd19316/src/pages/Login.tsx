import axios, { AxiosError } from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { ILogin } from '../interfaces/user'
import { useForm } from 'react-hook-form'

function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ILogin>()
  const naviage = useNavigate();

  const onSubmit = async (data: ILogin) =>{
    // console.log(data);
    try {
      const res = await axios.post(' http://localhost:3000/login',data)
      toast.success("Đăng nhập thành công")
      // console.log(res);
      localStorage.setItem('token', res.data.accessToken);
      naviage('/')
    } catch (error: any) {
      // console.log(error);
      // toast.error(error.response.data)
      toast.error((error as AxiosError).response?.data as string)
    }
    
  }

  return (
    <div>
      <h1>Đăng ký</h1>
      <Link className="btn btn-primary" to={'/register'}>Đăng ký</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            {...register("email",{
              required: "Không để trống email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Sai định email"
              }
            })}
          />
          {errors?.email && <span className="text-danger">{errors?.email?.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password",{
              required: "Không để trống password",
              minLength: {
                value: 6,
                message: "Cần tối thiểu 6 ký tự"
              }
            })}
          />
          {errors?.password && <span className="text-danger">{errors?.password?.message}</span>}

        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login