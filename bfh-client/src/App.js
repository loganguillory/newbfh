import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import SignUp from "./SignUp";
import Favorites from "./Favorites";
import Dom from "./Dom";
import Designers from "./Designers";

function App() {
  const [page, setPage] = useState("/");
  const [creators, setCreators] = useState([]);
  const [userFaves, setUserFaves] = useState([]);
  const [items, setItems] = useState([])
  const [user, setUser] = useState({
    username: "",
    full_name: "",
    email: "",
    admin: Boolean,
    favorites: [],
  });
  //User Data
  function getUserData() {
    fetch("/me")
      .then((r) => r.json())
      .then((r) => setUser(r));
  }

  useEffect(() => {
    getUserData()
  }, [])

  //Designer Data
  useEffect(() => {
    fetch("/designers")
      .then((r) => r.json())
      .then((data) => {
        setCreators(data);
      });
  }, []);

  //shop/Items Data
  useEffect(() => {
    fetch("/items")
    .then(r => r.json())
    .then((data) =>{
   setItems(data)
    })
  }, [])



  return (
    <div className="font-collingardemo relative">
      <BrowserRouter>
        <NavBar onChangePage={setPage} user={user} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/designers"
            element={<Designers creators={creators} />}
          ></Route>
          <Route path="/shop" element={<Dom key={items.id} items={items}/>}></Route>
          <Route
            path="favorites"
            element={<Favorites userFaves={userFaves} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<ShoppingCart/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
