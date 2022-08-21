import logo from "./Images/logo.png";





import React from "react";

function NavBar() {
  return (
    <nav className="top-0 z-50 sticky bg-white">
      <div className="grid justify-items-center">
        <div className="translate-y-5">
          <a href="/">
            <img className="h-14" src={logo} />
          </a>
        </div>
        <div className="flex justify-between mt-10 w-full max-w-3xl pb-6">
          
            <a href="/designers">Designers</a>
            <a href="/shop">Shop</a>
            <a href="favorites">Favorites</a>
            <a href="cart">Shopping Cart</a>
            <a href="login"> Log In</a>
          
        </div>
      </div>

      {/* Bootstrap */}
      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div> */}
    </nav>

    // const [navBar, setNavBar] = useState(false)

    // const showSidebar = () => setNavBar(!navBar)

    // function handleClick(navBar){
    //     // setNavBar(navBar)
    //     console.log("Ive been clicked!")
    // }

    // turn div into a flex
    // set its z axis to 100
    // set its color and size to fill screen
    // {/* <div>
    //     <div className= "nav-wrapper">

    //         <div id="hamburger-menu" >
    //             <svg handleClick={handleClick} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    //             </svg>
    //             </div>

    //         <div id="topbar">
    //             <div id="header-logo" >
    //             <img src={logo}/>
    //             </div>
    //         </div> */}
    //     {/* <div>
    //         <nav className="navbar">
    //             <ul className="navbar-nav">
    //                 <li className="page-collection active-link">
    //                     <a href ="/">BFH</a>
    //                 </li>
    //                 <li className="page-collection">
    //                     <a href = "/about">ABOUT</a>
    //                 </li>
    //                 <li className="page-collection">
    //                     <a href = "/designers">DESIGNERS A-Z</a>
    //                 </li>
    //                 <li className="page-collection">
    //                     <a href = "/shop">SHOP</a>
    //                 </li>
    //             </ul>
    //         </nav>
    // </div>
    //  </div>
    // </div>
  );
}

export default NavBar;
