
import PropTypes from "prop-types";
import Table from "../Table/Table";



const PreparingList = ({cookingList, handleCaloriesList}) => {

    return (
        <div className="flex flex-col space-y-6">
            <h1 className="text-center font-semibold text-2xl">Want to Cook : {cookingList.length}</h1>
            <hr />

            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>colories</th>
                    </tr>
                    {
                        cookingList.map((cook,idx)=> <Table key={idx} cook={cook} handleCaloriesList={handleCaloriesList} ></Table> )
                    }
                </table>
            </div>
            
        </div>
    );
};

PreparingList.propTypes = {
    cookingList : PropTypes.array.isRequired,
    handleCaloriesList : PropTypes.func.isRequired,
}

export default PreparingList;