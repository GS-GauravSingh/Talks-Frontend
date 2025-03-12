import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Dashboard, Signin, Signup, Verify } from "../pages";
import { ChatList, Messages, UpdateProfile } from "../sections";

function index() {
	// Initializing the application theme once on component mount.
	useEffect(() => {
		const theme = localStorage.getItem("talks-theme");
		const root = document.documentElement;

		if (theme && JSON.parse(theme) === "dark") {
			root.classList.add("dark");
		}
	}, []);

	return (
		<Routes>
			{/* Home/Root Route */}
			<Route index element={<Navigate to="/dashboard" />} />

			{/* Dashboard */}
			<Route path="/dashboard" element={<Dashboard />}>
				<Route
					path=""
					element={
						<>
							<ChatList />
							<Messages />
						</>
					}
				/>

				<Route path="update-profile" element={<UpdateProfile />} />
				<Route path="change-password" element={<UpdateProfile />} />
			</Route>

			{/* Authentication Routes */}
			<Route path="/auth/signup" element={<Signup />} />
			<Route path="/auth/verify" element={<Verify />} />
			<Route path="/auth/signin" element={<Signin />} />
		</Routes>
	);
}

export default index;
