    export const homeQuantityToggle = (event,id,stock) =>{ 
    const currentCardElement = document.querySelector(`#card${id}`); 
    let productQuantity = currentCardElement.querySelector(".Quantity-span") 
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1 
    if((event.target.className === "Increment")){ 
       if(quantity < stock){ 
         quantity +=1; 
       } 
    }   
    if((event.target.className === "Decrement")){ 
         if(quantity > 1){ 
             quantity -=1; 
         } 
    }  
    productQuantity.innerText = quantity; 
    productQuantity.setAttribute("data-quantity",quantity)   
}
