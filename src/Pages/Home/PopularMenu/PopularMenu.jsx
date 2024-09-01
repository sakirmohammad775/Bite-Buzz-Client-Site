import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {
    const menu = UseMenu()
    const popularMenu = menu.filter(item => item.category === 'popular')
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
                    popularMenu.map(item => <MenuItem
                        key={item}
                        item={item}></MenuItem>)
                }
            </div>
        </>
    );
};

export default PopularMenu;