import { getDataFromLS } from "./getDataFromLS"; 
 
export const fetchDataFromLocalStorage = (id,price) =>{ 
    const cartProduct =  getDataFromLS();  
     
    console.log(cartProduct) 
 
    let existingProduct = cartProduct.find((currPro) =>{ 
       return currPro.id === id; 
    }) 
    
    let quantity = 1; 
    if(existingProduct){ 
        quantity = existingProduct.quantity; 
        price  = existingProduct.price; 
    } 
 return { quantity , price } 
}