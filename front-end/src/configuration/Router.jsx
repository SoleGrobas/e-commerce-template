import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProducts from "../views/ShowProducts";
import CreateProduct from "../views/CreateProduct";
import EditProduct from "../views/EditProduct";
import Navbar from "../components/Navbar";
import CreateOrder from "../views/CreateOrder";
import ShowOrders from "../views/ShowOrders";
import EditOrder from "../views/EditOrder";

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
            path="/order" element={<CreateOrder></CreateOrder>}
          ></Route>
          <Route
            path="/order/edit/:id" element={<EditOrder></EditOrder>}
          ></Route>
          <Route
            path="/orders" element={<ShowOrders></ShowOrders>}
          ></Route>
        </Routes>
      </BrowserRouter>
   
    );
};

export default Router;