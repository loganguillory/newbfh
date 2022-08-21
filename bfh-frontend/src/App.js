import Designers from './Designers';
import Dom from './Dom';
import Favorites from './Favorites';
import HomePage from './HomePage';
import Login from './Login';
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart'
import SignUp from './SignUp';
import React,{useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
const [page, setPage] = useState("/")
const [creators, setCreators] = useState([])
const [userFaves, setUserFaves] = useState([])
const [user, setUser] = useState("")

// designer data
  useEffect(() =>{
  fetch('/designers')
  .then(r => r.json())
  .then(data =>{
      setCreators(data)
  })
}, [])

// Favorites data
useEffect(() =>{
  fetch("/favorites")
  .then(r => r.json())
  .then(data =>{
    setUserFaves(data)
  })
}, [])

// ShopData
// useEffect(() => {
//   fetch()
// })
// // function handleClick() {
//   console.log("clicked");
// }

  return (
    <div className="font-collingardemo relative">
      <BrowserRouter>
      <NavBar onChangePage={setPage}/>
        <Routes>
        <Route path="/"element={<HomePage/>}></Route>
        <Route path="/designers"element={<Designers creators={creators} />}></Route>
        <Route path="/shop" element={<Dom/>}></Route>
        <Route path="favorites" element={<Favorites userFaves={userFaves}/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path= "cart" element={<ShoppingCart/>}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
