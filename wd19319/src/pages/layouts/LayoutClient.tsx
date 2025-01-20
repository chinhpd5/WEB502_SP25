import { Outlet } from "react-router-dom"

function LayoutClient(){

  return (
    <>
      <h1>Đây là menu</h1>

      <Outlet/>

      <h1>Footer</h1>
    </>
  )
}
export default LayoutClient