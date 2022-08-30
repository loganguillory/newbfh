import { useEffect, useState } from "react";
import React from "react";
import ShoppingCart from "./ShoppingCart";

function Dom({ items, updateItem, removeItem, user, refresh, setRefresh }) {
  const [item_name, setItemName] = useState("");
  const [price, setItemPrice] = useState("");
  const [description, setItemDescription] = useState("");
  const [image, setItemImage] = useState("");
  const [designer_id, setDesignerid] = useState("");

  console.log(user.id);

  function handleCart(item) {
    let id = item.id;
    console.log(id);

    fetch(`/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item_id: id }),
    }).then((res) => res.json())
      .then((res) => setRefresh(!refresh))

    setTimeout(() => {
      alert("Item added to cart!");
    }, 1000);
  }

  function addNewItem(e) {
    // console.log("i was clicked")
    e.preventDefault();

    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_name,
        price,
        description,
        image,
        designer_id,
      }),
    })
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((r) => updateItem(r))
      .then((r) => setRefresh(!refresh));
  }

  function handleDelete(product) {
    let id = product.id;
    fetch(`/items/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((r) => {removeItem(r)})
      .then((r) => setRefresh(!refresh));
      
  }
<div>
  <h1>
    Our Shop offers a carefully curated Hot Items List from designers that we love! 
  </h1>
</div>
  const shopRow = Math.ceil(items.length / 3);
  // console.log(Math.ceil(shopRow))
  const collection = items.map((item) => {
    return (
      <div key={item.id} className="font-serif font-thin">
        <div className="text-center">
          <div className="border-2">
            <img className="object-fill" src={item.image} />
          </div>
          <br></br>
          {item.item_name}
          <br></br>${item.price}0<br></br>
          {item.description}
          <br></br>
          {item.in_stock}
          <br></br>
          <div>
            <button
              onClick={() => {
                handleCart(item);
              }}
            >
              Add to Cart
            </button>
            <br></br>
            {user.id == 10 ? (
              <button
                onClick={() => {
                  handleDelete(item);
                }}
              >
                Remove Item{" "}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div
        className="
      grid grid-flow-row grid-cols-3 pt-20 gap-5 max-w-3xl ml-auto mr-auto"
        style={{ gridTemplateRows: `repeat(${shopRow}, minmax(0, 1fr))` }}
      >
        {collection}
      </div>

      <div>
        {/* Add New Items */}
        {user.id == 10 ? (
          <div className="bg-gray-50 max-w-3xl border-2 ml-auto mr-auto rounded-lg text-black  h-[450px] mt-20 mb-32 grid justify-items-center">
            <div  className="uppercase mt-6 pt-6 text-2xl">
              <span>Add new designer item</span>
            </div>

            <div className="w-full ">
              <form
                className="grid grid-flow-row grid-cols-4 grid-rows-6 text-lg"
                onSubmit={(e) => addNewItem(e)}
              >
                <div className="col-span-1 flex justify-end items-center py-2">
                  Item Name:
                </div>

                <div className="col-span-3 h-full py-2">
                  <input
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-10/12 ml-4 border-2"
                    type="Item Name"
                    name="Item Name"
                    placeholder=""
                  ></input>
                </div>

                <div className="col-span-1 flex justify-end items-center py-2">
                  Price:
                </div>

                <div className="col-span-3 h-full py-2">
                  <input
                    onChange={(e) => setItemPrice(e.target.value)}
                    className="w-10/12 ml-4 border-2"
                    type="Item Name"
                    name="Item Name"
                    placeholder=""
                  ></input>
                </div>

                <div className="col-span-1 flex justify-end items-center py-2">
                  Description:
                </div>

                <div className="col-span-3 h-full py-2">
                  <input
                    onChange={(e) => setItemDescription(e.target.value)}
                    className="w-10/12 ml-4 border-2"
                    type="Item Name"
                    name="Item Name"
                    placeholder=""
                  ></input>
                </div>

                <div className="col-span-1 flex justify-end items-center py-2">
                  Designer:
                </div>

                <div className="col-span-3 h-full py-2">
                  <input
                    onChange={(e) => setDesignerid(e.target.value)}
                    className="w-10/12 ml-4 border-2"
                    type="Item Name"
                    name="Item Name"
                    placeholder=""
                  ></input>
                </div>

                <div className="col-span-1 flex justify-end items-center py-2">
                  Image Url:
                </div>

                <div className="col-span-3 h-full py-2">
                  <input
                    onChange={(e) => setItemImage(e.target.value)}
                    className="w-10/12 ml-4 border-2"
                    type="Item Name"
                    name="Item Name"
                    placeholder=""
                  ></input>
                </div>

                <div className="col-span-4 flex justify-center py-2">
                  <input
                    className="text-center cursor-pointer border-2 w-2/6 bg-white"
                    type="submit"
                    name="Submit"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dom;
