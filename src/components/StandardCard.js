import React from 'react';
import './../styles/StandardCard.css';

class StandardCard extends React.Component {
    render() {
      var explorerUsed = !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);

      if (this.props.info.header) {
          return (
              <div className="card" style={{ height: this.props.height }}>
                  <div className="SmallBlock" style={{ height: this.props.height }}>
                      <h3>{this.props.info.header}</h3>
                      <p>{this.props.info.year}</p>
                      <p>{this.props.info.description}</p>
                  </div>
              </div>
          );
      } else if (!this.props.info.image.back || explorerUsed) {
          return (
              <div className="card" style={{ height: this.props.height }}>
                  <div className="SmallBlock" style={{ height: this.props.height }}>
                      <img alt="" src={this.props.info.image.front} />
                      <p>{this.props.info.year}</p>
                      <p>{this.props.info.description}</p>
                  </div>
              </div>
          );
      } else {
          return (
              <div className="flip-card" style={{ height: this.props.height }}>
                  <div className="flip-card-inner">
                      <div className="flip-card-front">
                          <div className="SmallBlock" style={{ height: this.props.height, boxShadow: "0 4px 8px 0 rgba(0,0,0,0.3)" }}>
                              <img alt="" src={this.props.info.image.front} />
                              <h3>{this.props.info.title}</h3>
                              <p>{this.props.info.year}</p>
                              <p>{this.props.info.description}</p>
                          </div>
                      </div>
                      <div className="flip-card-back">
                          <img alt="" src={this.props.info.image.back} style={{ height: this.props.height }} />
                          {this.props.info.link && (
                              <a
                                  href={this.props.info.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="card-link"
                              >
                                  Watch the presentation
                              </a>
                          )}
                      </div>
                  </div>
              </div>
          );
      }
    }
}

export default StandardCard;
