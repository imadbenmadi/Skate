import React from "react";
import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Card from "./Card";
import axios from "axios";
import { IoWarning } from "react-icons/io5";

function event() {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [event, setevent] = useState([]);
    const [error, setError] = useState(null);
    const handleSearch = () => {
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            setSearch(searchInput.value);
        }
    };
    const filteredevent = event.filter((course) => {
        const matchesSearch =
            !search ||
            course.Title.toLowerCase().includes(search.toLowerCase());
        return matchesSearch;
    });
    const fetchevent = async () => {
        setLoading(true);

        try {
            const response = await axios.get("http://localhost:3000/Events", {
                withCredentials: true,
                validateStatus: () => true,
            });

            if (response.status === 200) {
                setevent(response.data);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };
    useEffect(() => {
        fetchevent();
    }, []);
    if (error) {
        return <ErrorPage />;
    }
    return (
        <div>
            {loading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    <span className="loader"></span>
                </div>
            ) : (
                <div className="h-screen  overflow-auto custom-overflow pt-[90px]">
                    <div className=" flex flex-col md:flex-row justify-between items-center mx-16 mb-2 font-semibold text-gray w-300px">
                        <div className=" text-2xl w-screen md:w-fit text-center lg:text-3xl mb-2 ">
                            <span className=" text-green2">Explore </span>
                            Skate Events
                        </div>
                        {/* Search bar  */}
                        <div className=" flex border-2 md:mr-10">
                            <input
                                type="text"
                                className=" pl-2 py-1 w-[150px] md:w-[300px]  focus:outline-none"
                                id="searchInput"
                            />
                            <button
                                className=" px-2 border-l-2"
                                onClick={handleSearch}
                            >
                                <IoSearchOutline className=" text-2xl" />
                            </button>
                        </div>
                    </div>

                    <div className="">
                        {event.length == 0 ? (
                            <div className=" w-[80%] m-auto h-fit text-center pt-6 flex gap-1 text-2xl justify-center items-center text-gray">
                                <IoWarning />
                                No Events Founded
                            </div>
                        ) : search === "" ? (
                            event.map((event) => (
                                <div
                                    key={event._id}
                                    className="w-[90vw] m-auto "
                                >
                                    <Card event={event} />
                                </div>
                            ))
                        ) : filteredevent.length === 0 ? (
                            <div className="text-center text-gray-500">
                                No event match the selected filter.
                            </div>
                        ) : (
                            filteredevent.map((event) => (
                                <div
                                    key={event._id}
                                    className="w-[80vw] m-auto "
                                >
                                    <Card event={event} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default event;
