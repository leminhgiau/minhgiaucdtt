import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "../../pages/product/Detail";
import Profile from "../../pages/profile/Profile";
import Orders from "../../pages/profile/Orders";
import Cart from "../../pages/cart/Cart";
import Address from "../../pages/profile/Address";
import Wishlist from "../../pages/profile/Wishlist";
import Seller from "../../pages/profile/Seller";
import Setting from "../../pages/profile/Setting";
import AllCategory from "../../pages/profile/Allcategory";
import CategoryGridView from "../../pages/profile/CategoryGridView";
import CategoryListView from "../../pages/profile/CategoryListView";
import Content from "../../pages/Content";
import Login from "../../pages/user/Login";
import Register from "../../pages/user/Register";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-detail/:id" element={<Detail />} />
      <Route path="/page-profile-main" element={<Profile />} />
      <Route path="/page-profile-orders" element={<Orders />} />
      <Route path="/page-shopping-cart" element={<Cart />} />
      <Route path="/page-profile-address" element={<Address />} />
      <Route path="/page-profile-wishlist" element={<Wishlist />} />
      <Route path="/page-profile-seller" element={<Seller />} />
      <Route path="/page-profile-setting" element={<Setting />} />
      <Route path="/page-category" element={<AllCategory />} />
      <Route path="/page-listing-grid" element={<CategoryGridView />} />
      <Route path="/page-listing-list" element={<CategoryListView />} />
      <Route path="/page-content" element={<Content />} />
      <Route path="/page-user-login" element={<Login />} />
      <Route path="/page-user-register" element={<Register />} />
    </Routes>
  </main>
);
export default Main;
