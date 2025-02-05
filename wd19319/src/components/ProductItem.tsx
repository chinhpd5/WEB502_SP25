import { Link } from "react-router-dom";
import IProduct from "../interfaces/product";

function ProductItem(props: IProduct) {
  // console.log(props);

  return (
     <Link to={`/product/${props.id}`} className="mb-3">
        <div className="card" style={{ width: "300px" }}>
          <img style={{width: '90%', height:'400px', objectFit:'cover'}} src={props.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-truncate">{props.title}</h5>
            <p className="card-text text-truncate">
             {props.description}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </Link>
  );
}

export default ProductItem;
