import PropTypes  from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";



const Recipe = ({recipe, handleCookList}) => {
    const {recipe_name,recipe_image,short_description, ingredients, preparing_time, calories } = recipe

    var ingredientThree = ingredients.slice(0,3);

    return (
        <div className="border-2 border-gray-400 p-6 space-y-4 rounded-lg ">
            <img className="w-60 rounded-xl" src={recipe_image} alt={recipe_name} />
            <h1 className="text-xl font-semibold" >{recipe_name}</h1> 
            <p className="text-sm text-slate-600"> {short_description} </p>
            <hr />
            
            <h1 className="text-xl font-semibold"> Ingredient: {ingredients.length} </h1>
            <ul>
                {
                    ingredientThree.map((ingredient,idx)=> <li className=" m-4" key={idx} > {ingredient} </li>)
                }
            </ul>
            <hr />

            <div className="flex space-x-3">
                <div className="flex ">
                    <IoTimeOutline />
                    <p className="text-sm"> {preparing_time} </p>
                </div>
                <div className="flex ">
                    <FaFire />
                    <p className="text-sm"> {calories} </p>
                </div>
            </div>

            <button className=" bg-green-500 px-3 py-6 rounded-2xl font-semibold" onClick={()=>handleCookList(recipe)} > Want to Cook </button>

        </div>
    );
};



Recipe.propTypes = {
    recipe : PropTypes.object.isRequired,
    handleCookList : PropTypes.func.isRequired,
}


export default Recipe;