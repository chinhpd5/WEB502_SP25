import { useEffect, useState } from "react";
import IProduct from "../interfaces/product";
import ProductItem from "../components/ProductItem";

function Products(){
  const [products,setProducts] = useState<IProduct[]>([])

  useEffect(()=>{

    const getAllProducts = async ()=>{
      const res = await fetch(`http://localhost:3000/products`);
      const data = await res.json();
      // console.log(data);
      if(data){
        setProducts(data)
      }

    }

    getAllProducts();

  },[])

  return (<>
    <h1>Đây là Sản phẩm</h1>
    <div className="row">
    {
      products.map((item:IProduct)=>{
        return (
          <div key={item.id} className="col-xl-3 col-md-4 col-6">
            <ProductItem {...item}/>
            {/* <ProductItem id={item.id} title={item.title}/> */}
          </div>
        )
      })
    }
    </div>
  </>)
}
export default Products;