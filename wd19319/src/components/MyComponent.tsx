
function ProductItem(){
  return(
    <>
      <h1>Sản phẩm 1</h1>
      <img style={{height: '100px'}} src="https://studiovietnam.com/wp-content/uploads/2022/08/background-chup-anh-san-pham-02.jpg" alt="" />
      <h3>1000 vnđ</h3>
      <button>Mua ngay</button>
    </>
  )
}

function MyComponent(){
  return (
    <>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </>
  )
}

export default MyComponent;
