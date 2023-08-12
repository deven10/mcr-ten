import React, { useState, useContext } from "react";
import { ContextInventory } from "../context/InventoryContext";

export const AddNewProduct = () => {
  const { inventoryData, addNewProduct } = useContext(ContextInventory);
  const [productDetails, setProductDetails] = useState({
    id: +inventoryData.length + 1,
    department: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    sku: "",
    supplier: "",
    delivered: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };

  const clear = () =>
    setProductDetails({
      id: +inventoryData.length + 1,
      department: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      sku: "",
      supplier: "",
      delivered: "",
      imageUrl: "",
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      productDetails.department !== "" ||
      productDetails.name !== "" ||
      productDetails.description !== "" ||
      productDetails.price !== "" ||
      productDetails.stock !== "" ||
      productDetails.sku !== "" ||
      productDetails.supplier !== "" ||
      productDetails.delivered !== "" ||
      productDetails.imageUrl !== ""
    ) {
      addNewProduct(productDetails);
      clear();
      alert("New Product Added 🚀");
    } else {
      alert("Please fill all the Fields");
    }
  };
  return (
    <div className="add-new-product-wrapper">
      <div className="heading">Add New Product</div>
      <form
        className="new-product-form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="group">
          <label className="form-label" htmlFor="department">
            Department:
          </label>
          <select
            className="form-input"
            value={productDetails.department}
            onChange={(e) => handleChange(e)}
            name="department"
            id="department"
          >
            <option value="">Select an Option</option>
            <option value="kitchen">Kitchen</option>
            <option value="clothing">Clothing</option>
            <option value="toys">Toys</option>
          </select>
        </div>
        <div className="group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            value={productDetails.name}
            onChange={(e) => handleChange(e)}
            name="name"
            className="form-input"
            type="text"
          />
        </div>
        <div className="group">
          <label className="form-label" htmlFor="description">
            Description:
          </label>
          <textarea
            value={productDetails.description}
            onChange={(e) => handleChange(e)}
            className="form-input"
            name="description"
            id=""
          ></textarea>
        </div>
        <div className="group">
          <label className="form-label" htmlFor="price">
            Price:
          </label>
          <input
            value={productDetails.price}
            name="price"
            onChange={(e) => handleChange(e)}
            className="form-input"
            type="text"
          />
        </div>
        <div className="group">
          <label className="form-label" htmlFor="stock">
            Stock:
          </label>
          <input
            value={productDetails.stock}
            onChange={(e) => handleChange(e)}
            className="form-input"
            type="number"
            name="stock"
            id=""
          />
        </div>
        <div className="group">
          <label className="form-label" htmlFor="sku">
            SKU:
          </label>
          <input
            value={productDetails.sku}
            onChange={(e) => handleChange(e)}
            name="sku"
            className="form-input"
            type="text"
          />
        </div>
        <div className="group">
          <label className="form-label" htmlFor="supplier">
            Supplier:
          </label>
          <input
            value={productDetails.supplier}
            onChange={(e) => handleChange(e)}
            name="supplier"
            className="form-input"
            type="text"
          />
        </div>
        <div className="group">
          <label className="form-label" htmlFor="delivered">
            Delivered:
          </label>
          <input
            value={productDetails.delivered}
            onChange={(e) => handleChange(e)}
            className="form-input"
            type="number"
            name="delivered"
            id=""
          />
        </div>
        <div className="group">
          <label className="form-label" htmlFor="imageUrl">
            Image URL:
          </label>
          <input
            value={productDetails.imageUrl}
            onChange={(e) => handleChange(e)}
            name="imageUrl"
            className="form-input"
            type="text"
          />
        </div>
        <div className="group">
          <button type="submit" className="new-product">
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};
