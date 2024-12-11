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
              <h3> My name is Hanna, and I am currently in my fourth year pursuing an M.Sc. degree in Industrial Engineering and Management at Linköping University, with dual master profiles in Machine Learning and Finance.
              
              </h3>
            </div>
            </div>
        );
    }
}

export default Intro;