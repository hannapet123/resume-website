import React from 'react';
import './Involvment.css';
import CMlogo from "./../../img/CMlogo.png";
import mafulogo from "./../../img/mafu.jpeg";
import ailogo from "./../../img/liuai.png";

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
		var boxStyle = {
			width: this.state.boxSize + "%",
			fontSize: this.state.boxSize / 30 + "vw",
			lineHeight: this.state.boxSize / 30 + "vw",
		}
		return (
			<div className="involvementBody">
				<div>
					<h1>Extracurricular</h1>
					<div className="sectionContainer">
					<div className="ai" style={boxStyle}>
							<img src={ailogo} alt ="AI logo"/>
							<div className="aitext"> 
								<h2 style={{fontSize:this.state.boxSize/30+"vw"}}>Business Relationship Team</h2>
								<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>LiU AI Society, Linköping University</h4>
								<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>September 2024 - present</h4>
								<p style={{fontSize:this.state.boxSize/40+"vw"}}>LiU AI Society organizes events that connect students with companies in the fields of AI and machine learning.</p>
								<a href="https://liuais.com/" target="_blank" rel="noopener noreferrer" style={{fontSize:this.state.boxSize/40+"vw"}}>liuais.com</a>
							</div>
						</div>
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
								<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>Marketing Committee, Linköping University</h4>
								<h4 style={{fontSize:this.state.boxSize/40+"vw"}}>September 2021 - June 2022</h4>
								<p style={{fontSize:this.state.boxSize/40+"vw"}}>The Marketing Committee organizes promotion events for high school students.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Involvement;