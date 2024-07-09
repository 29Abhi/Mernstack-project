import React from "react";
import ListItem from "../Component/Product-List/ListItem";
import Navbar from "../Component/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar children={<ListItem />}></Navbar>
    </div>
  );
}

export default Home;
