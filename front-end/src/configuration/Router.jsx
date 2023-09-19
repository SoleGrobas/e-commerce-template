import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProducts from "../views/ShowProducts";
import CreateProduct from "../views/CreateProduct";
import EditProduct from "../views/EditProduct";
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
        </Routes>
      </BrowserRouter>
   
    );
};

export default Router;