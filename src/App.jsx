import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import { useEffect } from 'react'

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    fetch('recipes.json')
    .then(res=> res.json())
    .then(data=> setRecipes(data));    
  },[])

  return (
    <>
      <Header></Header>
      <div>
          <Recipes recipes={recipes}></Recipes>

      </div>
    </>
  )
}

export default App
