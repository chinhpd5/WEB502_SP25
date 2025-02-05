import { useEffect, useState } from "react";
import IProduct from "../interfaces/product";
import ProductItem from "../components/ProductItem";

function Products(){
  const [products,setProducts] = useState<IProduct[]>([])

  useEffect(()=>{

    const getAllProduct = async () =>{
      const res = await fetch(`http://localhost:3000/products`);
      const data = await res.json();
      // console.log(data);

      if(data){
        setProducts(data)
      }
      
    }

    getAllProduct();

  },[])

  return (
    <>
      <h1>Danh sách sản phẩm</h1>
      <div className="row">
        {
          products.map((item: IProduct,index:number)=>{
            return (
              <div key={item.id} className="col-lg-3 col-md-4 col-6">
                <ProductItem  {...item} />
              </div>
            )
            // return (<ProductItem key={item.id} id={item.id} title={item.title}/>)
          })
        }
      </div>
    </>
  )
}

export default Products;