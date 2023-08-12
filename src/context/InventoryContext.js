import React, { createContext, useEffect, useState } from "react";
import { data } from "../data/InventoryData";

export const ContextInventory = createContext();

export const InventoryContext = ({ children }) => {
  const [inventoryData, setInventoryData] = useState(data);

  const [departmentSelected, setDepartmentSelected] = useState("");

  if (!localStorage.getItem("allInventoryData")) {
    localStorage.setItem("allInventoryData", JSON.stringify(inventoryData));
  }

  useEffect(() => {
    if (localStorage.getItem("allInventoryData")) {
      const temp = JSON.parse(localStorage.getItem("allInventoryData"));
      setInventoryData(() => [...temp]);
    }
  }, []);

  const addNewProduct = (productDetails) => {
    const allInventoryData = JSON.parse(
      localStorage.getItem("allInventoryData")
    );
    allInventoryData.push({ ...productDetails });
    localStorage.setItem("allInventoryData", JSON.stringify(allInventoryData));
    setInventoryData((prev) => [...prev, { ...productDetails }]);
  };
  return (
    <ContextInventory.Provider
      value={{
        inventoryData,
        addNewProduct,
        departmentSelected,
        setDepartmentSelected,
      }}
    >
      {children}
    </ContextInventory.Provider>
  );
};
