import React from "react";
import Person from "./person";
import Goose from "./goose";
import GooseTally from "./goose-tally";

var ShowCase = React.createClass({
	getInitialState: function() {
		return {people: [
				{
					name: "Conor",
					tagline: "Human cat who enjoys playing with yarn, pizza, and demonstrating flexibility.",
					initImage: "conor.png",
					hoverImage: "conor-hover.png"
				},
				{
					name: "Gabe",
					tagline: "Picked up a law degree in order to stay in the US legally. Come Back To Macon",
					initImage: "gabe.png",
					hoverImage: "gabe-hover.png"
				},
				{
					name: "Joe",
					tagline: "A reminder that, despite all odds, a last name and not being fat can get you far in life. ",
					initImage: "joe.png",
					hoverImage: "joe-hover.png"
				},
				{
					name: "Bryan",
					tagline: "Tinder pundit and passive aggressive tweeter. RI was unavailable to join the fantasy league.",
					initImage: "bryan.png",
					hoverImage: "bryan-hover.png"
				},
				{
					name: "Perry",
					tagline: "Recently Dateable.",
					initImage: "perry.png",
					hoverImage: "perry-hover.png"
				},
				{
					name: "Zach",
					tagline: "Let me see you sweat.",
					initImage: "zach.png",
					hoverImage: "zach-hover.png"
				},
				{
					name: "Brad",
					tagline: "The inventor of the swirl, this young Clevelander loves Paul Blart, frisbee, and dates out of his league.",
					initImage: "brad.png",
					hoverImage: "brad-hover.png"
				},
				{
					name: "Randy",
					tagline: "Wake Forest graduate. Friend who we see. Sometimes drinks.",
					initImage: "randy.png",
					hoverImage: "randy-hover.png"
				},
				{
					name: "Josh",
					tagline: "Desert fox, hurricane creator, and destroyer of dance floors.",
					initImage: "josh.png",
					hoverImage: "josh-hover.png",
					removed: true
				},
				{
					name: "Mike",
					tagline: "Michael Michael Motorcycle. Honey Whiskey. ",
					initImage: "mike.png",
					hoverImage: "mike-hover.png"
				},
				{
					name: "Bert",
					tagline: "Has spent the last two years of his life acting out Lonely Island's I Just Had Sex video.",
					initImage: "bert.png",
					hoverImage: "bert-hover.png"
				},
				{
					name: "Russell",
					tagline: "This man dates the cool Brad. The one we like.",
					initImage: "russell.png",
					hoverImage: "russell-hover.png"
				},
				{
					name: "Dan",
					tagline: "Expansion Team - The Florida Marlins of the Wake Boyz",
					initImage: "dan.png",
					hoverImage: "dan-hover.png",
					removed: true
				},
				{
					name: "T-Bone",
					tagline: "When cornered, throws friends across kitchens and flees",
					initImage: "trent.png",
					hoverImage: "trent-hover.png"
				}
			],
			gooseOn: false,
			gooseTally: [
				{
					name: "Perry",
					total: 3,
					head: "perry-head.png"
				},
				{
					name: "Josh",
					total: 1,
					head: "josh-head.png"
				},
				{
					name: "Russell",
					total: 1,
					head: "russell-head.png"
				},
				{
					name: "Bert",
					total: 1
				}
			]
		};
	},

	toggleGoose: function() {
		this.setState({
			gooseOn: !this.state.gooseOn
		});
	},

	render: function() {
		var people = this.state.people.map((person) => {
			return <Person key={person.name} {...person} />;
		});
		var goose = <Goose />;
		var renderItem = people;
		if(this.state.gooseOn) {
			renderItem = goose;
		}
		return (
			<div>
				<div style={{color: "#000000", backgroundImage: "url(./images/wf.png)", width:"200px", height:"140px", display: "inline-block"}}></div>
				<div style={{color: "#000000", fontFamily: "'Yellowtail', cursive", fontSize: "50px", display: "inline-block"}}>Wake Boyz Fantasy Football League</div>
				<div onClick={this.toggleGoose} style={{cursor: "pointer", color: "#000000", backgroundImage: "url(./images/goose.png)", width:"100px", height:"131px", display: "inline-block"}}></div>
				<div style={{display: "flex"}}>
					<div style={{display: "flex", flexWrap: "wrap", marginLeft: "auto", backgroundColor: "#9E7E38", width: "100%"}}>
						{renderItem}
					</div>
				</div>
				<div 
					style={{color: "#000000", fontFamily: "'Yellowtail', cursive", fontSize: "20px", display: "inline-block", width: "100%", textAlign: "center", cursor: "pointer"}}
					onClick={() => window.open("./memorial.html", "_blank")}
				>
					Joshua Newell - In Memorium</div>
			</div>
		);
	}
});

React.render(<ShowCase /> , document.getElementById("app"));
