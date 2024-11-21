import PropTypes  from "prop-types";

const Recipe = ({recipe}) => {
    const {recipe_name,recipe_image,short_description,} = recipe
    return (
        <div className="border-2 border-black p-6">
            <img className="w-60 rounded-xl" src={recipe_image} alt={recipe_name} />
            <h1 className="text-xl font-semibold" >{recipe_name}</h1> 
            <p className="text-sm text-slate-600"> {short_description} </p>
            <hr />
        </div>
    );
};



Recipe.propTypes = {
    recipe : PropTypes.object.isRequired
}


export default Recipe;