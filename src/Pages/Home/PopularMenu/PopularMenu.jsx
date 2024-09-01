import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category==='popular')
    //         setMenu(popularItems)
    //     })
    // })
    return (
        <>
        <SectionTitle heading='From our menu' subHeading="Popular Items"></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item=><MenuItem 
                key={item}
                item={item}></MenuItem>)
            }
        </div>
        </>
    );
};

export default PopularMenu;