import { Link } from "react-router-dom";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <Link to={props.toUrl} className="btn btn-primary">
            {props.btnName}
          </Link>
        </div>
      </div>
    </>
  );
}
