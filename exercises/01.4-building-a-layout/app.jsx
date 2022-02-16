import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const data = {
	image: "https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia",
	},
};

let content = (
	<div className="card" style={{ width: "18rem" }}>
		<img className="card-img-top" src={data.image} alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title">{data.cardTitle} </h5>
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			<a href="#" className="btn btn-primary">
				{data.button.label}
			</a>
		</div>
	</div>
);

ReactDOM.render(content, document.querySelector("#myDiv"));
