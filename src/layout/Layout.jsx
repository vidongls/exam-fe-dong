import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="pt-9  bg-secondary">
			<div className="px-[76px]">
				<Header />
			</div>
			{children}
		</div>
	);
};

export default Layout;
