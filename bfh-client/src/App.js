import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import SignUp from "./SignUp";
import About from "./About";
import Dom from "./Dom";
import Designers from "./Designers";
import Community from "./Community";

function App() {
  const [page, setPage] = useState("/");
  const [creators, setCreators] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const [items, setItems] = useState([
    {
      description: "",
      id: "",
      image: "",
      item_name: "",
      price: "",
    },
  ]);
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
    getUserData();
  }, [refresh]);

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
      .then((r) => r.json())
      .then((data) => {
        if (data.length > 0) {
          setItems(data);
        }
      });
  }, []);

  function updateItem(item) {
    setItems([...items, item]);
  }

  function removeItem(item){
    setItems(items.filter((i) => {
      return i.id !== item.id
    }))

  }
  // useEffect(() =>{
  //   fetch("/favorites")
  //   .then(r =>r.json())
  //   .then((data) => {
  //     setUserFaves(data)
  //   })
  // }, [])

  function showDesigners(){
  //   const x = document.getElementById("letters");
    
  //   if (x.style.display === "none"){
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  }
//   function handleNavDisplay(letter){
//     const navHeight= document.getElementById(letter)
//     navHeight.style.opacity="1";
//  }

//  function handleNavClose(letter){
//   const navHeight = document.getElementById(letter)
//   navHeight.style.opacity="0";
//  }



  return (
    <div className="font-collingardemo relative">
      <BrowserRouter>
        <NavBar onChangePage={setPage} setUser={setUser} user={user} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/designers"
            element={<Designers key={creators.id} creators={creators} showDesigners={showDesigners} />}
          ></Route>
          <Route
            path="/shop"
            element={
              <Dom key={items.id} items={items} refresh={refresh} setRefresh={setRefresh} updateItem={updateItem} removeItem={removeItem} user={user}/>
            }
          ></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/login" element={<Login refresh={refresh} setRefresh={setRefresh}/>}></Route>
          <Route
            path="/cart"
            element={<ShoppingCart getUserData={getUserData} />}
          ></Route>
          <Route path="/signup" element={<SignUp refresh={refresh} setRefresh={setRefresh} setUser={setUser} />}></Route>
          <Route path="/community" element={<Community />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
