import { useParams } from "react-router-dom"

function ProductDetail(){

  const {id} = useParams();

  console.log(id);
  

  return (
    <>
      <h1>Chi tiết sản phẩm</h1>
    </>
  )
}

export default ProductDetail