import { useEffect, useState } from "react";


const UseMenu = () => {
    const [menu,setMenu]=useState([])
    const [loading,setLoading]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>setMenu(data) )
    })
    return[menu,loading]
};

export default UseMenu;