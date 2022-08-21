import { useEffect, useState } from "react";
import React from "react";
import ShoppingCart from "./ShoppingCart";

function Dom({ items }) {
    const shopRow =  Math.ceil(items.length/3)
    // console.log(Math.ceil(shopRow))
    const collection = items.map((item) => {
    return (
    <div className="border-2 font-serif font-thin">
        <div className="">
            {item.item_name}
            <br></br>
            ${item.price}0
            <br></br>
            {item.description}
            <br></br>
            {item.in_stock}
            <div>
            <button>Add to Cart</button>
            </div>
        </div>
    </div>
    );
    });
    return <div className="
    grid grid-flow-row grid-cols-3 border-2" style={{gridTemplateRows: `repeat(${shopRow}, minmax(0, 1fr))` }}>
{collection}
    </div>;
}

export default Dom;
