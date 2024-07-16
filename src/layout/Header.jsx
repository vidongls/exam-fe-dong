import logo from "../assets/logo.svg";
import ActionHeader from "./ActionHeader";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<div className="flex items-center justify-between mb-6 md:mb-12 xl:mb-[60px]">
			<Navbar />
			<img src={logo} alt="" className="w-16 h-20 md:w-[120px] xl:h-[210px]" />
			<ActionHeader />
		</div>
	);
};

export default Header;
