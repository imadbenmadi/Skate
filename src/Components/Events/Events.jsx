import React, { useState, useEffect } from "react";
import { IoSearchOutline, IoWarning } from "react-icons/io5";
import Card from "./Card";
import axios from "axios";

function Event() {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    const [filteredEvents, setFilteredEvents] = useState([]);

    const handleSearch = () => {
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            setSearch(searchInput.value);
            const filtered = events.filter(
                (event) =>
                    event.Title.toLowerCase().includes(searchInput) ||
                    event.Text.toLowerCase().includes(searchInput) ||
                    event.Description.toLowerCase().includes(searchInput)
            );
            setFilteredEvents(filtered);
        }
    };

    const fetchEvents = async () => {
        setLoading(true);

        try {
            const response = await axios.get(
                "https://backend.skate-consult.com/Events",
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status == 200) {
                const { totalPages, events } = response.data;
                setEvents(events);
            } else {
                setError(response.data);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
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
                <div className="pt-[90px]">
                    <div className="flex flex-col md:flex-row justify-between items-center mx-16 mb-2 font-semibold text-gray w-300px">
                        <div className="text-2xl w-screen md:w-fit text-center lg:text-3xl mb-2 ">
                            <span className="text-green2">Explore </span>
                            Skate Events
                        </div>
                        <div className="flex border-2 md:mr-10">
                            <input
                                type="text"
                                className="pl-2 py-1 w-[150px] md:w-[300px] focus:outline-none"
                                id="searchInput"
                            />
                            <button
                                className="px-2 border-l-2"
                                onClick={handleSearch}
                            >
                                <IoSearchOutline className="text-2xl" />
                            </button>
                        </div>
                    </div>

                    <div className="">
                        {events.length == 0 ? (
                            <div className="w-[80%] m-auto h-fit text-center pt-6 flex gap-1 text-2xl justify-center items-center text-gray">
                                <IoWarning />
                                No Events Found
                            </div>
                        ) : search == "" ? (
                            events.map((event) => (
                                <div
                                    key={event._id}
                                    className="w-[90vw] m-auto"
                                >
                                    <Card event={event} />
                                </div>
                            ))
                        ) : filteredEvents.length == 0 ? (
                            <div className="text-center text-gray-500">
                                No blogs match the selected filter.
                            </div>
                        ) : (
                            filteredEvents.map((blog) => (
                                <div key={blog._id} className="w-[80vw] m-auto">
                                    <Card blog={blog} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Event;
