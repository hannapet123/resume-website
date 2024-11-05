import React from 'react';
import './EngineeringJobs.css';
import internetstiftelsen from "./../../img/internetstiftelsen.png"
import internetkontor from "./../../img/internetwork.jpeg"
import allicon from "./../../img/allicon.png"
import kontor from "./../../img/work.jpeg"
import willys from "./../../img/willys.png"
import mataffar from "./../../img/grocery.webp"
import skistar from "./../../img/skistar.png"
import fjallen from "./../../img/lift.jpeg"
import abbekas_logo from "./../../img/abbekas.jpeg"
import abbekas_back from "./../../img/abbekas_back.jpg"
import arrow_back from "./../../img/arrow_back.svg"
import arrow_forward from "./../../img/arrow_forward.svg"
import ai from "./../../img/ai.png"
import presentation from "./../../img/presentation.png"
import StandardCard from "./../StandardCard.js";

class EngineeringJobs extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			ai:{
				year:"2024, summer",
				title:"AI for Impact Intern at AI Sweden",
				description:"Developed an AI-powered mobile app tailored for the Red Cross as the client",
				image: {
				  front: ai,
				  back: presentation
				}
			},
			corporate:{
				year:"2023, summer",
				title:"Market analyst Intern at Allicon",
				description:"Gathered information, analyzed, and recommended a market for expansion outside Sweden",
				image: {
				  front: allicon,
				  back: kontor
				}
			},
			internet:{
				year:"Aug - Dec 2020",
				title:"Software engineer Intern at Internetstiftelsen",
				description:"Automated the process of setting up virtual servers in AWS. Certificate: AWS Certified Cloud Practitioner",
				image: {
				  front: internetstiftelsen,
				  back: internetkontor
				}
			},
			skistar:{
				year:"Dec 2020 - May 2021",
				title:"Lift host at SkiStar",
				description:"Lift host in Sälen",
				image: {
				  front: skistar,
				  back: fjallen
				}
			},
			willys:{
				year:"2020 - 2021, weekends and summers",
				title:"Shop assistant at Willys",
				description:"Picked and packad groceries for e-commerce",
				image: {
				  front: willys,
				  back: mataffar
				}
			},
			abbekas:{
				year:"2017 - 2019, summers",
				title:"Waitress at Abbekås Hamnkrog & Hotell",
				description:" ",
				image: {
				  front: abbekas_logo,
				  back: abbekas_back
				}
			},
	
			arrowStyle:{
			  left:{
				display: "block"
			  },
			  right:{
				display: "block"
			  }
			}
		}
		this.blocksContainerRef = React.createRef();
		this.resize = this.resize.bind(this);
		this.scrollSide = this.scrollSide.bind(this);

}

componentDidMount() {
  this.resize.call();
  window.addEventListener('resize', this.resize)

  const blocksContainer = this.blocksContainerRef.current;
  blocksContainer.addEventListener('scroll', this.resize)
}
componentWillUnmount() {
  window.removeEventListener('resize', this.resize)

  const blocksContainer = this.blocksContainerRef.current;
  blocksContainer.removeEventListener('scroll', this.resize)
}
resize = function(){
	  const blocksContainer = this.blocksContainerRef.current;
		this.setState({
			arrowStyle:{
			  left:{
				display: blocksContainer.scrollLeft < 10 ? "none": "block"
			  },
			  right:{
				display: (blocksContainer.scrollLeft + blocksContainer.offsetWidth) > (blocksContainer.scrollWidth -10) ? "none": "block"
			  }
			}
		});
}
scrollSide(direction){
  const container = this.blocksContainerRef.current;
  try{
	container.scrollBy(direction*230, 0)
  }catch{
	container.scrollLeft +=  direction*230
  }
}
render() {
	return (
		<div className="serviceBody">
			<h1>Professional Experience</h1>
			<img alt="" className="arrowsService" id="firstArrowService" src={arrow_back} onClick={() => this.scrollSide(-1)} style = {this.state.arrowStyle.left}/>
			<div className="serviceContainer" ref={this.blocksContainerRef} >
				<div className="service">
					<StandardCard info={this.state.ai} height={"430px"} />
				</div>
				<div className="service">
					<StandardCard info={this.state.corporate} height={"430px"}/>
				</div>
				<div className="service">
					<StandardCard info={this.state.skistar} height={"430px"}/>
				</div>
				<div className="service">
					<StandardCard info={this.state.internet} height={"430px"}/>
				</div>
				<div className="service">
					<StandardCard info={this.state.willys} height={"430px"}/>
				</div>
				<div className="service">
					<StandardCard info={this.state.abbekas} height={"430px"}/>
				</div>
			</div>
			<img alt="" className="arrowsService" id="secondArrowService" src={arrow_forward} onClick={() => this.scrollSide(1)} style = {this.state.arrowStyle.right}/>
		</div>
	);
	}
}
export default EngineeringJobs;