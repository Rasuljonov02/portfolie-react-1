import Footr from "../home/Footr";
import Hedr from "../home/Hedr";

interface ContactProps {}

const Contact = (props: ContactProps) => {
	return (
		<>
			<Hedr />
			<div id="contact">
				<h1 className="text-white">Contact</h1>
			</div>
			<Footr />
		</>
	);
};

export default Contact;
