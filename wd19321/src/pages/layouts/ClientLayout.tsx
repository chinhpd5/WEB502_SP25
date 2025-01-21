import { Outlet } from "react-router-dom"

function ClientLayout(){
  return(
  <>
    <h1>Menu</h1>

    <Outlet/>

    <h1>Footer</h1>
  </>
  )
}

export default ClientLayout;