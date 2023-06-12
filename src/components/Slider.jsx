import { Button, Carousel, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import jsonData from "../../data.json";

function Slider() {
	const navigate = useNavigate();
	const [data, setData] = useState([]);

	useEffect(() => {
		const cookie = JSON.parse(localStorage.getItem("userData"));
		if (!cookie) navigate("/");

		const sliderData = jsonData.data.find((item) => {
			return item.category === cookie;
		});
		setData(sliderData.slider);
	}, [navigate]);

	return (
		<Container className="pt-5">
			<Carousel>
				{console.log(data)}
				{data.map((item) => {
					return (
						<Carousel.Item key={item.id} style={{ background: item.background[0].backgroundColor }}>
							<img className="d-block" src="3dpay51.png" alt="First slide" />
							<Carousel.Caption>
								<h3>{item.heading}</h3>
								<p>{item.subHeading}</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
			<div className="d-flex justify-content-center mt-5">
				<NavLink to={"/"} className={"nav-link"}>
					<Button variant="primary" className="p-3">
						Back To Home Page
					</Button>
				</NavLink>
			</div>
		</Container>
	);
}

export default Slider;
