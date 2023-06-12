import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const saveCookie = (text) => {
		localStorage.setItem("userData", JSON.stringify(text));
		navigate("/home");
	};

	return (
		<div className="container pt-5">
			<div className="d-flex justify-content-center">
				<img className="mt-5" src="3dpay51.png" alt="Girl in a jacket" width={260}></img>
			</div>
			<div className="d-flex justify-content-center mt-5">
				<Button variant="primary" onClick={() => saveCookie("a")} className="ms-2 p-3">
					Category A
				</Button>
				<Button variant="info" onClick={() => saveCookie("b")} className="ms-5 p-3">
					Category B
				</Button>
			</div>
		</div>
	);
}

export default Home;
