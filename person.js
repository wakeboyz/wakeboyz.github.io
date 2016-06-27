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
		if(this.state.hovered && !this.props.removed) {
			imageSrc = this.props.hoverImage;
			tagline = <div style={{color: "#9E7E38", fontWeight: 600, textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", fontFamily: "'Open Sans', sans-serif", paddingTop:"20%"}}>{this.props.tagline}</div>;
			imageStyle.opacity = "0.7";
		} else if (this.props.removed) {
			tagline = <div style={{color: "#9E7E38", fontWeight: 800, fontSize: 315, position: "relative", bottom: 100, textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000", fontFamily: "'Open Sans', sans-serif"}}>X</div>;
		}
		imageStyle.backgroundImage =  `url(./images/${imageSrc})`;
		var image = <div style={imageStyle}>{tagline}</div>
		return (
			<span style={{width: "255px", height: "255px", padding: "20px"}} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onTouchStart={this.toggleHover} onTouchEnd={this.toggleHover}>
				{image}
			</span>
		);
	}
});

export default Person;