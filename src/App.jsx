import React from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import About from "./components/common/About";
import Main from "./components/main/Main";

class App extends React.Component {

	render() {
		return (
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
			</Routes>
		);
	}
}

export default App;
