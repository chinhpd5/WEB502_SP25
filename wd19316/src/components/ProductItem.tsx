import { Link } from "react-router-dom";
import IProduct from "../interfaces/product";

function ProductItem(props: IProduct) {
  // console.log(props);

  return (
    <>
      <div className="card p-1 mb-3" style={{ width: "280px" }}>
        <img style={{height:'300px'}} src={props.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/product/${props.id}`} className="card-title text-truncate">{props.title}</Link>
          <p className="card-text text-truncate" >
            {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
