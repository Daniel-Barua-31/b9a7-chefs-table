
import PropTypes from "prop-types";

const Table = ({cook, handleCaloriesList}) => {
    console.log(cook);

    const { recipe_name, preparing_time , calories, recipe_id } = cook;

    return (
        <tr className="m-2 p-3">
            <td> {recipe_name} </td>
            <td> {preparing_time} </td>
            <td> {calories} </td>
            <td> <button className="bg-green-500 px-2 py-5 rounded-3xl" onClick={()=>handleCaloriesList(cook,recipe_id)}> Preparing </button> </td>
        </tr> 
    );
};


Table.propTypes = {
    cook: PropTypes.object.isRequired,
    handleCaloriesList : PropTypes.func.isRequired,
}

export default Table;