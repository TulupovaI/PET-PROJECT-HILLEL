import React, { useEffect, useState } from "react";
import DeliciousPizza from '../images/f1.png';
import allProducts from "../API/fetch-products";
import Product from "./Product";
function OurMenu(){

  const [products, setProducts] = useState([]);
 
  useEffect(()=>
  {
      let products1 = [];
      async function hej(){
          let products1 = await allProducts();
          setProducts(products1);
          addProducts(products1);
      }

  if(products1.length === 0){
          hej();
      }

  },[])
 
  function addProducts(products){
    let allTypeProducts = [];
    let allProducts2 = [];
    for(const key in products){
        allTypeProducts.push(key);
        
    }
    allTypeProducts.forEach((item) => {
            for(const key in products[item]){
                 allProducts2.push(products[item][key]);
                 
             }
             
        })

        setProducts(allProducts2);
        console.log(allProducts2)
  }

  


    return(
        <>
         <section className="food_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center">
      <h2>Our menu</h2>
      </div>

      <ul className="filters_menu">
        <li className="active" data-filter="*">All</li>
        <li data-filter=".burger">Burger</li>
        <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li>
      </ul>
     
      <div className="filters-content">
       
        {products && 
       <div className="row grid">{products.map((item)=> <Product props={item} />)} </div>
        }

         
          </div>
    </div>
  </section>


  
        
        </>
    )
}
export default OurMenu;