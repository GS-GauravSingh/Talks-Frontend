import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Dashboard, Signin, Signup, Verify } from "../pages";
import { ChatList, Messages } from "../sections";

function index() {
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
			</Route>

			{/* Authentication Routes */}
			<Route path="/auth/signup" element={<Signup />} />
			<Route path="/auth/verify" element={<Verify />} />
			<Route path="/auth/login" element={<Signin />} />

			{/* User Routes */}
			<Route path="/user/profile" element={<Dashboard />} />
		</Routes>
	);
}

export default index;
