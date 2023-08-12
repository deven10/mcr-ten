import React, { useContext } from "react";
import { ContextInventory } from "../context/InventoryContext";

export const InventoryDashboard = () => {
  const { inventoryData } = useContext(ContextInventory);
  const tally = inventoryData?.reduce(
    (acc, curr) => {
      return (acc = {
        ...acc,
        totalDelivered: +acc.totalDelivered + +curr.delivered,
        totalStock: +acc.totalStock + +curr.stock,
        LowStock: +curr.stock <= 10 ? +acc.LowStock + 1 : +acc.LowStock,
      });
    },
    { totalStock: 0, totalDelivered: 0, LowStock: 0 }
  );

  return (
    <div className="boxes-wrapper">
      <div className="box">
        <div className="count totalStock">{tally.totalStock}</div>
        <div className="title">Total Stock</div>
      </div>
      <div className="box">
        <div className="count totalDelivered">{tally.totalDelivered}</div>
        <div className="title">Total Delivered</div>
      </div>
      <div className="box">
        <div className="count LowStock">{tally.LowStock}</div>
        <div className="title">Low Stock Items</div>
      </div>
    </div>
  );
};
