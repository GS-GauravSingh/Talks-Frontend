import { CaretDown, Globe } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function CountrySelect({ formData, setFormData }) {
	return (
		<div className="flex flex-col w-full gap-1">
			<label htmlFor="countrySelect" className="text-heading text-sm">
				Select Country
			</label>
			<div className="relative w-full cursor-pointer">
				<select
					value={formData?.country}
					name="country"
					onChange={(event) => {
						setFormData((prev) => {
							return {
								...prev,
								[event.target.name]: event.target.value,
							};
						});
					}}
					id="countrySelect"
					className={`flex items-center border border-borderColor w-full  h-10 rounded-md outline-none appearance-none pl-12  text-[0.8rem] bg-borderColor ${formData?.country ? "text-heading" : ""}`}
				>
					<option
						value=""
						className={`bg-borderColor`}
						defaultValue
						disabled
					>
						Select Country
					</option>
					<option
						value="India"
						className="bg-borderColor text-bodyText"
					>
						India
					</option>
					<option value="UK" className="bg-borderColor text-bodyText">
						UK
					</option>
				</select>

				<span className="flex items-center absolute left-4 top-1/2 -translate-y-1/2 text-heading">
					<Globe size={20} weight="regular" />
				</span>
				<span className="flex items-center absolute right-4 top-1/2 -translate-y-1/2 text-heading">
					<CaretDown size={20} weight="regular" />
				</span>
			</div>
		</div>
	);
}

export default CountrySelect;
