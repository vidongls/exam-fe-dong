import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="pt-3 md:pt-8 lg:pt-9 bg-secondary">
			<div className="px-3 md:px-8 xl:px-[76px]">
				<Header />
			</div>
			{children}
		</div>
	);
};

export default Layout;
