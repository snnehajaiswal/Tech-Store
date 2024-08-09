import products from "./api/products.json"
import {homeQuantityToggle} from "./homeQuantityToggle"
import { addToCart } from "./addToCart";
const toggle=document.querySelectorAll(".icon");
const sidebar=document.querySelector(".side-bar");
const sliderContent=document.querySelector(".slider");
const cardContent=document.querySelector(".card");
const AboutContent=document.querySelector(".about-wapper")
const Commonheading=document.querySelector(".common-heading")
const productContainer=document.querySelector(".product-container");
const productTemplate=document.querySelector(".product-template");
const productheading=document.querySelector(".product-heading")
const NewArrivalheading=document.querySelector(".New-Arrival-heading")
const NewArrival=document.querySelector(".New-Arrival-container")
const footer=document.querySelector(".footer")
const[btn1,btn2]=[...toggle]
btn1.addEventListener('click',()=>{
    sidebar.classList.toggle("open");
    sliderContent.classList.toggle("dynamic-content")
    cardContent.classList.toggle("dynamicContent")
    AboutContent.classList.toggle("dynamicContent")
    Commonheading.classList.toggle("dynamicContent")
    productContainer.classList.toggle("dynamicContent")
    NewArrivalheading.classList.toggle("dynamicContent")
    NewArrival.classList.toggle("dynamicContent")
    footer.classList.toggle("dynamicContent")
})
btn2.addEventListener('click',()=>{
    sidebar.classList.toggle("open");
    sliderContent.classList.toggle("dynamic-content")
    cardContent.classList.toggle("dynamicContent")
    AboutContent.classList.toggle("dynamicContent")
    Commonheading.classList.toggle("dynamicContent")
    productContainer.classList.toggle("dynamicContent")
    productheading.classList.toggle("dynamicContent")
    NewArrivalheading.classList.toggle("dynamicContent")
    NewArrival.classList.toggle("dynamicContent")
    footer.classList.toggle("dynamicContent")
})
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 5000); 

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
products.forEach((curProduct)=>{
    const {brand,category,description,id,image,name,price,stock}=curProduct;
    const productClone=document.importNode(productTemplate.content,true);
    productClone.querySelector(".product-wapper").setAttribute("id",`card${id}`);
    productClone.querySelector(".category-heading").textContent=category;
    productClone.querySelector(".name-heading").textContent=name;
    productClone.querySelector(".image").src=image;
    productClone.querySelector(".image").alt=brand;
    productClone.querySelector(".Stock-span").textContent=stock;
    productClone.querySelector(".Discount-price").textContent= `₹${price}`;
    productClone.querySelector(".Actual-price").textContent=`₹${
        price*4
    }`;
    productClone.querySelector(".description").textContent=description;
    productClone.querySelector(".btn").addEventListener('click',(event)=>{
        homeQuantityToggle(event,id,stock);
    })
    productClone.querySelector(".cart-btn").addEventListener('click',(event)=>{
        addToCart(event,id,stock)
    })
    productContainer.append(productClone);
})
