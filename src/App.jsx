import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import { useEffect } from 'react'
import Calories from './Components/Calories/Calories'
import PreparingList from './Components/PreparingList/PreparingList'

function App() {

  const [recipes, setRecipes] = useState([]);

  const [cookingList, setCookingList] = useState([]);

  useEffect(()=>{
    fetch('recipes.json')
    .then(res=> res.json())
    .then(data=> setRecipes(data));    
  },[]);

  const handleCookList = (recipe) =>{
    const newCookingList = [...cookingList,recipe]
    setCookingList(newCookingList); 
  }

  const [caloriesList, setCaloriesList] = useState([]);

  const handleCaloriesList = (cook,recipe_id) =>{
        const newCaloriesList = [...caloriesList, cook];
        setCaloriesList(newCaloriesList);
        console.log(recipe_id);
        console.log(cookingList);
        const remaining = cookingList.filter(item=> item.recipe_id!= recipe_id);
        setCookingList(remaining);
  }



  return (
    <>
      <Header></Header>
      <div className='flex justify-center '>
        <div className='flex max-w-screen-xl gap-6'>
          <Recipes recipes={recipes} handleCookList={handleCookList}></Recipes>
          <div className='flex flex-col border border-gray-400 rounded-xl p-9 gap-6'>
            <PreparingList cookingList={cookingList} handleCaloriesList={handleCaloriesList}></PreparingList>
            <Calories caloriesList={caloriesList} ></Calories>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
