import CoverImg from "../../assets/shop/banner2.jpg"
import Cover from "../Shared/Cover/Cover"
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import UseMenu from "../../Hooks/UseMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = UseMenu()
    const {category}=useParams()
    console.log(category)
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <>
            <Cover img={CoverImg} title={"OUR SHOP"}></Cover>
            <Tabs className="text-center items-center 
             " defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="my-5">
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={salad}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={dessert}></OrderTab></TabPanel>
                <TabPanel> <OrderTab items={drinks}></OrderTab></TabPanel>
            </Tabs>
        </>
    );
};

export default Order;