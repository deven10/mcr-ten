import React, { useContext } from "react";
import { useParams } from "react-router";
import { ContextInventory } from "../context/InventoryContext";

export const SingleProduct = () => {
  const { inventoryData } = useContext(ContextInventory);
  const { productID } = useParams();

  const singleProduct = inventoryData?.find(({ id }) => id === +productID);
  console.log(singleProduct);
  return (
    <div className="single-product-wrapper">
      <h2>{singleProduct?.name}</h2>
      <img
        className="single-product-img"
        src={singleProduct?.imageUrl}
        alt={singleProduct?.name}
      />
      <p>Price: $ {singleProduct?.price}</p>
      <p>Stock: {singleProduct?.stock}</p>
      <p>Supplier: {singleProduct?.supplier}</p>
      <p>Department: {singleProduct?.department}</p>
      <p>SKU: {singleProduct?.sku}</p>
      <p>Delivered: {singleProduct?.delivered}</p>
      <p>Description: {singleProduct?.description}</p>
    </div>
  );
};
