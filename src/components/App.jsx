import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Slider from "./Slider";

function App() {
	return (
		<div className="background">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Slider />} />
			</Routes>
		</div>
	);
}

export default App;
