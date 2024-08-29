

const SectionTitle = ({heading ,subHeading}) => {
    return (
        <>
        <div className="mx-auto text-center md:w-3/12 my-8">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
        </div>
        <h3>hello</h3>
        </>
    );
};

export default SectionTitle;