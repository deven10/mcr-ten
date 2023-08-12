import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ContextInventory } from "../context/InventoryContext";

export const ProductsList = () => {
  const { inventoryData, departmentSelected } = useContext(ContextInventory);
  const navigate = useNavigate();

  const [allInventoryData, setAllInventoryData] = useState(
    JSON.parse(localStorage.getItem("allInventoryData"))
  );
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [checkLowStock, setCheckLowStock] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (departmentSelected !== "") {
      setSelectedDepartment(() => departmentSelected);
    }
  }, [departmentSelected]);

  useEffect(() => {
    if (location.state === null) {
      setSelectedDepartment(() => "All");
    }
  }, [location]);

  const departmentFilter = (dataset) => {
    if (selectedDepartment === "" || selectedDepartment === "All") {
      return dataset;
    } else {
      return dataset.filter(
        ({ department }) => department === selectedDepartment
      );
    }
  };

  const sortByFilter = (dataset) => {
    if (sortBy === "name") {
      return dataset.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      return dataset.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "stock") {
      return dataset.sort((a, b) => Number(a.stock) - Number(b.stock));
    } else {
      return dataset;
    }
  };

  const lowStockFilter = (dataset) => {
    if (checkLowStock) {
      return dataset.filter(({ stock }) => stock <= 10);
    } else {
      return dataset;
    }
  };

  const filterByDepartment = departmentFilter(allInventoryData);
  const filterBySortBy = sortByFilter(filterByDepartment);
  const filterByLowStock = lowStockFilter(filterBySortBy);

  return (
    <div className="product-list-wrapper">
      <div className="productlist-header">
        <p className="heading">Products</p>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          name=""
          id=""
        >
          <option value="All" selected>
            All
          </option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
        <label htmlFor="low-stock">
          <input
            value={checkLowStock}
            onChange={(e) => setCheckLowStock(e.target.checked)}
            type="checkbox"
            name="low-stock"
            id="low-stock"
          />
          Low Stock Items
        </label>
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name" selected>
            Name
          </option>
          <option value="price">Price (Low to High)</option>
          <option value="stock">Stock (Low to High)</option>
        </select>
        <button
          className="new-product"
          onClick={() => navigate("/new-product")}
        >
          New
        </button>
      </div>
      <div className="productlist-table-wrapper">
        <table className="productlist-table">
          <thead className="productlist-thead">
            <tr>
              <td>Image</td>
              <td>Name</td>
              <td>Description</td>
              <td>Price</td>
              <td>Stock</td>
              <td>Supplier</td>
            </tr>
          </thead>
          <tbody className="productlist-tbody">
            {filterByLowStock?.map((item) => (
              <tr key={item.id} className="body-tr">
                <td>
                  <img
                    className="item-img"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                </td>
                <td
                  className="td-name"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  {item.name}
                </td>
                <td className="td-desc">{item.description}</td>
                <td>$ {item.price}</td>
                <td>{item.stock}</td>
                <td>{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
