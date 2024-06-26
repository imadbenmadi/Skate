import React from "react";
import { useOutletContext } from "react-router-dom";
import { LuMailOpen } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import Card from "./Card";
function Profile_Notifications() {
    const location = useLocation();

    const { user, fetchData } = useOutletContext();
    // const context = useOutletContext();
    if (!user)
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    const Notifications = user.user.Notifications;
    const userId = user.user._id;

    if (!Notifications)
        return (
            <div className="pt-4">
                <div className="text-center text-gray font-semibold text-2xl">
                    Current User Notifications:
                </div>
                <div className="text-center text-gray font-semibold text-2xl flex items-center gap-4">
                    <LuMailOpen />
                    No Notifications
                </div>
            </div>
        );
    Notifications.sort((a, b) => {
        if (a.Readed !== b.Readed) {
            return a.Readed ? 1 : -1; // Unread notifications first
        }
        // Within each category, sort by newest first
        return new Date(b.Date) - new Date(a.Date);
    });
    return (
        <div>
            <div className=" p-6 text-3xl text-gray font-semibold ">
                Notifications
            </div>
            <div className=" w-full overflow-y-hidden">
                {Notifications.length === 0 ? (
                    <div className=" text-gray font-semibold text-xl text-center flex items-center justify-center gap-2 md:gap-4 mt-12">
                        <LuMailOpen />
                        No Notifications
                    </div>
                ) : (
                    Notifications.map((notification, index) => (
                        <Card
                            key={index}
                            user={user}
                            notification={notification}
                            index={index}
                            fetchData={fetchData}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Profile_Notifications;
