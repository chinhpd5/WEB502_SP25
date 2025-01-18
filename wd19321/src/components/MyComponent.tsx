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
  return (
    <>
      <h1>Element</h1>
      <ProductItem
        title="Sản phẩm 1"
        urlImage="https://atinproduction.com/wp-content/uploads/2021/07/AWP01220-scaled-1280x1920.jpg"
        price={1000}
      />

      <ProductItem
        title="Sản phẩm 2"
        urlImage="https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg"
        price={2000}
      />
    </>
  );
}

export default MyComponent;
