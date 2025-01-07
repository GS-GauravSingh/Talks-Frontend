import React, { useState } from "react";
import commonStyles from "../commonStyles";
import { Globe } from "@phosphor-icons/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

function CountrySelect() {
    const [selectedCountry, setSelectedCountry] = useState("");
    return (
        <div className="flex flex-col gap-1 group">
            <label
                htmlFor=""
                className="text-sm text-gunmetalGray dark:text-white group-focus-within:text-darkCyan"
            >
                Select Country
            </label>
            <div
                className={`${commonStyles.inputBackground} px-4 rounded-lg h-10 w-full z-[1] relative border border-transparent group-focus-within:border-darkCyan`}
            >
                <select
                    name=""
                    id=""
                    value={selectedCountry}
                    className={`w-full appearance-none bg-transparent h-full absolute left-0 top-0 cursor-pointer outline-none z-10 pl-10 text-sm ${selectedCountry !== "" && "text-gunmetalGray dark:text-white"}`}
                    onChange={function (event) {
                        setSelectedCountry(event.target.value);
                    }}
                >
                    <option value="" disabled className={`${commonStyles.inputBackground} text-gunmetalGray dark:text-white`}>
                        Select
                    </option>
                    <option value="India" className={`${commonStyles.inputBackground} text-gunmetalGray dark:text-white`}>India</option>
                    <option value="America" className={`${commonStyles.inputBackground} text-gunmetalGray dark:text-white`}>America</option>
                    <option value="China" className={`${commonStyles.inputBackground} text-gunmetalGray dark:text-white`}>China</option>
                    <option value="UK" className={`${commonStyles.inputBackground} text-gunmetalGray dark:text-white`}>UK</option>
                    <option value="Russia" className={`${commonStyles.inputBackground} text-gunmetalGray dark:text-white`}>Russia</option>
                </select>

                <span className="absolute left-3 top-1/2 -translate-y-1/2 z-[1] group-focus-within:text-darkCyan">
                    <Globe size={18} weight="regular" />
                </span>

                <span className="absolute right-3 top-1/2 -translate-y-1/2 z-[1] group-focus-within:text-darkCyan">
                    <CaretDown size={18} weight="regular" />
                </span>
            </div>
        </div>
    );
}

export default CountrySelect;
