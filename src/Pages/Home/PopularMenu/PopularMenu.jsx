import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setMenu(data))
    })
    return (
        <>
        <SectionTitle heading='From our menu' subHeading="Popular Items"></SectionTitle>
        </>
    );
};

export default PopularMenu;