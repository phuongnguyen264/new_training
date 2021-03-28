import React, {Component} from 'react';

function getImgUrl(src){
    const results = src.split("/");
    
    return results[results.length - 1];
}

class Image extends Component {

    render() {
      return (
          <img src={require(`../${getImgUrl(this.props.src)}`).default} alt={this.props.alt} width = {this.props.width} height = {this.props.height} />
      );
    }
  }
  
export default Image;