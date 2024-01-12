import React from "react";
import Footer from "../home/Footr";
import Hedr from "../home/Hedr";

interface FrontProps {}

const Front: React.FC<FrontProps> = (props: FrontProps) => {
	return (
		<>
				<Hedr />
			<div id="front">
				<p>Front</p>
			</div>
				<Footer />
		</>
	);
};

export default Front;
