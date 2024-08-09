import products from "./api/products.json"
import { getDataFromLS } from "../getDataFromLS";
import { fetchDataFromLocalStorage } from "../fetchDataFromLocalStorage";
import { removeFromCart } from "../removeFromCart";
import { cartIncrementDecrement } from "../cartIncrementDecrement";
import { updateCartBillValue } from "../updateCartBillValue";
const toggle=document.querySelectorAll(".icon");
const AddToCartSidebar=document.querySelector(".side-bar")
const AddToCartContent=document.querySelector(".AddToCart-Content");
const AddToCartTemplate=document.querySelector(".AddToCartTemplate");
const productcontainer=document.querySelector(".product-container")
const producttemplate=document.querySelector(".product-Template")
const productBill=document.querySelector(".productBill")
const[btn1,btn2]=[...toggle]
btn1.addEventListener('click',()=>{
    AddToCartSidebar.classList.toggle("open")
    productContainer.classList.toggle("dynamicContent")
    productBill.classList.toggle("dynamic")
})
btn2.addEventListener('click',()=>{
    AddToCartSidebar.classList.toggle("open")
    productContainer.classList.toggle("dynamicContent")
    productBill.classList.toggle("dynamic")
})
const cartProduct=getDataFromLS();


let cartProducts=products.filter((currPro)=>{
    return cartProduct.some((currElem)=>{
        return currElem.id === currPro.id ;
    })
})
const showCartProducts=()=>{
    cartProducts.forEach((product)=>{
       const {id,name,brand,price,category,description,image,stock}=product;

       let productClone=document.importNode(producttemplate.content,true); 
        let lsData=fetchDataFromLocalStorage(id,price)

       let productQuantity=productClone.querySelector(".Quantity-span")
       productClone.querySelector(".product-wapper").setAttribute("id",`card${id}`) 

       productClone.querySelector(".category").textContent = category 
        productClone.querySelector(".image").src = image 
        productClone.querySelector(".name").textContent = name; 
        productClone.querySelector(".Discount-price").textContent = lsData.price;
        productClone.querySelector(".remove-btn").addEventListener('click',(event)=>{
               removeFromCart(id);
        })
        productClone.querySelector(".Quantity").addEventListener("click",(event)=>{ 
            cartIncrementDecrement(event,id,stock,price) 
       }) 
       productQuantity.innerText = lsData.quantity 
       productcontainer.append(productClone)
    })
}
showCartProducts();
updateCartBillValue();


