import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProducts from "../views/ShowProducts";
import CreateProduct from "../views/CreateProduct";
import EditProduct from "../views/EditProduct";
import ShowCategories from "../views/ShowCategories";
import EditCategory from "../views/EditCategory";
import CreateCategory from "../views/CreateCategory";
import Navbar from "../components/Navbar";

const Router = () => {
    return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
       
          <Route
            path="/" element={<ShowProducts></ShowProducts>}
          ></Route>
          <Route
            path="/create" element={<CreateProduct></CreateProduct>}
          ></Route>
          <Route
            path="/edit/:id" element={<EditProduct></EditProduct>}
          ></Route>
          <Route
            path="/categories" element={<ShowCategories></ShowCategories>}
          ></Route>
          <Route
            path="/category" element={<CreateCategory></CreateCategory>}
          ></Route>
          <Route
            path="/category/:id" element={<EditCategory></EditCategory>}
          ></Route>
        </Routes>
      </BrowserRouter>
   
    );
};

export default Router;