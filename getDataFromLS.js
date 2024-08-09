import { UpdateCartValue } from "./UpdateCartValue"

export function getDataFromLS(){
    let cartProduct=localStorage.getItem("cartProductLs")
    if(!cartProduct){
        return []
    }
    cartProduct=JSON.parse(cartProduct)
   UpdateCartValue(cartProduct)
    return cartProduct
}