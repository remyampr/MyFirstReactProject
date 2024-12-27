import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import MyProducts from "./MyProducts";
import { useState } from "react";
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All"); // selectedCategory set to All at first
  console.log("Inside Home , selectedCategory : ", selectedCategory);

  const [searchText,setSearchedText]=useState("");
  // search text empty at first 

  return (
    <div>
      <MyNavbar setSelectedCategory={setSelectedCategory}  setSearchedText={setSearchedText} />
      {/* sending setSelectedCategory and setSearchedText to MyNavbar where selection and searching happening   */}
      <MyProducts selectedCategory={selectedCategory}  searchText={searchText}  />
      {/* sending selectedCategory and searchText to MyProducts where products maping to MyProductsCard according to
       its props */}
      <MyFooter />
    </div>
  );
}
