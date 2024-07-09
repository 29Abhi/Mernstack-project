import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import ProductDetail from "../Component/Product-List/Component/ProductDetail";

function ProductDetailPage() {
  return <div>{<Navbar children={<ProductDetail />}></Navbar>}</div>;
}

export default ProductDetailPage;
