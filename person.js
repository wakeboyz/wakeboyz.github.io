import React from "react";

var Person = React.createClass({
	getInitialState: function(){
		return {
			hovered: false
		};
	},

	toggleHover: function() {
		this.setState({
			hovered: !this.state.hovered
		});
	},

	render: function(){
		var imageSrc = this.props.initImage;
		var tagline = null;
		var imageStyle = {width: "255px", height: "255px", backgroundSize: "cover", textAlign: "center", fontSize: "24px"};
		var redX = null;
		if(this.state.hovered) {
			imageSrc = this.props.hoverImage;
			tagline = <div style={{color: "#9E7E38", fontWeight: 600, textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", fontFamily: "'Open Sans', sans-serif", paddingTop:"20%"}}>{this.props.tagline}</div>;
			imageStyle.opacity = "0.7";
		}
		imageStyle.backgroundImage =  `url(./images/${imageSrc})`;
		var image = <div style={imageStyle}>{tagline}</div>
		return (
			<span style={{width: "255px", height: "255px", padding: "20px"}} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
				{image}
				{redX}
			</span>
		);
	}
});

export default Person;