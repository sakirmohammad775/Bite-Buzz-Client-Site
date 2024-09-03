import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";



const Cover = ({ img, title,details }) => {
    return (
        <>
            <Parallax

                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the"
                strength={-200}
            >
                <div className="hero h-[700px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{details}</p>
                            <Link to={`/order/${title}`}><button className='btn btn-outline border-0 text-xl border-b-4 mt-5 text-white'>Order Your Favourite Food</button></Link>
                        </div>
                    </div>
                </div>
            </Parallax>


        

        </>
    );
};

export default Cover;