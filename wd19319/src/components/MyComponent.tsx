type ProductType = {
  title: string,
  imageUrl: string,
  price: number
}

function ProductItem(props: ProductType){ // react compnent
  console.log(props);

  return(
    <>
      <h1>{props.title}</h1>
      <img id="image" className="" style={{height: '100px'}} src={props.imageUrl} alt="" />
      <h3>{props.price} vnđ</h3>
      <button>Mua ngay</button>
    </>
  )
}

function MyComponent(){
  return (
    <>
      <ProductItem
        title="Sản phẩm 1"
        imageUrl="https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg"
        price={1000}
      /> {/* react component */}
      <ProductItem/>
      {/*<ProductItem/> */}
    </>
  )
}

export default MyComponent;
