import { Link } from "react-router-dom";
import IProduct from "../interfaces/product";

function ProductItem(props: IProduct) {
  console.log(props);

  return (
    <div>
      <div className="card p-2" style={{ width: "18rem" }}>
        <img style={{height: '320px',objectFit:'cover'}} src={props.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/product/${props.id}`}>
            <h5 className="card-title text-truncate">{props.title}</h5>
          </Link>
          <p className="card-text text-truncate">
           {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
