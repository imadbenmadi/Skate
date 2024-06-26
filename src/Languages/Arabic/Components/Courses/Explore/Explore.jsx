import Search from "./Search";
import Filter from "./Filter";
import Explorecourses from "./ExploreCourses";
import { useState } from "react";
import Mobile_Filter from "./Mobile_Filter";
import { IoWarning } from "react-icons/io5";

function Explore({ courses, Courses_Categories }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);
    if (!courses || courses.length == 0)
        return (
            <div className=" w-full h-screen flex items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    return (
        <div className=" pt-[30px]">
            <div className=" flex flex-col md:flex-row justify-between items-center mx-16 mb-2 font-semibold text-gray w-300px">
                <div className="   flex gap-2">
                    {Courses_Categories && Courses_Categories.length > 0 && (
                        <div className=" md:hidden">
                            <Mobile_Filter
                                filter={filter}
                                setFilter={setFilter}
                                Courses_Categories={Courses_Categories}
                            />
                        </div>
                    )}
                    <Search setSearch={setSearch} />
                </div>
                <div className=" text-2xl w-screen md:w-fit text-center lg:text-3xl mb-2 ">
                    <span className=" text-green2">دوراتنا </span>
                    التدريبية{" "}
                </div>
            </div>

            <div className="hidden md:flex h-[calc(100vh-135px)] border-t-2 border-gray_white">
                <div className="hidden md:block w-[20%] bg-gray_white">
                    <Filter
                        filter={filter}
                        setFilter={setFilter}
                        Courses_Categories={Courses_Categories}
                    />
                </div>
                {courses.length == 0 ? (
                    <div className=" w-[80%] h-fit text-center pt-6 flex gap-1 text-2xl justify-center items-center text-gray">
                        <IoWarning />
                        لم يتم العثور على أي دورات
                    </div>
                ) : (
                    <div className=" w-[80%]  ">
                        <Explorecourses
                            search={search}
                            filter={filter}
                            courses={courses}
                        />
                    </div>
                )}
            </div>
            <div className="md:hidden">
                {courses.length == 0 ? (
                    <div className=" w-[80%] m-auto h-fit text-center pt-6 flex gap-1 text-2xl justify-center items-center text-gray">
                        <IoWarning />
                        لم يتم العثور على أي دورات
                    </div>
                ) : (
                    <Explorecourses
                        search={search}
                        filter={filter}
                        courses={courses}
                    />
                )}
            </div>
        </div>
    );
}

export default Explore;
