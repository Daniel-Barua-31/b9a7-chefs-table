
import PropTypes from "prop-types";

const TableDetailsCalories = ({caloriesObj}) => {
    
    const {recipe_name, preparing_time , calories} = caloriesObj

    console.log(caloriesObj);
    
    return (
        <tr>
            <td> {recipe_name} </td>
            <td> {preparing_time} </td>
            <td> {calories} </td>
        </tr>
    );
};

TableDetailsCalories.propTypes = {
    caloriesObj : PropTypes.object.isRequired,
}

export default TableDetailsCalories;