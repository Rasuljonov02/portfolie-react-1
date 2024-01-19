import React, { useState, useEffect } from "react";
import AOS from "aos";
import { gsap } from "gsap";
import Footer from "../home/Footr";
import Hedr from "../home/Hedr";
import pen from "../../img/image 14.png";
import kom from "../../img/image 15.png";
import dom from "../../img/image 16.png";

import "aos/dist/aos.css";

AOS.init();
interface FrontProps {}

const Front: React.FC<FrontProps> = (props: FrontProps) => {
	const [skills, setSkills] = useState([
		{ name: "HTML", percentage: 0 },
		{ name: "CSS", percentage: 0 },
		{ name: "JavaScript", percentage: 0 },
		{ name: "React", percentage: 0 },
		{ name: "Sass", percentage: 0 },
		{ name: "Tailwind CSS", percentage: 0 },
		{ name: "TypeScript", percentage: 0 },
	]);

	useEffect(() => {
		skills.forEach((skill, index) => {
			gsap.to(`#progress-bar-${index}`, {
				width: `${skill.percentage}%`,
				duration: 4,
				ease: "power2.inOut",
			});

			gsap.to(`#percentage-text-${index}`, {
				textContent: `${skill.percentage}%`,
				duration: 4,
				ease: "power2.inOut",
			});
		});
	}, [skills]);

	const handleButtonClick = () => {
		setSkills([
			{ name: "HTML", percentage: 100 },
			{ name: "CSS", percentage: 100 },
			{ name: "Sass", percentage: 78 },
			{ name: "Tailwind CSS", percentage: 90 },
			{ name: "JavaScript", percentage: 74 },
			{ name: "React", percentage: 58 },
			{ name: "TypeScript", percentage: 76 },
		]);
	};

	useEffect(() => {
		handleButtonClick();
	}, []);

	return (
		<>
			<Hedr />
			<div id="front" className="mt-6">
				<div  className="bg-[#252525] w-full h-[150px]  flex items-center justify-start pl-[60px] pr-[60px]">
					<h1 data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="end ">Front-end skills</h1>
				</div>
				<div className=" flex mt-14 items-center w-full pl-[60px] pr-[60px] pb-10 justify-between">
					<div data-aos="zoom-out-right" className=" flex flex-col gap-4">
						<h2 className=" wat text-white">what do i know</h2>
						<div className=" flex flex-col gap-4">
							<div className="flex gap-2 items-start text-white w-[600px] ">
								<img src={pen} alt="pen" />
								<span>
									<h3 className="UI">UI / UX Design</h3>
									<p className="UX">
										I am a creative UI/UX designer, skilled in making user experience more complex
										and meaningful. I play to find innovative approaches to design, structured
										according to the latest developments in technology.
									</p>
								</span>
							</div>
							<div className="flex gap-2 items-start text-white w-[600px]">
								<img src={kom} alt="" />
								<span>
									<h3 className="UI">HTML, CSS, JavaScript</h3>
									<p className="UX">
										Proficiency in HTML, CSS, and JavaScript is abundant in creating quality
										websites We have years of experience. Open sites, image and location information
										edit, add animations, and interact with users we have skills in achieving
										communication.
									</p>
								</span>
							</div>
							<div className="flex gap-2 items-start text-white w-[600px] ">
								<img src={dom} alt="" />
								<span>
									<h3 className="UI">Sass, Green Sock, React</h3>
									<p className="UX">
										I have extensive experience in Sass, GreenSock (GSAP), and React technologies. I
										am highly skilled in facilitating styling with Sass, powering animations with
										GSAP, and creating interactive components with React.
									</p>
								</span>
							</div>
						</div>
					</div>
					<div className=" flex flex-col gap-4">
						<h1 className="nae text-white">Coding Skills</h1>
						<div data-aos="zoom-out-down" className=" flex flex-col gap-4">
							{skills.map((skill, index) => (
								<div key={index} className="flex flex-col gap-5 ">
									<span className="w-[350px] flex justify-between items-center">
										<h2 className="skil text-white">{skill.name}</h2>
										<h3
											id={`percentage-text-${index}`}
											className="foyiz text-white percentage-text"
										>
											{skill.percentage}%
										</h3>
									</span>
									<div className="w-[350px] h-[7px] bg-slate-100 rounded-xl">
										<p
											id={`progress-bar-${index}`}
											className="w-[200px] h-[7px] bg-[#007CED] progress-bar rounded-xl"
										></p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Front;
