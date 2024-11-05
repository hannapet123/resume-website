import React from 'react';
import './../styles/Intro.css';
import down_logo from "./../img/down_logo.png"

class Intro extends React.Component {
    constructor(props){
            super(props)
            this.refMeText = React.createRef()
    }
    componentDidMount(){
        if(this.refMeText.current){
          this.props.setCoverHeight(window.innerHeight - this.refMeText.current.clientHeight - 40)
        }
         this.forceUpdate()
         window.addEventListener('resize', ()=>{this.forceUpdate()})
    }

    componentWillUnmount() {
        window.removeEventListener('resize', ()=>{this.forceUpdate()})
    }
    render() {
        if(this.refMeText.current){
          var meHeight = this.refMeText.current.clientHeight;
        }


        return (
          <div>
            <div className="welcomeBody" style={{bottom: meHeight}}>
                    <img alt="" src={down_logo} onClick={() => this.props.scrollfromParent("content")} />
            </div>
            <div className="infoContainerWelcome" ref={this.refMeText}>
              <h1>Hello!</h1>
              <h3> 
              M.Sc. student in Industrial Engineering and Management, specializing in Machine Learning. Fueled by a passion for continuous learning, I seek opportunities for growth in the fast-paced tech sector. With a foundation in business and problem solving, I'm keenly interested in leveraging AI and ML to innovate and address complex problems in today's world.
              </h3>
            </div>
            </div>
        );
    }
}

export default Intro;