import { useState } from "react";
import Calories from "../Calories/Calories";
import PreparingList from "../PreparingList/PreparingList";
import PropTypes from "prop-types";


const CookingList = ({cookingList}) => {

    const [caloriesList, setCaloriesList] = useState([]);

    const handleCaloriesList = (cook) =>{
        const newCaloriesList = [...caloriesList, cook];
        setCaloriesList(newCaloriesList);
    }

    return (
        <div className="border border-black md:w-1/3">
            <PreparingList cookingList={cookingList} handleCaloriesList={handleCaloriesList}  ></PreparingList>
            <Calories caloriesList={caloriesList}> </Calories>
        </div>
    );
};


CookingList.propTypes = {

    cookingList : PropTypes.array.isRequired,
    


}

export default CookingList;