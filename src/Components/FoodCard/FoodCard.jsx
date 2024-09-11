

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item
  const handleAddToCart=food=>{
    console.log(food)
  }
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <p className="absolute right-0 mr-12  mt-12 text-xl  bg-slate-900 text-black bg-transparent">${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className='btn btn-outline border-0 border-b-4 mt-5 text-white'
            onClick={()=>handleAddToCart(item)}
            >Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;