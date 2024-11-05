import React from 'react';
import './../styles/Content.css';
import ContentBox from "./ContentBox.js";
import job_logo from "./../img/workplace.webp"
import education_logo from "./../img/LiU.png"
import extracurricular_logo from "./../img/CMlogo.png"


class Resume extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                boxSize: 100/3,
                experiance:{
                    education: {
                        image:education_logo,
                        title: "Education",
                        examples: ["Industrial Engineering & Management", "NUS Exchange semester"],
                        examplesYear: ["Aug 2021 - Jun 2026", "Aug 2023 - Dec 2023"],
                        color: "rgb(0, 76, 153)",
                        subColor:"rgba(0, 76, 153, 0.7)"
                    },
                    engJobs: {
                        image:job_logo,
                        title: "Professional Experience",
                        examples: ["AI for Impact Intern", "Market analyst Intern", "Software engineer Intern", "Lift host", "Shop assistant", "Waitress", ],
                        examplesYear: ["May 2024 - Sep 2024", "Jun 2023 - Jul 2023", "Aug 2020 - Dec 2020", "Dec 2020 - May 2021", "2020 - 2021", "2017 - 2019"],
                        color: "rgb(0, 77, 98)",
                        subColor: "rgba(0, 77, 98, 0.7)"
                    },
					involvement: {
                        image:extracurricular_logo,
                        title: "Extracurricular",
                        examples: ["LiU AI Society", "Clubmästeriet", "Marketing Committee"],
                        examplesYear: ["Sep 2024 - present", "Jun 2022 - Jun 2023", "Sep 2021 - Jun 2022"],
                        color: "rgb(0, 77, 42)",
                        subColor: "rgba(0, 77, 42, 0.7)"
                    },
                }
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
                boxSize: 100/3
              })
          }else if(window.innerWidth < 800 && window.innerWidth > 460){
              this.setState({
                boxSize: 100/2
              })
          }else if(window.innerWidth < 460){
              this.setState({
                boxSize: 100
              })
          }
      }
    render() {
        var boxStyle ={
            height: this.state.boxSize+"vw",
            width: this.state.boxSize+"%",
            fontSize: this.state.boxSize/32+"vw",
            lineHeight: this.state.boxSize/30+"vw",
        }
        return (
            <div >
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("education")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.education}/>
                </div>
                <div className="boxContainer" onClick={() => this.props.scrollfromParent("engJobs")} style={boxStyle}>
                    <ContentBox info={this.state.experiance.engJobs}/>
                </div>
				<div className="boxContainer" onClick={() => this.props.scrollfromParent("involvement")}style={boxStyle}>
					<ContentBox info={this.state.experiance.involvement}/>
				</div>
            </div>
        );
    }
}

export default Resume;