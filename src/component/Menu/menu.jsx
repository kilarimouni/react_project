import React from "react";
import "./menu.css"
import { menu_list } from "../../Images/data";
import { Prev } from "react-bootstrap/esm/PageItem";

const Menu=({category,setCategory})=>{
    return(
        <div className="menu" c>
         <h1>Explore our menu</h1>
         <p className="menu-text">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential </p>
         <div class="menu-list">
           {
            menu_list.map((item,index)=>{
                return(
                  <div  onClick={()=>setCategory(Prev===item.menu_name?"All":item.menu_name)} key={index} className="menu-item">
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=""/> 
                        <p>{item.menu_name}</p>
                  </div>
                )
            })
           }
         </div>
         <hr/>
        </div>
    )
}
export default Menu;