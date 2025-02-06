import { useParams } from "react-router-dom";

function ProductDetail(){

  const {id} = useParams();

  console.log(id);
  

  return(
    <>Chi tiết sản phẩm</>
  )
}

export default ProductDetail;