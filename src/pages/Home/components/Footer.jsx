export const Footer = () => {
	return (
		<>
			<div className="px-6 md:px-8 xl:px-[76px] grid md:grid-col-4 grid-cols-2 gap-5 mt-12 md:mt-16 xl:mt-[150px] justify-between mb-12 md:mb-16 xl:mb-20">
				<ul className="flex flex-col gap-[9px]">
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							About
						</a>
					</li>
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Shop
						</a>
					</li>
				</ul>
				<ul className="flex flex-col gap-[9px]">
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Shop single
						</a>
					</li>
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Blog
						</a>
					</li>
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Contact
						</a>
					</li>
				</ul>
				<ul className="flex flex-col gap-[9px]">
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Terms & condition
						</a>
					</li>
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Services
						</a>
					</li>
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Privacy Policy
						</a>
					</li>
				</ul>
				<ul className="flex flex-col gap-[9px]">
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							Address, Location, 123
						</a>
					</li>
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							yourinfo@gmail.com
						</a>
					</li>
					<li>
						<a href="#" className="text-primary uppercase hover:text-tertiary text-sm md:text-lg md:leading-[27px]">
							111 333 444 555
						</a>
					</li>
				</ul>
			</div>
			<div className="border-t border-t-primary py-5 text-primary font-light text-center leading-[27px]">
				© 2023 Beanie. Designed by{" "}
				<a href="#" className="font-normal underline hover:text-tertiary">
					TemplatesJungle
				</a>
			</div>
		</>
	);
};
