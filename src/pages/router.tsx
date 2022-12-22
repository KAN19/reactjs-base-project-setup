import Fallback from "components/fallback";
import React from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/homepage"));

type Props = {};

function RouterApp({}: Props) {
	return (
		<BrowserRouter>
			<Routes>
				{/* Auth Routes */}
				{/* <Route path="/" element={<Protection />}> */}
				<Route path="/" element={<Fallback page={<Home />} />} />
				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default RouterApp;
