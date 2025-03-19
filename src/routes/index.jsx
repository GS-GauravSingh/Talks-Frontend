import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { Dashboard, Signin, Signup, Verify } from "../pages";
import { ChatList, Messages, UpdateProfile } from "../sections";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../utils/user.util";

function index() {
	const { authUser, isAuthenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Initializing the application theme once on component mount.
	useEffect(() => {
		const theme = localStorage.getItem("talks-theme");
		const root = document.documentElement;

		if (theme && JSON.parse(theme) === "dark") {
			root.classList.add("dark");
		}
	}, []);

	// Fetching User Details, JWT cookie is sent along with the request and the backend responds back with the user details, if token is valid. Otherwise, the user is unauthorized.
	useEffect(() => {
		async function checkAuthStatus() {
			try {
				if (!isAuthenticated) {
					const response = await dispatch(getMe());
				}
			} catch (error) {
				// console.log(error);
				if (error.status === 401) {
					// Unauthorized
					navigate("/auth/signin");
				}
			}
		}

		checkAuthStatus();
	}, [isAuthenticated]);

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
