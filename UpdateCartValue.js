export function UpdateCartValue(arrayforLocalStorage){
         const cartValue=document.getElementById("cart-value")
        cartValue.innerText= arrayforLocalStorage.length
        
}