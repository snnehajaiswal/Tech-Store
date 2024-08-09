import { getDataFromLS } from "./getDataFromLS";
import { updateCartBillValue } from "./updateCartBillValue";
import { UpdateCartValue } from "./UpdateCartValue";
export const removeFromCart = (id) =>{ 
    let cartProduct =  getDataFromLS();  
    const currentCardElement = document.querySelector(`#card${id}`); 
 
    console.log(currentCardElement) 
    console.log(cartProduct) 
 
    cartProduct = cartProduct.filter((currProd) => currProd.id !== id) 
 
    console.log(cartProduct) 
 
     
    if(currentCardElement){ 
        currentCardElement.remove(); 
    } 
 
 
    localStorage.setItem("cartProductLs",JSON.stringify(cartProduct)) 
    UpdateCartValue(cartProduct) 
    updateCartBillValue();
}