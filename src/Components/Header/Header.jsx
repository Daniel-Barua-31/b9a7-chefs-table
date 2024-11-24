
import Profile from  '../../assets/Images/profile.png'

const Header = () => {
    return (
        <div className="flex justify-evenly mt-12 items-center">

            <div>
                <h2 className="text-2xl font-bold"> Recipes Calories </h2>
            </div>
            <div>
                <div className="flex space-x-4">
                    <h3>Home</h3>
                    <h3>Recipes</h3>
                    <h3>About</h3>
                    <h3>Search</h3>
                </div>
            </div>
            <div className="flex space-x-4">
                <input className="bg-slate-200 rounded-2xl px-6 py-3" type="text" placeholder="Search" /> 
                <img className="w-8 rounded-xl" src={Profile} alt="profile" />
            </div>
        </div>
    );
};

export default Header;