
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({ item }) => {
  const {user}=useAuth()
  const { name, image, price, recipe } = item
  const navigate=useNavigate()
  //careful for right pathname
  const location =useLocation()

  const handleAddToCart=food=>{
    if(user && user.email){
      //send cart item to the database
      const cartItem={
        menuId:_id,
        email:user.email,
        name,
        image,
        price
      }
      axios.post('http://localhost:5000/carts',cartItem)
      .then(res=>{
        console.log(res.data)
      })
    }
    else{
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login"
      }).then((result) => {
        if (result.isConfirmed) {
          //send to the login page //careful to set the pathname for login
          navigate('/login',{state:{from:location}})
        }
      });
    }
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
            <button className='btn btn-outline border-0 border-b-4 mt-5 text-black'
            onClick={()=>handleAddToCart(item)}
            >Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;