
import { IoSearchOutline } from "react-icons/io5";

function Search({ setSearch }) {
    const handleSearch = () => {
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            setSearch(searchInput.value);
        }
    };
    return (
        <div className=" flex border-2 md:mr-10">
            <input
                type="text"
                className=" pl-2 py-1 w-[150px] md:w-[300px]  focus:outline-none"
                id="searchInput"
            />
            <button className=" px-2 border-l-2" onClick={handleSearch}>
                <IoSearchOutline className=" text-2xl" />
            </button>
        </div>
    );
}

export default Search;
