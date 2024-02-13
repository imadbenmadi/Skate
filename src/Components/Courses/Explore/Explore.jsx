import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import ExploreCCourses from "./ExploreCourses";
import { useState } from "react";
function Explore({ courses }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);
    console.log("courses : ", courses);
    return (
        <div className=" pt-8">
            <div className=" flex justify-between items-center mx-16 mb-2">
                <div className=" text-3xl">Explore Ower Courses</div>
                <Search setSearch={setSearch} />
            </div>
            <div className=" flex">
                <div className=" w-[25%] bg-green">
                    <Filter filter={filter} setFilter={setFilter} />
                </div>

                <div className=" w-[75%] ">
                    <ExploreCCourses
                        search={search}
                        filter={filter}
                        courses={courses}
                    />
                </div>
            </div>
        </div>
    );
}

export default Explore;
