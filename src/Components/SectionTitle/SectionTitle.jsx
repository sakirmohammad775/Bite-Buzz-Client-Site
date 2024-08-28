

const SectionTitle = ({heading ,subHeading}) => {
    return (
        <>
        <div className="md:w-3/12">
            <p className="text-yellow-600">---{subHeading}---</p>
            <p className="text-4xl uppercase border-y-4">{heading}</p>
        </div>
        </>
    );
};

export default SectionTitle;