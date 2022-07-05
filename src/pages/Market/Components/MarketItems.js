import React from 'react'
import ItemCard from "../../../components/Cards/ItemCard";

export default function MarketItems({items,itemsVariable}) {
    return (
        <div className="market-items">
        {itemsVariable === null && (
          <h1 style={{ textAlign: "center", gridColumn: "span 3" }}>
            No results were found
          </h1>
        )}
        {itemsVariable != null &&itemsVariable.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))}
      </div>
    )
}
