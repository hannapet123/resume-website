import React from 'react';
import './Education.css';


class Education extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			boxSize: 100/2,
            transform: "translate(50%, 0)",
		}
	}

	componentDidMount(){
		this.resizeWindow()
		window.addEventListener('resize', this.resizeWindow)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeWindow)
	}
	resizeWindow = ()=>{
		if(window.innerWidth > 710){
			this.setState({
				boxSize: 100/2,
                transform: "translate(50%, 0)",
			})
		}else if(window.innerWidth < 710){
			this.setState({
				boxSize: 100,
                transform: "translate(0, 0)",
			})
		}
	}

	render() {
		var boxStyle ={
			width: this.state.boxSize+"%",
			lineHeight: this.state.boxSize/25+"vw",
            transform: this.state.transform
		}
		return (
			<div className="newEducationBody">
				<div className="headerCard"><h1>Education</h1></div>
				<div style={boxStyle}>
					<div className="bigCard">
						<h3>M.Sc. Student in Industrial Engineering and Management</h3>
						<h4>Linköping University<br />Master profile: Computer Science and Machine Learning<br />Aug 2021 - Jun 2026<br />GPA: 4.95 [5.0]</h4>
					</div>
					<div className="bigCard">
						<h3>Exchange semester</h3>
						<h4>National University of Singapore<br />Profile: Computer Science and Electrical Engineering<br />Aug 2023 - Dec 2023<br />GPA: 4.75 [5.0]</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Education;