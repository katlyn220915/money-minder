"use client";

import React from "react";
import "../../public/css/main.css";
import Item from "./Item";

const BillList = ({ list, onDeleteItem }) => {
  return (
    <section className="section__bill-list">
      <ul className="container-sm bill-list">
        {list.map((item, i) => (
          <Item
            key={"item-" + i}
            id={item.id}
            bill={item.bill}
            description={item.description}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </section>
  );
};

export default BillList;
