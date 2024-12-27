import MyProductsCard from "./MyProductsCard";
import Plants from "../Json/Plants.json";
import "../style/MyProducts.css";

export default function MyProducts({ selectedCategory, searchText }) {
  console.log("inside MyProducts , selectedCategory : ", selectedCategory);
  console.log("inside MyProducts , searchText : ", searchText);

  // use filter to make to array (filteredPlants) according to the prop selectedCategory and searchtext
  // if its "All" the new array will have all plants other wise only the selectedCategory or name includes searchtext

  const filteredPlants = Plants.filter((plant) => {
    const categoryMatch =
      selectedCategory === "All" || plant.category === selectedCategory;
    const searchTextMatch = plant.name
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(searchText.toLowerCase().replace(/\s+/g, ""));
    console.log("Inside Filter fn , categoryMatch : ", categoryMatch);
    console.log("Inside Filter fn , searchTextMatch : ", searchTextMatch);
    return categoryMatch && searchTextMatch;
  });

  console.log("Inside MyProducts , FilteredPlants : ", filteredPlants);
  // console.log("Inside MyProducts ,  : ", plant.category);

  return (
    <div className="container mb-5 products-container">
      {!filteredPlants.length ? (
        <div className="error-msg" >No Plants Found !!!</div>           // if search not found
      ) : (
        <div className="row">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <MyProductsCard key={plant.id} {...plant} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
