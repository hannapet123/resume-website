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
                I am Hanna. An engineer who thrives on tackling difficult math and programming problems, as well as organizing and participating in student events. I approach my work with focus and great dedication.
              </h3>
            </div>
            </div>
        );
    }
}

export default Intro;