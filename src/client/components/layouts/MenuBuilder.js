import React from "react";
import SideBar from "./SideBar";
import MenuPreview from "./MenuPreview";

const MenuBuilder = () => (
  <div className="container menu-builder">
    <div className="row">
      <div className="col-4">
        <SideBar />
      </div>
      <div className="col-8">
        <MenuPreview />
      </div>
    </div>
  </div>
);

export default MenuBuilder;
