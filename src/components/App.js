import React from 'react';
import './../styles/App.css';
import Content from './Content.js'
import Intro from './Intro.js'
import DownloadMenu from './DownloadMenu.js'
import Contact from './Contact.js'
import EngineeringJobs from './experiance/EngineeringJobs.js'
import Involvement from './experiance/Involvment.js'
import Education from './experiance/Education.js'

class FrontPage extends React.Component {
  constructor(props){
          super(props)
          this.state = {
              NavigationBarBackground:{
                  backgroundColor :"transparent",
              },
              menuColor:"#ffffff",
              coverHeight: 500,
          }
          this.refContent = React.createRef()
          this.refEducation = React.createRef()
          this.refEngineeringJobs = React.createRef()
          this.refInvolvement = React.createRef()
          this.refSkills = React.createRef()
          this.refContact = React.createRef()

          this.handleScroll = this.handleScroll.bind(this);
          this.setCoverHeight = this.setCoverHeight.bind(this);
      }

      componentDidMount(){
           window.addEventListener('scroll', this.scrollWindow)
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollWindow)
      }
      scrollWindow = () =>{
          this.setState({
            menuColor: window.pageYOffset > this.state.coverHeight? "#405830" : "#ffffff",
          })
      }

      setCoverHeight(height){
        this.setState({coverHeight: height})
      }

  handleScroll(data) {
      switch(data) {
          case "top":
              window.scrollTo(0, 0);
              break;
          case "content":
              window.scrollTo(0, this.refContent.current.offsetTop);
              break;
          case "education":
              window.scrollTo(0, this.refEducation.current.offsetTop);
              break;
          case "engJobs":
              window.scrollTo(0, this.refEngineeringJobs.current.offsetTop);
              break;
          case "involvement":
              window.scrollTo(0, this.refInvolvement.current.offsetTop);
              break;
          case "contact":
              window.scrollTo(0, this.refContact.current.offsetTop);
              break;
          default:
      }
  }
  render() {

      return (
            <div className="body">
                <div className="downloadMenu">
                    <DownloadMenu scrollfromParent={this.handleScroll} menuColor={this.state.menuColor}/>
                </div>
                <div className="Intro">
                    <Intro scrollfromParent={this.handleScroll} setCoverHeight={this.setCoverHeight}/>
                </div>
                <div className="experiancesSections" ref={this.refContent}>
                    <Content scrollfromParent={this.handleScroll} />
                </div>
                <div className="experiancesSections" ref={this.refEducation}>
                    <Education/>
                </div>
                <div className="experiancesSections" ref={this.refEngineeringJobs}>
                    <EngineeringJobs/>
                </div>
                <div className="experiancesSections" ref={this.refInvolvement}>
                    <Involvement/>
                </div>
                <div className="experiancesSections" ref={this.refContact}>
                        <Contact/>
                </div>

            ß</div>
      );
  }
}

export default FrontPage;
