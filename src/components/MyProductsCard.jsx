import "../style/MyProductsCard.css";
// import Plants from "../Json/Plants.json";

export default function MyProductsCard({ ...plant }) {
  // console.log("Inside MyProductsCard , Plant:  ", plant);
  // console.log("Inside MyProductsCard , Plant-Category:  ", plant.category);

  return (
    <div className="card plant-card ">
      <img
        src={`/images/${plant.image}`}
        className="card-img-top"
        alt={plant.name}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{plant.name} </h5>
        <p className="card-text">{plant.category} </p>
        <p className="card-text">Price:{plant.price}Rs</p>
        <button className="btn btn-success">View Details</button>
      </div>
    </div>
  );
}
