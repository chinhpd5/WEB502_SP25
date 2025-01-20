import { Outlet } from "react-router-dom"

function ClientLayout(){

  return (
    <>
        <h1>Menu layout</h1>

        <Outlet/>

        <h1>Footer layout</h1>
    </>
  )
}

export default ClientLayout;
