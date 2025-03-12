import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

function GifPicker({ triggerRef, setShowGifPicker }) {
	const inputRef = useRef(null);
	const gridRef = useRef(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [width, setWidth] = useState(0);

	// Fetch GIF Instance.
	const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

	// Function to fetch GIFs.
	const fetchGifs = function (offset) {
		if (searchTerm) {
			return gf.search(searchTerm, { offset, limit: 10 });
		} else {
			return gf.trending({ offset, limit: 10 });
		}
	};

	// Initializing the Grid width.
	useEffect(() => {
		if (inputRef && inputRef.current) {
			setWidth(inputRef.current.offsetWidth);
		}
	}, []);

	useEffect(() => {
		function handleClickOutside({ target }) {
			if (
				triggerRef &&
				!triggerRef.current.contains(target) &&
				gridRef &&
				!gridRef.current.contains(target) &&
				inputRef &&
				!inputRef.current.contains(target)
			) {
				setShowGifPicker(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	return (
		<div className="w-full flex flex-col gap-2">
			<div className="relative w-full h-10 rounded-md bg-borderColor text-xs pl-4 pr-14 text-heading tracking-wider border border-transparent">
				<input
					ref={inputRef}
					type="text"
					className="absolute z-10 top-0 left-0 h-full w-full pl-4 pr-14 outline-none border-none"
					placeholder="Search GIF here..."
					onChange={(event) => setSearchTerm(event.target.value)}
				/>

				<span className="absolute z-0 right-4 top-1/2 -translate-y-1/2 text-2xl cursor-text text-bodyText">
					<IoSearchOutline />
				</span>
			</div>

			<div className="h-48 overflow-auto no-scrollbar" ref={gridRef}>
				<Grid
					width={width}
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
