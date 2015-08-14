import React from "react";
var goose;
var Goose = React.createClass({
	getInitialState: function() {
		return {
			vert: 0,
			hor: 0,
			vertDirection: "top",
			horDirection: "left"
		}
	},

	randomGoosePosition: function() {
		var randomPosVert = Math.floor(Math.random() * 400) + 1;
		var randomPosHor = Math.floor(Math.random() * 400) + 1;
		var positionsVert = ["top", "bottom"];
		var positionsHor = ["right", "left"];
		var positionTypeVert = positionsVert[Math.floor(Math.random() * 2)];
		var positionTypeHor = positionsHor[Math.floor(Math.random() * 2)];
		this.setState({
			vert: randomPosVert,
			hor: randomPosHor,
			vertDirection: positionTypeVert,
			horDirection: positionTypeHor
		});
	},

	componentDidMount: function() {
		goose = window.setInterval(this.randomGoosePosition, 400);
	},

	componentWillUnMount: function() {
		window.clearInterval(goose);
	},

	render: function() {
		return (
			<div>
				<img src="./images/run_goose.png" style={{position: "absolute", [this.state.vertDirection]: this.state.vert, [this.state.horDirection]: this.state.hor}} />
				<audio autoPlay={true}>
					<source src="./audio/benny.mp3" type="audio/mpeg" />
				</audio>
			</div>
		);
	}
});

export default Goose;