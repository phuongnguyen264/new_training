import React, {Component} from 'react';
import Data from '../data/data.json'

class MainContentDes extends Component {
    render () {
        return(
            <div >
                <p> {this.props.item.description} </p>
            </div>
        );
    }

}

export default MainContentDes;