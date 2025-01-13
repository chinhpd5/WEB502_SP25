type ProductType = {
  title: string,
  urlImage: string,
  price: number
}

//Props

function ProductItem(props: ProductType){
  console.log(props);

  return (
    <>
      <h1 id="title">{props.title}</h1>
      <img className="" style={{height: '200px'}} src={props.urlImage} alt="" />
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
        urlImage="https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg"
        price={1000}
      />

      <ProductItem
        title="Sản phẩm 2"
        urlImage="https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg"
        price={2000}
      />
      {/* <ProductItem/>
      <ProductItem/> */}
    </>
  )

}

export default MyComponent;
