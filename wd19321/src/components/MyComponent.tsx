// Props trong:
// React component
// React element (class -> className, for -> htmlFor)

type ProductType = {
  title: string;
  urlImage: string;
  price: number;
};

function ProductItem(props: ProductType) {
  console.log(props);

  return (
    <div>
      <h1 id="title-heading">{props.title}</h1>
      <img style={{ height: "100px" }} src={props.urlImage} alt="" />
      <h4 className="price">{props.price} vnđ</h4>
      <button>Mua ngay</button>
    </div>
  );
}

function MyComponent() {

  const productList: ProductType[] = [
    {
      title: "Sản phẩm 1",
      urlImage: "https://atinproduction.com/wp-content/uploads/2021/07/AWP01220-scaled-1280x1920.jpg",
      price: 1000
    },
    {
      title: "Sản phẩm 2",
      urlImage: "https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg",
      price: 2000
    },
    {
      title: "Sản phẩm 3",
      urlImage: "https://lavenderstudio.com.vn/wp-content/uploads/2019/09/chup-hinh-san-pham-my-pham-spa-15-839x1024.jpg",
      price: 3000
    }

  ]

  return (
    <>
      <h1>Element</h1>

      {
        productList.map((item: ProductType,index: number)=>{
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
  );
}

export default MyComponent;
