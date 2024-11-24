
import PropTypes from "prop-types";
import TableDetailsCalories from "../TableDetailsCalories/TableDetailsCalories";

const Calories = ({caloriesList}) => {
    console.log(caloriesList);
    return (
        <div className="flex flex-col space-y-6">
            <h1 className=" text-center font-semibold text-2xl">Currently Cooking : {caloriesList.length}</h1>
            <hr />
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>colories</th>
                    </tr>
                    {
                        caloriesList.map((caloriesObj,idx)=> <TableDetailsCalories key={idx} caloriesObj={caloriesObj}></TableDetailsCalories>)
                    }
                </table>
            </div>
        </div>
    );
};

Calories.propTypes = {
    caloriesList : PropTypes.array.isRequired,
}

export default Calories;