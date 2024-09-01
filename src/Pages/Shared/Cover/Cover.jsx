import { Parallax } from "react-parallax";



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
                            <button className="btn btn-primary">Explore</button>
                        </div>
                    </div>
                </div>
            </Parallax>


        

        </>
    );
};

export default Cover;