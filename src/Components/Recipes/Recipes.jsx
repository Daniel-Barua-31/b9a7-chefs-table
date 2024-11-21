import PropTypes from 'prop-types'; // ES6
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipes}) => {
    console.log(recipes);
    return (
        <div>
              <h1>Recipes : {recipes.length}</h1>          
              <div>
                  {
                    recipes.map(recipe=> <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                  }
              </div>
        
        </div>
    );
};


Recipes.propTypes = {
    recipes: PropTypes.array.isRequired
}


export default Recipes;