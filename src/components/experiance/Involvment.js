import React from 'react';
import './Involvment.css';
import CMlogo from "./../../img/CMlogo.png";
import mafulogo from "./../../img/mafu.jpeg";

class Involvement extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			boxSize: 100/2,
		}
		this.resizeWindow = this.resizeWindow.bind(this)

	}
	componentDidMount(){
		this.resizeWindow()
		window.addEventListener('resize', this.resizeWindow)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeWindow)
	}
	resizeWindow = ()=>{
		if(window.innerWidth > 800){
			this.setState({
				boxSize: 100/2
			})
		}else if(window.innerWidth < 800){
			this.setState({
				boxSize: 100
			})
		}
	}

	render() {
		var boxStyle ={
			height: this.state.boxSize/1.3+"vw",
			width: this.state.boxSize+"%",
			fontSize: this.state.boxSize/30+"vw",
            lineHeight: this.state.boxSize/30+"vw",
		}

		return (
			<div className="involvementBody">
				<div>
					<h1>Extracurricular</h1>
					<div className="sectionContainer">
						<div className="CM" style={boxStyle}>
							<img src={CMlogo} alt ="CM logo"/>
							<div className="CMtext"> 
								<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Head of permits and venues</h2>
								<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Head of IT</h2>
								<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Clubmästeriet, Linköping University</h4>
								<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>June 2022 - June 2023</h4>
								<p style={{fontSize:this.state.boxSize/40+"vw"}}>Clubmästeriet is a non-profit organization that organizes the reception period for new students, and conducts several large events throughout the year. Turnover: 2.73 millions</p>
								<a href="http://clubmasteriet.se" target="_blank" rel="noopener noreferrer" style={{fontSize:this.state.boxSize/40+"vw"}}>clubmasteriet.se</a>
							</div>
						</div>
						<div className="mafu" style={boxStyle}>
							<img src={mafulogo} alt ="Mafu logo"/>
							<div className="mafutext"> 
								<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Hackathon project manager</h2>
								<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Marketing Comittee, Linköping University</h4>
								<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>September 2021 - June 2022</h4>
								<p style={{fontSize:this.state.boxSize/40+"vw"}}>Organizes promotion events for high school students.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Involvement;