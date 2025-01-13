type ProductType = {
  title: string,
  urlImage: string,
  price: number
}

//Props

function ProductItem(props: ProductType){
  return (
    <>
      <h1 id="title">{props.title}</h1>
      <img className="" style={{height: '200px'}} src={props.urlImage} alt="" />
      <h3>{props.price} vnđ</h3>
      <button onClick={()=>{
        console.log(props.title);
      }}>Mua ngay</button>
    </>
  )
}

function MyComponent(){
  const listProduct: ProductType[] = [
    {
      title: "sản phẩm 1",
      urlImage: "https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg",
      price: 100
    },
    {
      title: "sản phẩm 2",
      urlImage: "https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg",
      price: 200
    },
    {
      title: "sản phẩm 3",
      urlImage: "https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg",
      price: 300
    },
    {
      title: "sản phẩm 4",
      urlImage: "https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg",
      price: 400
    }

  ]

  return (
    <>
      {
        listProduct.map((item: ProductType,index: number)=>{
          return (
            <ProductItem
              key={index}
              title={item.title}
              urlImage={item.urlImage}
              price={item.price}
            />
          )
        })
      }
    </>
  )

}

export default MyComponent;
