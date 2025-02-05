import { useEffect, useState } from "react"
import IProduct from "../interfaces/product";
import ProductItem from "../components/ProductItem";

function Products(){

  const [products,setProducts] = useState<IProduct[]>([])

  useEffect(()=>{
    const getAllProducts = async ()=>{
      const res = await fetch(`http://localhost:3000/products`);
      const data = await res.json();
      // console.log(data);
      setProducts(data)
    }

    getAllProducts();
  },[])

  return(
    <>
      <h1>Đây là sản phẩm</h1>
      <div className="row">
      {
        products.map((item:IProduct)=>{
          return (
            <div className="col-xl-3 col-md-4 col-6" key={item.id}>
              <ProductItem {...item}/> {/* spread*/}
              {/* <ProductItem id={item.id} title={item.title}/> */}
            </div>
          )
        })
      }
      </div>
    </>
  )
}
export default Products
