import logo from "../assets/logo.svg";
import ActionHeader from "./ActionHeader";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<div className="flex items-center justify-between mb-[60px]">
			<Navbar />
			<img src={logo} alt="" />
			<ActionHeader />
		</div>
	);
};

export default Header;
