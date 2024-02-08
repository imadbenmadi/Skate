import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import Course from "../../../../public/Course.png";
import { FaUserTie } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { TbSettings } from "react-icons/tb";
import Swal from "sweetalert2";
import Notifications_items from "./Notifications_items";
import { useAppContext } from "../../../Context/AppContext";

function Laptop_Nav_Items({
    Active_nav,
    isAuth,
    FirstName,
    LastName,
    _id,
    user_Open,
    Toogle_User_Open,
    Logout,
}) {
    const { Notifications } = useAppContext();

    const [User_menu_open, setUser_menu_open] = useState(false);
    const [Notifications_open, setNotifications_open] = useState(false);
    const handleSettingsClick = () => {
        Swal.fire({
            title: "Settings",
            html: `
                <div className="flex flex-col gap-4 justify-start items-start w-[200px]">
                    <div class="mb-4 flex items-center justify-center gap-4 w-[200px] m-auto">
                        <label for="language" class=" text-sm font-medium text-gray-700">Language:</label>
                        <select id="language" class="mt-1  w-[100px] m-auto py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <div clasName='flex gap-3 w-[200px] items-center justify-start'>
                        <label for="darkMode" class="text-sm font-medium text-gray-700">Dark Mode</label>
                        <input type="checkbox" id="darkMode" class="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    </div>
                </div>
        
      `,
            showCancelButton: true,
            focusConfirm: false,
            preConfirm: () => {
                const language = document.getElementById("language").value;
                const darkMode = document.getElementById("darkMode").checked;
                // You can handle language and dark mode settings here
                console.log("Selected language:", language);
                console.log("Dark mode enabled:", darkMode);
            },
        });
    };
    return (
        <div className="hidden  md:flex items-center justify-center gap-7 text-lg text-black_text h-full ">
            <div className="flex gap-5">
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Services"}
                        className={
                            Active_nav === "Services"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }
                        // onClick={() => setActive_nav("Services")}
                    >
                        Services
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Courses"}
                        className={
                            Active_nav === "Courses"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }
                    >
                        Courses
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Events"}
                        className={
                            Active_nav === "Events"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }
                        // onClick={() => setActive_nav("Events")}
                    >
                        Events
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/Blogs"}
                        className={
                            Active_nav === "Blogs"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }
                        // onClick={() => setActive_nav("Blogs")}
                    >
                        Blogs
                    </Link>
                </div>
                <div className="  transition-colors cursor-pointer">
                    <Link
                        to={"/Contact"}
                        className={`${
                            Active_nav === "Contact"
                                ? "text-green hover:text-green"
                                : "text-black_text hover:text-green"
                        }`}
                        // onClick={() => setActive_nav("Contact")}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center h-full">
                <div className=" ">
                    <TbSettings
                        onClick={handleSettingsClick}
                        className="text-2xl text-gray cursor-pointer "
                    />
                </div>
                {isAuth ? (
                    <>
                        <div
                            className=" h-full"
                            onMouseEnter={() => setNotifications_open(true)}
                            onMouseLeave={() => setNotifications_open(false)}
                        >
                            <div className="relative flex items-center h-full">
                                <MdNotificationsNone className="text-gray text-2xl cursor-pointer h-full" />
                                {Notifications.filter(
                                    (notification) => !notification.Readed
                                ).length > 0 && (
                                    <div className=" w-2 h-2 bg-green rounded-full absolute top-[30%] -right-[5%]"></div>
                                )}
                            </div>
                            {Notifications_open && (
                                <div
                                    className="absolute py-2 top-full md:right-[4vw] lg:right-[8vw]  xl:right-[12vw] 2xl:right-[12vw] bg-white w-[300px] shadow-md rounded border border-gray flex flex-col items-start"
                                    onMouseEnter={() =>
                                        setNotifications_open(true)
                                    }
                                    onMouseLeave={() =>
                                        setNotifications_open(false)
                                    }
                                >
                                    <Notifications_items />
                                </div>
                            )}
                        </div>
                        <div
                            className=" h-full"
                            onMouseEnter={() => setUser_menu_open(true)}
                            onMouseLeave={() => setUser_menu_open(false)}
                        >
                            <FaUserTie className="text-gray text-md cursor-pointer h-full" />
                            {/* Laptop user small menu */}
                            {User_menu_open && (
                                <div
                                    className="absolute py-2 top-full  md:right-[1vw] lg:right-[1vw]  xl:right-[4vw] 2xl:right-[8vw]  bg-white w-[160px] shadow-md rounded border border-gray flex flex-col items-start"
                                    onMouseEnter={() => setUser_menu_open(true)}
                                    onMouseLeave={() =>
                                        setUser_menu_open(false)
                                    }
                                >
                                    {/* <div className="triangle-up"></div> */}
                                    <Link
                                        to={`/Profile`}
                                        className="flex items-center gap-3 pl-4 mb-1 "
                                        onClick={() => setUser_menu_open(false)}
                                    >
                                        <FaUserTie className="text-gray text-2xl cursor-pointer" />
                                        <div className="flex flex-col">
                                            <span className="underline font-semibold text-gray text-xl">
                                                Profile
                                            </span>
                                            <span className="text-sm break-all">
                                                <span className="text-sm break-all">
                                                    {FirstName}
                                                </span>{" "}
                                                {/* <span className="text-sm break-all">
                                                    {" "}
                                                    {LastName}
                                                </span> */}
                                            </span>
                                        </div>
                                    </Link>
                                    <div className="bg-gray w-full h-[1px]"></div>
                                    <div
                                        className="text-red-600 rounded-b-xl flex items-center gap-2 pl-4 mt-4 mb-2 cursor-pointer"
                                        onClick={() => {
                                            Logout();
                                            setUser_menu_open(false);
                                        }}
                                    >
                                        <TbLogout />
                                        Logout
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <span className="bg-green text-[#fff] px-3 py-1 text-xl rounded-lg cursor-pointer">
                        <Link to={"/Login"}>Login</Link>
                    </span>
                )}
            </div>
        </div>
    );
}

export default Laptop_Nav_Items;
