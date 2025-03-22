import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import { Dashboard, Signin, Signup, Verify } from "../pages";
import { ChatList, Messages, Navbar, UpdateProfile } from "../sections";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../utils/user.util";
import FadeLoader from "react-spinners/FadeLoader";
import { Profile } from "../pages";

function index() {
	const { onlineUsers, socket } = useSelector((state) => state.socket);
	const { authUser, isAuthenticated, authLoading } = useSelector(
		(state) => state.auth
	);


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

	if (authLoading && !authUser) {
		return (
			<div className="h-screen bg-background flex items-center justify-center">
				<FadeLoader color="gray" loading={authLoading} />
			</div>
		);
	}
	return (
		<div>
			<Navbar />

			<Routes>
				{/* Home/Root Route */}
				<Route index element={<Navigate to="/dashboard" />} />

				{/* Dashboard */}
				<Route
					path="/dashboard"
					element={
						isAuthenticated ? (
							<Dashboard />
						) : (
							<Navigate to="/auth/signin" />
						)
					}
				>
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
				<Route
					path="/auth/signup"
					element={
						isAuthenticated ? (
							<Navigate to="/dashboard" />
						) : (
							<Signup />
						)
					}
				/>
				<Route
					path="/auth/verify"
					element={
						isAuthenticated ? (
							<Navigate to="/dashboard" />
						) : (
							<Verify />
						)
					}
				/>
				<Route
					path="/auth/signin"
					element={
						isAuthenticated ? (
							<Navigate to="/dashboard" />
						) : (
							<Signin />
						)
					}
				/>

				{/* User Routes */}
				<Route path="/user/profile" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default index;
