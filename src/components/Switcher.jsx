// Filename - Components/Switcher.js

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseDarkSide from "./UseDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = UseDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
				style={{ marginBottom: "2rem" ,marginTop:"2rem" ,color:"black" , backgroundColor:"lightpink" , borderRadius:"50%" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</>
	);
}
