import React from "react";
import { Navbar } from "../sections";
import { Outlet } from "react-router";

function Dashboard() {
	return (
		<div className="h-screen w-full overflow-hidden flex flex-row border border-borderColor">
			<Navbar />

			<Outlet />
		</div>
	);
}

export default Dashboard;
