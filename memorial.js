import React from 'react';
import firebase from 'firebase';
import uuid from 'uuid';
import { Motion, spring } from 'react-motion';	

const firebaseConfig = {
    apiKey: "AIzaSyBc6TXTRTGOQ85mtzf66DYYZjKIkEW505M",
    authDomain: "josh-memorial.firebaseapp.com",
    databaseURL: "https://josh-memorial.firebaseio.com",
    storageBucket: "josh-memorial.appspot.com"
};

firebase.initializeApp(firebaseConfig);

function totalWithinNum(target, numbers, num) {
    return numbers.reduce(function(total, number) {
        if (Math.abs(number - num) <= target) {
            total += 1;
        }
        return total;
    }, 0);
}

const flowers = [
	"./images/memorial/flower-one.png", 
	"./images/memorial/flower-two.png", 
	"./images/memorial/flower-three.png", 
	"./images/memorial/flower-four.png"
];

class Flower extends React.Component {
	render() {
		const { props } = this;
		return (
			<Motion defaultStyle={props} style={{y: spring(window.innerHeight - props.diff, {stiffness: 60, damping: 30})}}>
				{({ y }) => {
					return (
						<div
							style={{
								position: 'absolute',
								left: props.x + 'px',
								top: y + 'px',
								backgroundImage: 'url(' + flowers[props.flowerIndex] + ')',
								width: 28,
								height: 28
							}}
						/>
					);
				}}
			</Motion>
		);
	}
}

class Memorial extends React.Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
		this.state = {
		    flowers: [],
		    xPositions: [],
		    ids: {}
		};
	}

	componentDidMount() {
		const flowers = firebase.database().ref("flowers/");
		flowers.on('child_added', data => {
	    const flower = data.val();
	    const id = flower.id;
	    if (!this.state.ids[id]) {
        const y = window.innerHeight - flower.diff;
        const updatedFlower = Object.assign({
            y: y
        }, flower);
        this.addFlower(updatedFlower);
	    }
		});
	}

	addFlower({ diff, x, y, flowerIndex, id, shouldPush }) {
		const key = this.state.flowers.length;
		this.setState({
		    flowers: this.state.flowers.concat(
		    	<Flower
		    		key={key}
		    		x={x}
		    		y={y}
		    		diff={diff}
		    		flowerIndex={flowerIndex}
		    	/>
		    ),
				xPositions: this.state.xPositions.concat(x),
		    ids: Object.assign({ [id]: true }, this.state.ids)
		}, () => {
		    if (shouldPush) {
		        const flowers = firebase.database().ref("flowers/");
		        flowers.push({
		            diff: diff,
		            x: x,
		            flowerIndex: flowerIndex,
		            id: id
		        });
		    }
		});
	}

	onClick(e) {
		const diff = (totalWithinNum(8, this.state.xPositions, e.clientX) + 1) * 24;
		const flowerIndex = Math.round(Math.random() * 3);
		const id = uuid.v4();
		this.addFlower({
		    diff,
		    x: e.clientX,
		    y: e.clientY,
		    flowerIndex,
		    id,
		    shouldPush: true
		});
	}

	render() {
		return (
			<div
				onClick={this.onClick}
				style={{
					height: '100%',
					width: '100%',
					cursor: 'pointer'
				}}
			>
				<div
					style={{
						color: "#000000",
						fontFamily: "'Yellowtail', cursive",
						fontSize: "80px",
						textAlign: "center",
						width: "100%"
					}}
				>
					Joshua Newell - In Memoriam
				</div>
				<div 
					style={{
						color: "#000000",
						fontFamily: "'Yellowtail', cursive",
						fontSize: "40px",
						display: "block",
						textAlign: "center",
						width: "100%",
						marginTop: '-20px',
						marginBottom: '10px'
					}}
				>
					Click anywhere to leave a flower
				</div>
				<img
					src="./images/memorial/josh.png"
					style={{
						height: "500px",
						display: "block",
						margin: "0 auto"
					}}
				/>
				{ this.state.flowers }
				<audio autoPlay={true}>
					<source src="./audio/moonlight.mp3" type="audio/mpeg" />
				</audio>
			</div>
		);
	}
}

React.render(<Memorial />, document.getElementById('app'));