import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/home/01.jpg"
import image2 from "../../assets/home/02.jpg"
import image3 from "../../assets/home/03.png"
import image4 from "../../assets/home/04.jpg"
import image5 from "../../assets/home/05.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Banner = () => {
    return (
        <>
        <Carousel className="">
            <div><img src={image5}></img></div>
            <div><img src={image1}></img></div>
            <div><img src={image3}></img></div>
            <div><img src={image2}></img></div>
            <div><img src={image4}></img></div>
            
        </Carousel>
        </>
    );
};

export default Banner;