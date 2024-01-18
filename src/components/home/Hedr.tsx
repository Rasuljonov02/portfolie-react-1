import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";

import "aos/dist/aos.css";
import "./main.css";

AOS.init();

interface HomeProps {}

const Hedr: React.FC<HomeProps> = () => {
	const navigate = useNavigate();
	const [isActiveHome, setIsActiveHome] = React.useState(false);
	const [isActiveFront, setIsActiveFront] = React.useState(false);
	const [isActivePortfolio, setIsActivePortfolio] = React.useState(false);
	const [isActiveContact, setIsActiveContact] = React.useState(false);

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
					<Link
						id="hedrlar"
						onClick={() => {
							navigate("/home");
							setIsActiveHome(true);
							setIsActiveFront(false);
							setIsActivePortfolio(false);
							setIsActiveContact(false);
						}}
						className={`home ${isActiveHome && "active"} hover:text-white`}
						to={"/home"}
					>
						Home
					</Link>
					<Link
						id="hedrlar"
						onClick={() => {
							navigate("/front");
							setIsActiveHome(false);
							setIsActiveFront(true);
							setIsActivePortfolio(false);
							setIsActiveContact(false);
						}}
						className={`home ${isActiveFront && "active"} hover:text-white`}
						to={"/front"}
					>
						Front-end skills
					</Link>
					<Link
						id="hedrlar"
						onClick={() => {
							navigate("/portfolio");
							setIsActiveHome(false);
							setIsActiveFront(false);
							setIsActivePortfolio(true);
							setIsActiveContact(false);
						}}
						className={`home ${isActivePortfolio && "active"} hover:text-white`}
						to={"/portfolio"}
					>
						Portfolio
					</Link>
					<Link
						id="hedrlar"
						onClick={() => {
							navigate("/contact");
							setIsActiveHome(false);
							setIsActiveFront(false);
							setIsActivePortfolio(false);
							setIsActiveContact(true);
						}}
						className={`home ${isActiveContact && "active"} hover:text-white`}
						to={"/contact"}
					>
						Kontakt
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hedr;
