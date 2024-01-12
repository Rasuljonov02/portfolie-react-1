import React from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

import "aos/dist/aos.css";
import "./main.css";

AOS.init();

interface HomeProps {}

const Hedr: React.FC<HomeProps> = () => {
	const navigate = useNavigate();

	const links: NodeListOf<HTMLParagraphElement> = document.querySelectorAll("#hedrlar")!;

	links.forEach((link) => {
		link.addEventListener("click", () => {
			links.forEach((a) => {
				a.classList.remove("active");
			});

			link.classList.add("active");
		});
	});

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
					<p
						id="hedrlar"
						onClick={() => navigate("/home")}
						className="home active hover:text-white"
					>
						Home
					</p>
					<p id="hedrlar" onClick={() => navigate("/front")} className="home hover:text-white">
						Front-end skills
					</p>
					<p id="hedrlar" onClick={() => navigate("/portfolio")} className="home hover:text-white">
						Portfolio
					</p>
					<p id="hedrlar" onClick={() => navigate("/contact")} className="home hover:text-white">
						Kontakt
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hedr;
