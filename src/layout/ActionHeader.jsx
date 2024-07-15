import iconSearch from "../assets/icons/search-icon.svg";
// import heartIcon from "../assets/icons/solar_heart-outline.svg";

const ActionHeader = () => {
	return (
		<div className="border-t border-b border-primary pl-[34px] flex-1 py-[28px] flex justify-end items-center gap-[50px]">
			<div className="flex items-center relative w-[260px]">
				<input
					type="text"
					className=" border border-secondary-50 text-primary text-sm rounded-full h-12 pl-[22px] w-full placeholder:text-primary focus:ring-secondary-50 focus-visible:border-secondary-50 focus:border-secondary-50 ring-0"
					placeholder="Search here..."
				/>
				<img src={iconSearch} alt="" className="absolute top-1/2 -translate-y-1/2 right-4" />
			</div>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group cursor-pointer">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.624 4.42358C3.965 5.18158 2.75 6.98558 2.75 9.13658C2.75 11.3336 3.65 13.0276 4.938 14.4796C6.001 15.6756 7.287 16.6676 8.541 17.6336C8.839 17.8636 9.135 18.0926 9.426 18.3216C9.952 18.7366 10.421 19.0996 10.874 19.3646C11.326 19.6286 11.69 19.7496 12 19.7496C12.31 19.7496 12.674 19.6296 13.126 19.3646C13.579 19.0996 14.048 18.7366 14.574 18.3216C14.864 18.0916 15.161 17.8636 15.459 17.6336C16.713 16.6676 17.999 15.6756 19.062 14.4796C20.351 13.0276 21.25 11.3336 21.25 9.13658C21.25 6.98658 20.035 5.18158 18.376 4.42358C16.764 3.68658 14.598 3.88158 12.54 6.02058C12.47 6.09317 12.3862 6.1509 12.2934 6.19034C12.2006 6.22977 12.1008 6.2501 12 6.2501C11.8992 6.2501 11.7994 6.22977 11.7066 6.19034C11.6138 6.1509 11.53 6.09317 11.46 6.02058C9.402 3.88158 7.236 3.68658 5.624 4.42358ZM12 4.45958C9.688 2.38958 7.099 2.09958 5 3.05858C2.786 4.07358 1.25 6.42558 1.25 9.13758C1.25 11.8026 2.36 13.8366 3.817 15.4766C4.983 16.7896 6.41 17.8886 7.671 18.8586C7.957 19.0786 8.234 19.2926 8.497 19.5006C9.01 19.9046 9.56 20.3346 10.117 20.6606C10.674 20.9856 11.31 21.2506 12 21.2506C12.69 21.2506 13.326 20.9856 13.883 20.6606C14.441 20.3346 14.99 19.9046 15.503 19.5006C15.7769 19.2847 16.0522 19.0707 16.329 18.8586C17.589 17.8886 19.017 16.7886 20.183 15.4766C21.64 13.8366 22.75 11.8026 22.75 9.13758C22.75 6.42558 21.215 4.07358 19 3.06058C16.901 2.10058 14.312 2.39058 12 4.45958Z"
					fill="#362C27"
					className="group-hover:fill-red-600"
				/>
			</svg>

			<div className="flex items-center">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="group cursor-pointer mr-0.5"
				>
					<path
						d="M3.74238 20.555C4.94238 22 7.17438 22 11.6394 22H12.3614C16.8264 22 19.0594 22 20.2594 20.555M3.74238 20.555C2.54238 19.109 2.95438 16.915 3.77738 12.525C4.36238 9.405 4.65438 7.844 5.76538 6.922M20.2594 20.555C21.4594 19.109 21.0474 16.915 20.2244 12.525C19.6394 9.405 19.3464 7.844 18.2354 6.922M18.2354 6.922C17.1254 6 15.5364 6 12.3614 6H11.6394C8.46438 6 6.87638 6 5.76538 6.922"
						stroke="#362C27"
						strokeWidth="1.5"
						className="group-hover:stroke-red-600"
					/>
					<path
						d="M9 6V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5V6"
						stroke="#362C27"
						strokeWidth="1.5"
						strokeLinecap="round"
						className="group-hover:stroke-red-600"
					/>
				</svg>
				<span className="text-primary text-lg ">(01)</span>
			</div>
		</div>
	);
};

export default ActionHeader;
