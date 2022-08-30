import { useEffect, useState } from "react";



function ShoppingCart({getUserData}){
    
    const [displayCart, setDisplayCart] = useState([])
    
    //admin delete from shop

    function handleRemove(product){
        let id = product.id;
        
        fetch(`/cart/${id}`, {
            method: "DELETE",
        })
        .then(r => { getUserData()
        })};

        useEffect(()=> {
        fetch("/displayCart")
        .then(res => res.json())
        .then(res => {
            setDisplayCart(res)
            // console.log(res)
        })
        }, [])
    // console.log(displayCart)
            let newArray = []
            {displayCart ? displayCart.map(item => {
                newArray.push(item)
            }):console.log("")}
            // console.log(newArray)
        
            const newCart = newArray.map(item => {
                // console.log(item.item.item_name)
                return(
                    <div key={item.id} className="font-serif font-thin">
                        <div className="text-center">
                            <div className="border-2">
                            <img className="object-fill" src={item.item.image}/>
                            </div>
                            <br></br>
                        <div>
                        {item.item.item_name}
                        <br></br>
                        ${item.item.price}0
                        <br></br>
                        {item.item.description}
                        
                        <button onClick={() => {handleRemove(item)}}>Remove From Cart</button>
                        
                    </div>
                    </div>
                    </div>
                
                )
            })
        // console.log("display is not empty")
    
    return(
        <div className="grid grid-flow-row grid-cols-3 pt-20 gap-5 max-w-3xl ml-auto mr-auto">
        {newCart}
        <div className="text-center mr-auto ml-auto" >
        <button>Check Out</button>
        </div>
        </div>
    )

}





export default ShoppingCart;