import imageLeft from "../../../assets/icons/description-left.svg";
import imageRight from "../../../assets/icons/description-right.svg";

export const SubscribeUs = () => {
	return (
		<div className="relative mt-16 p-8 lg:p-20">
			<img src={imageLeft} alt="Leaf Left" className="absolute left-0 -top-10 hidden lg:block w-64" />
			<div className="flex items-center flex-col text-center">
				<div className="uppercase text-5xl font-normal text-primary">Subscribe us</div>
				<div className="mt-2 text-base font-light text-primary">Subscribe to our newsletter for discount codes and updates.</div>
				<div className="flex items-center relative w-full max-w-[740px] lg:w-2/3 mt-10">
					<input
						type="text"
						className="border border-[#D2CFCC] w-full text-primary text-sm rounded-full h-12 pl-4 placeholder:text-gray-700 placeholder:italic focus:outline-none "
						placeholder="Write your email address here..."
					/>
					<button className="absolute top-1/2 transform -translate-y-1/2 right-0 border px-7 h-12 border-solid rounded-full text-primary border-primary hover:bg-primary hover:text-tertiary transition-all duration-100 ease-linear font-semibold text-xs md:text-lg">
						Subscribe
					</button>
				</div>
				<div className="mt-10 flex gap-6 items-center">
					<svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer group">
						<path
							className="group-hover:fill-tertiary transition-all duration-100 ease-linear"
							d="M9.50333 0.25C6.21833 0.25 4.29167 1.92304 4.29167 5.73518V9.08929H0.125V13.1071H4.29167V22.75H8.45833V13.1071H11.7917L12.625 9.08929H8.45833V6.415C8.45833 4.97902 8.94417 4.26786 10.3417 4.26786H12.625V0.414732C12.23 0.363304 11.0792 0.25 9.50333 0.25Z"
							fill="#D2CFCC"
						/>
					</svg>
					<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer group">
						<path
							className="group-hover:fill-tertiary transition-all duration-100 ease-linear"
							d="M6.13835 0.5C3.11193 0.5 0.625 3.14909 0.625 6.38091V14.6191C0.625 17.8473 3.10852 20.5 6.13835 20.5H13.8616C16.8881 20.5 19.375 17.8509 19.375 14.6191V6.38182C19.375 3.15273 16.8915 0.5 13.8616 0.5H6.13835ZM6.13835 2.31818H13.8616C14.362 2.31746 14.8576 2.42206 15.32 2.62598C15.7824 2.82989 16.2026 3.12912 16.5564 3.50653C16.9102 3.88393 17.1907 4.33208 17.3819 4.82532C17.5731 5.31856 17.6711 5.84718 17.6705 6.38091V14.6191C17.6711 15.1528 17.5731 15.6814 17.3819 16.1747C17.1907 16.6679 16.9102 17.1161 16.5564 17.4935C16.2026 17.8709 15.7824 18.1701 15.32 18.374C14.8576 18.5779 14.362 18.6825 13.8616 18.6818H6.1392C5.63876 18.6827 5.14309 18.5781 4.68058 18.3743C4.21807 18.1704 3.79782 17.8712 3.44392 17.4938C3.09001 17.1164 2.80941 16.6682 2.61818 16.1749C2.42696 15.6816 2.32887 15.1529 2.32955 14.6191V6.38182C2.32876 5.84802 2.42674 5.31929 2.61786 4.82595C2.80898 4.33261 3.08949 3.88435 3.44332 3.50685C3.79714 3.12935 4.21733 2.83004 4.67979 2.62606C5.14226 2.42209 5.63791 2.31746 6.13835 2.31818ZM15.0335 4.30727C14.932 4.30679 14.8314 4.32777 14.7375 4.36899C14.6436 4.41021 14.5583 4.47086 14.4865 4.54744C14.4147 4.62401 14.3579 4.715 14.3192 4.81515C14.2806 4.91529 14.2609 5.02261 14.2614 5.13091C14.2614 5.58909 14.604 5.95455 15.0335 5.95455C15.1351 5.95515 15.2358 5.93426 15.3298 5.89309C15.4238 5.85193 15.5092 5.7913 15.5811 5.7147C15.653 5.63812 15.7099 5.54709 15.7486 5.44688C15.7873 5.34668 15.807 5.23928 15.8065 5.13091C15.807 5.02254 15.7873 4.91514 15.7486 4.81494C15.7099 4.71473 15.653 4.6237 15.5811 4.54711C15.5092 4.47052 15.4238 4.40989 15.3298 4.36872C15.2358 4.32756 15.1351 4.30667 15.0335 4.30727ZM10 5.04545C7.1875 5.04545 4.88636 7.5 4.88636 10.5C4.88636 13.5 7.1875 15.9545 10 15.9545C12.8125 15.9545 15.1136 13.5 15.1136 10.5C15.1136 7.5 12.8125 5.04545 10 5.04545ZM10 6.86364C11.8946 6.86364 13.4091 8.47909 13.4091 10.5C13.4091 12.5209 11.8946 14.1364 10 14.1364C8.1054 14.1364 6.59091 12.5209 6.59091 10.5C6.59091 8.47909 8.1054 6.86364 10 6.86364Z"
							fill="#D2CFCC"
						/>
					</svg>
					<svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer group">
						<path
							className="group-hover:fill-tertiary transition-all duration-100 ease-linear"
							d="M20.375 2.30266C19.6261 2.63402 18.8317 2.85106 18.0183 2.94652C18.8747 2.434 19.5155 1.62797 19.8217 0.678431C19.0163 1.15548 18.1357 1.49234 17.2175 1.67462C16.655 1.07354 15.9245 0.655523 15.1211 0.474937C14.3177 0.294351 13.4786 0.359548 12.7127 0.662049C11.9469 0.964551 11.2899 1.49036 10.827 2.17111C10.3642 2.85186 10.117 3.65605 10.1175 4.47912C10.1175 4.80147 10.1533 5.11382 10.2258 5.41284C8.59376 5.33255 6.99693 4.90942 5.53941 4.17103C4.08188 3.43264 2.79638 2.39556 1.76667 1.12738C1.40081 1.75334 1.20892 2.46563 1.21083 3.19057C1.21083 4.61239 1.93333 5.86846 3.03667 6.60394C2.38496 6.58327 1.74772 6.40675 1.17833 6.08918V6.14166C1.17777 7.08885 1.50536 8.00702 2.10543 8.74012C2.70549 9.47322 3.54102 9.97603 4.47 10.1631C3.86589 10.3287 3.23177 10.3532 2.61667 10.2347C2.87867 11.0496 3.38878 11.7623 4.07574 12.2733C4.76269 12.7843 5.59218 13.0681 6.44833 13.085C5.5972 13.7528 4.62268 14.2462 3.58054 14.537C2.5384 14.8279 1.44911 14.9105 0.375 14.78C2.25044 15.9864 4.43395 16.6269 6.66417 16.625C14.2125 16.625 18.3408 10.3746 18.3408 4.95389C18.3408 4.77898 18.3342 4.59906 18.3275 4.42331C19.1296 3.8428 19.8228 3.12516 20.375 2.30349V2.30266Z"
							fill="#D2CFCC"
						/>
					</svg>
					<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer group">
						<path
							className="group-hover:fill-tertiary transition-all duration-100 ease-linear"
							d="M23.3739 2.91199C23.2388 2.42121 22.9741 1.97373 22.6065 1.61434C22.2388 1.25495 21.781 0.996261 21.279 0.864158C19.43 0.375 12 0.375 12 0.375C12 0.375 4.57004 0.375 2.72103 0.864158C2.21895 0.996261 1.76117 1.25495 1.39351 1.61434C1.02585 1.97373 0.761202 2.42121 0.626058 2.91199C0.280807 4.75526 0.113266 6.62613 0.125638 8.5C0.113266 10.3739 0.280807 12.2447 0.626058 14.088C0.761202 14.5788 1.02585 15.0263 1.39351 15.3857C1.76117 15.745 2.21895 16.0037 2.72103 16.1358C4.57004 16.625 12 16.625 12 16.625C12 16.625 19.43 16.625 21.279 16.1358C21.781 16.0037 22.2388 15.745 22.6065 15.3857C22.9741 15.0263 23.2388 14.5788 23.3739 14.088C23.7192 12.2447 23.8867 10.3739 23.8744 8.5C23.8867 6.62613 23.7192 4.75526 23.3739 2.91199ZM9.62513 11.9821V5.01786L15.7913 8.5L9.62513 11.9821Z"
							fill="#D2CFCC"
						/>
					</svg>
				</div>
			</div>
			<img src={imageRight} alt="Leaf Right" className="absolute right-0 top-12 md:top-20 lg:top-28 xl:top-36 hidden lg:block w-64" />
		</div>
	);
};
