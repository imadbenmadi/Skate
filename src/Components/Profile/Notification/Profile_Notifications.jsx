import React from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
// import { location } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Card from "./Card"
function Profile_Notifications() {
    const location = useLocation();

    const [user, setUser] = useOutletContext();
    if (!user)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    const Notifications = user.user.Notifications;
    // const userId = location.pathname.split("/")[2];
    const userId = user.user._id;
    
    if (!Notifications)
        return (
            <div className="pt-4">
                <Link
                    to={`/Dashboard/Users/${userId}`}
                    className="select-none mb-4 w-fit m-auto bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1"
                >
                    <IoMdArrowRoundBack />
                    <div>Back to user</div>
                </Link>
                <div className="text-center text-gray font-semibold text-2xl">
                    Current User Notifications:
                </div>
                <div className="text-center text-gray font-semibold text-2xl flex items-center gap-4">
                    <LuMailOpen />
                    No Notifications
                </div>
            </div>
        );
    return (
        <div>
            <div className=" p-6 text-3xl text-gray font-semibold ">
                Notifications{" "}
            </div>
            <div>
                {Notifications.map((notification, index) => (
                    <Card
                        key={index}
                        notification={notification}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Profile_Notifications;