import { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import Notifications_items from "./Notifications_items";
import { useAppContext } from "../../../../../Context/AppContext";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import en from "../../../../../../public/en.png";
import ar from "../../../../../../public/ar.png";
import fr from "../../../../../../public/fr.png";
import { useNavigate } from "react-router-dom";
function Laptop_Nav_Items({
    Active_nav,
    isAuth,
    FirstName,
    Logout,
    LogoutClicked,
}) {
    const Navigate = useNavigate();
    const [unReaded_Notif, SetunReaded_Notif] = useState(false);
    const { Notifications, _id } = useAppContext();
    const [User_menu_open, setUser_menu_open] = useState(false);
    const [Notifications_open, setNotifications_open] = useState(false);
    useEffect(() => {
        if (isAuth && Notifications) {
            const hasUnreadNotification = Notifications.some(
                (notification) => !notification.Readed
            );
            SetunReaded_Notif(hasUnreadNotification);
        }
    }, [Notifications]);

    const [LanguageClicked, SetLanguageClicked] = useState(false);
    const toogle_LanguageClicked = () => {
        SetLanguageClicked(!LanguageClicked);
    };
    return (
        <div className="hidden  md:flex  items-center justify-center gap-3 lg:gap-7 text-base lg:text-lg text-black_text h-full ">
            <div className="flex gap-3 lg:gap-8">
                <div onClick={toogle_LanguageClicked} className="  relative ">
                    <div className=" flex items-center justify-center gap-1 cursor-pointer">
                        {/* <p>EN</p> */}
                        <img src={ar} alt="" className=" w-6" />

                        {LanguageClicked ? (
                            <FaAngleUp className=" text-lg" />
                        ) : (
                            <FaAngleDown className=" text-lg" />
                        )}
                    </div>

                    {LanguageClicked && (
                        <div
                            className=" cursor-pointer w-24 h-fit shadow-sm bg-white rounded-b-lg
                                    absolute -left-8 -bottom-[92px] 
                                 flex flex-col items-center justify-center "
                        >
                            <div
                                onClick={() => {
                                    window.localStorage.setItem(
                                        "language",
                                        "en"
                                    );
                                    Navigate("/en");
                                    SetLanguageClicked(false);
                                }}
                                className="  
                                        flex items-center justify-start gap-1
                                          text-center py-1 pl-2 w-[100px] border"
                            >
                                <img src={en} alt="" className=" w-4" />
                                <p className=" underline">English</p>
                            </div>
                            {/* <Link
                                        to={"/fr"}
                                        className="border-b w-[100px] text-center py-1 
                                        flex items-center justify-start gap-1 pl-2"
                                    >
                                        <img src={fr} alt="" className=" w-4" />
                                        <p className=" text-base">Français</p>
                                    </Link> */}
                            <div
                                onClick={() => {
                                    window.localStorage.setItem(
                                        "language",
                                        "ar"
                                    );
                                    Navigate("/ar");
                                    SetLanguageClicked(false);
                                }}
                                className=" w-[100px] text-green border-2 rounded-b-md text-center  font-sans py-1 
                                        flex items-center justify-start gap-3 pl-2"
                            >
                                <img src={ar} alt="" className=" w-4" />
                                <p className=" font-sans font-semibold ">
                                    العربية
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/ar"}
                        className={
                            !Active_nav
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        الرئيسية
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/ar/Services"}
                        className={
                            Active_nav == "Services"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        خدماتنا
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/ar/Courses"}
                        className={
                            Active_nav == "Courses"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        دوراتنا
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/ar/Events"}
                        className={
                            Active_nav == "Events"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        الاحداث
                    </Link>
                </div>
                <div className=" hover:text-green transition-colors cursor-pointer">
                    <Link
                        to={"/ar/Blogs"}
                        className={
                            Active_nav == "Blogs"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }
                    >
                        المقالات
                    </Link>
                </div>
                <div className="  transition-colors cursor-pointer">
                    <Link
                        to={"/ar/Contact"}
                        className={`${
                            Active_nav == "Contact"
                                ? "text-green hover:text-green select-none"
                                : "text-black_text hover:text-green select-none"
                        }`}
                    >
                        اتصل بنا
                    </Link>
                </div>
            </div>
            <div className="flex gap-2 justify-center items-center h-full">
                {/* <div className=" ">
                    <TbSettings
                        onClick={handleSettingsClick}
                        className="text-2xl text-gray cursor-pointer "
                    />
                </div> */}
                {isAuth ? (
                    <>
                        <div
                            className=" h-full flex items-center"
                            onMouseEnter={() => setNotifications_open(true)}
                            onMouseLeave={() => setNotifications_open(false)}
                        >
                            <div className=" relative flex items-center justify-center select-none">
                                <Link
                                    to={`/ar/Profile/${_id}/Notifications`}
                                    className=""
                                >
                                    <MdNotificationsNone className="text-gray text-2xl cursor-pointer" />
                                </Link>
                                {isAuth && unReaded_Notif && (
                                    <div className=" absolute w-2 h-2 rounded-full bg-red-600 right-0 top-0">
                                        {" "}
                                    </div>
                                )}
                            </div>

                            {Notifications_open && (
                                <div
                                    className="absolute py-2 top-full md:right-[4vw] lg:right-[8vw] xl:right-[10vw] 2xl:right-[12vw]
                                     bg-white w-[300px] shadow-md rounded border border-gray flex flex-col items-start"
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
                        <Link
                            to={`/ar/Profile/${_id}`}
                            className="select-none h-full "
                            onMouseEnter={() => setUser_menu_open(true)}
                            onMouseLeave={() => setUser_menu_open(false)}
                        >
                            <FaUserTie className="text-gray text-md cursor-pointer h-full" />
                        </Link>
                        {User_menu_open && (
                            <div
                                className="absolute py-2 top-full  md:right-[1vw] lg:right-[1vw]  xl:right-[4vw] 2xl:right-[8vw] 
                                     bg-white w-[160px] shadow-md rounded border border-gray flex flex-col items-start"
                                onMouseEnter={() => setUser_menu_open(true)}
                                onMouseLeave={() => setUser_menu_open(false)}
                            >
                                <Link
                                    to={`/ar/Profile/${_id}`}
                                    className="select-none flex items-center gap-3 pl-4 mb-1 "
                                    onClick={() => setUser_menu_open(false)}
                                >
                                    <FaUserTie className="text-gray text-2xl cursor-pointer" />
                                    <div className="flex flex-col">
                                        <span className="py-2 font-semibold text-gray text-xl">
                                            الحساب
                                        </span>
                                        <span className="text-sm break-all">
                                            <span className="text-sm break-all">
                                                {FirstName}
                                            </span>{" "}
                                        </span>
                                    </div>
                                </Link>
                                <div className="bg-gray w-full h-[1px]"></div>
                                <>
                                    {!LogoutClicked ? (
                                        <div
                                            className="text-red-600 rounded-b-xl flex items-center gap-2 pl-4 mt-4 mb-2 cursor-pointer"
                                            onClick={() => {
                                                Logout();
                                                setUser_menu_open(false);
                                            }}
                                        >
                                            <TbLogout />
                                            تسحيل الخروج
                                        </div>
                                    ) : (
                                        <div className=" w-full flex items-center justify-center mt-4 mb-2 text-red-600 m-auto">
                                            <span className="small-loader  w-full m-auto"></span>
                                        </div>
                                    )}
                                </>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <span className="bg-green text-[#fff]  text-center text-[16px] lg:text-xl p-1  lg:px-3 lg:py-1   rounded-lg cursor-pointer">
                            <Link to={"/ar/Login"} className="select-none">
                                تسجيل الدخول
                            </Link>
                        </span>
                        <span className="bg-blue text-[#fff] text-center text-[16px] lg:text-xl  p-1 lg:px-3 lg:py-1  rounded-lg cursor-pointer">
                            <Link to={"/ar/Register"} className="select-none">
                                حساب جديد
                            </Link>
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}

export default Laptop_Nav_Items;
