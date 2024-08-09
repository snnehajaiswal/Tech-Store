import { getDataFromLS } from "./getDataFromLS";
export const updateCartBillValue=()=>{
    const productSubTotal = document.querySelector(".Sub-Total-price"); 
const productTotal = document.querySelector(".Total-price") 
let localStorageProduct = getDataFromLS(); 
let intitialValue = 0  
 
let TotalSumForBill = localStorageProduct.reduce((accum , currProd) =>{ 
      return accum + currProd.price  
},intitialValue) 
TotalSumForBill = Number(TotalSumForBill.toFixed(2)) 
 
productSubTotal.innerText = TotalSumForBill ; 
productTotal.innerText = `₹${TotalSumForBill + 100}`; 
}