import React from 'react';
import './../styles/DownloadMenu.css';
import transcript from "./../downloads/transcript.pdf"
import resume from "./../downloads/resume.pdf"
import CoverLetter from "./../downloads/coverletter.pdf"

class DownloadMenu extends React.Component {
    constructor(props){
            super(props)
            this.state = {
                downloadVisibility: false,
                downloadContainerClass: "downloadContainer",
                downloadContainerContentClass: "downloadContainerContent",
                menuSize:null,
            }
            this.visibilityToggle = this.visibilityToggle.bind(this)
            this.renderInfo = this.renderInfo.bind(this)
    }

    renderInfo() {
        const menu = document.querySelector('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4');
        menu.classList.toggle("open");
        this.setState({
            downloadContainerClass: this.state.downloadContainerClass === "downloadContainer" ? "downloadContainer open" : "downloadContainer",
            downloadContainerContentClass: this.state.downloadContainerClass === "downloadContainer" ? "downloadContainerContent open" : "downloadContainerContent",
        })
    }

    visibilityToggle(){
        this.setState({
            downloadVisibility: !this.state.downloadVisibility
        })
    }

    componentDidMount(){
        this.resizeWindow()
         window.addEventListener('resize', this.resizeWindow)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resizeWindow)
    }
    resizeWindow = ()=>{
        if(window.innerWidth < 600){
            this.setState({
              menuSize:0,
            })
        }else if(window.innerWidth < 800){
          this.setState({
            menuSize:20,
          })
        }else{
            this.setState({
              menuSize:50,
            })
        }
    }

    render() {
        if(this.state.downloadContainerClass === "downloadContainer open"){
            var background = <div className="outsideSpace" onClick={this.renderInfo}></div>
        }
        return (
            <div className="navBar">
               <div className={this.state.downloadContainerClass} style={{right: this.state.menuSize+"vw", height: this.state.downloadContainerClass === "downloadContainer" ? "20vh" : "100vh"}}>
                    <div id="nav-container" onClick={this.renderInfo} >
                        <div id="nav-icon1">
                            <span style={{backgroundColor: this.state.downloadContainerClass === "downloadContainer open" ? "white" : this.props.menuColor}}></span>
                            <span style={{backgroundColor: this.state.downloadContainerClass === "downloadContainer open" ? "white" : this.props.menuColor}}></span>
                            <span style={{backgroundColor: this.state.downloadContainerClass === "downloadContainer open" ? "white" : this.props.menuColor}}></span>
                        </div>
                    </div>
                    <div className={this.state.downloadContainerContentClass}>
                        <div className="infoDisplay">
                            <h1>Download</h1>
                        </div>
                        <div className="divider"/>
                        <div className="filesDisplay">
                        <a href={resume} title="Download" download="Hanna Petersson - Resume">Resume</a>
                        <br/>
                        <a href={transcript} title="Download" download="Hanna Petersson - transcript">University transcript</a>
                        <br/>
                        <a href={CoverLetter} title="Download" download="Hanna Petersson - Cover Letter">Cover Letter</a>
                        <br/>
                        <br/>
                        </div>
                    </div>
                </div>
                {background}
            </div>
        );
    }
}

export default DownloadMenu;