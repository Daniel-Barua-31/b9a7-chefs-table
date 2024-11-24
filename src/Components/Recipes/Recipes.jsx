import PropTypes from 'prop-types'; // ES6
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipes,handleCookList}) => {
    // console.log(recipes);
    return (
        <div className='md:w-2/3'>        
              <div className=' grid grid-cols-2 gap-6'>
                  {
                    recipes.map(recipe=> <Recipe key={recipe.recipe_id} recipe={recipe} handleCookList={handleCookList} ></Recipe>)
                  }
              </div>
        </div>
    );
};


Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    handleCookList: PropTypes.func.isRequired,
}


export default Recipes;