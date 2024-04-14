import { useOutletContext } from "react-router-dom";
import { IoWarning } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "./Card";
function Profile_Services() {
    const { user, fetchData } = useOutletContext();
    if (!user || !fetchData)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    const userServices = user.user.Services;
    if (!userServices || Object.keys(userServices).length === 0)
        return (
            <div className=" flex items-center justify-center gap-4 flex-col">
                <div className="flex items-center  text-gray text-2xl gap-2 py-8">
                    <IoWarning className="text-2xl" />
                    <div className="text-center text-gray">
                        You have No Services{" "}
                    </div>
                </div>
                <Link
                    className="text-green rounded-md cursor-pointer  text-xl 
                    flex items-center gap-2 px-3 py-1 w-fit mx-auto underline "
                    to={"/Services"}
                >
                    <div>Exprlore Skate Services</div>
                    <FaArrowRight />
                </Link>
            </div>
        );
    return (
        <div>
            <div className="pl-4 text-gray font-semibold  text-2xl mt-6 ">
                <span className="text-green m-auto">Your</span> Services :
            </div>
            {userServices.map((Service, index) => (
                <Card
                    item={Service}
                    key={index}
                    // onDelete={() => handleDeleteService(Service._id)}
                />
            ))}
        </div>
    );
}

export default Profile_Services;
