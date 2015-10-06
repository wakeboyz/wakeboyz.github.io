import React from "react";

var GooseTally = React.createClass({
	render: function() {
		const tally = this.props.geese.map((goose) => {
			let geeseImages = [];
			for(let i=0; i < goose.total; i++) {
				geeseImages.push(<img style={{height: "100px"}} src="./images/goose.png" />);
			}
			return <div key={goose.name} style={{fontWeight: 600, fontSize: "45px", fontFamily: "'Yellowtail', cursive"}}><div>{goose.name}</div><div>{geeseImages}</div></div>;
			
		});
		return (
			<div style={{width: "25%", marginLeft: "auto"}}>
				{tally}
			</div>
		);
	}
});

export default GooseTally;