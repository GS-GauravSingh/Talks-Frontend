import React, { useEffect, useRef, useState } from "react";
import commonStyles from "../commonStyles";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";

function GifPicker() {
    const [searchTerm, setSearchTerm] = useState("");
    const [gridWidth, setGridWidth] = useState(null);
    const gridRef = useRef(null);

    // useEffect hook - just to set the width of the grid component, where gifs has to be shown.
    useEffect(() => {
        if (!gridRef.current) {
            return;
        }

        setGridWidth(gridRef.current.offsetWidth);
    }, []);

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

    // Function for fetching the GIFs.
    async function fetchGifs(offset) {
        console.log(Date.now());

        if (searchTerm) {
            return await gf.search(searchTerm, { offset: offset, limit: 20 });
        } else {
            return await gf.trending({ offset: offset, limit: 20 });
        }
    }

    // Implementing Debounce Functionality
    function debounce(func, delay) {
        let timerId = null;
        return (...args) => {
            if (timerId) {
                clearTimeout(timerId);
            }

            timerId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }

    // Function to debounce fetchGIfs funcions.
    const debounceFetchGIfs = debounce(fetchGifs, 5000);

    return (
        <div ref={gridRef} className="flex flex-col gap-2">
            <input
                type="text"
                name=""
                id=""
                placeholder="Serach GIF here..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                    debounceFetchGIfs(0); // 0 - offset
                }}
                className={`w-full ${commonStyles.inputBackground} h-10 rounded-full outline-none border border-transparent focus-within:border-darkCyan text-black dark:text-white text-xs pl-4 pr-4 tracking-wide`}
            />

            <div className="w-full overflow-auto no-scrollbar h-48">
                <Grid
                    width={gridWidth}
                    columns={8}
                    gutter={6}
                    fetchGifs={fetchGifs}
                    key={searchTerm}
                />
            </div>
        </div>
    );
}

export default GifPicker;
