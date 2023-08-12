import React, { useContext } from "react";
import { ContextInventory } from "../context/InventoryContext";
import { useNavigate } from "react-router-dom";

export const Departments = () => {
  const { setDepartmentSelected } = useContext(ContextInventory);
  const navigate = useNavigate();
  return (
    <div className="boxes-wrapper">
      <div className="box">
        <div
          className="title"
          onClick={() => {
            navigate("/products-list", { state: { location: "Department" } });
            setDepartmentSelected(() => "Kitchen");
          }}
        >
          Kitchen
        </div>
      </div>
      <div className="box">
        <div
          className="title"
          onClick={() => {
            navigate("/products-list", { state: { location: "Department" } });
            setDepartmentSelected(() => "Clothing");
          }}
        >
          Clothing
        </div>
      </div>
      <div className="box">
        <div
          className="title"
          onClick={() => {
            navigate("/products-list", { state: { location: "Department" } });
            setDepartmentSelected(() => "Toys");
          }}
        >
          Toys
        </div>
      </div>
    </div>
  );
};
