import React from "react";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "./main.css";

AOS.init();

interface HomeProps {}

const Hedr: React.FC<HomeProps> = () => {
	return (
		<div>
			<div className="h-[60px] flex items-center justify-between pl-[60px] pr-[60px] pt-[40px] text-white">
				<div data-aos="fade-down-left" className="flex items-center">
					<h1 className="logo">R ... </h1>
					<h1 className="logo1"> M</h1>
				</div>
				<div
					data-aos="fade-down-right"
					className="flex items-center w-[500px] justify-between gap-3"
				>
					<NavLink id="hedrlar" className={({ isActive }) => (isActive ? "active" : "home")} to="/home">
						Home
					</NavLink>

					<NavLink
						id="hedrlar"
						className={({ isActive }) => (isActive ? "active" : "home")}
						to="/front"
					>
						Front-end skills
					</NavLink>

					<NavLink
						id="hedrlar"
						className={({ isActive }) => (isActive ? "active" : "home")}
						to="/portfolio"
					>
						Portfolio
					</NavLink>

					<NavLink
						id="hedrlar"
						className={({ isActive }) => (isActive ? "active" : "home")}
						to="/contact"
					>
						Kontakt
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Hedr;
