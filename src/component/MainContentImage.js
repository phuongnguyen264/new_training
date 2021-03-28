import React, {Component} from 'react';
import Data from '../data/data.json'
import Image from './Image';

class MainContentImage extends Component {
    render() {
        const dataNews = Data.news
        return(
            <div >
                <Image src={this.props.itemImage.src} alt={this.props.itemImage.alt}/>
            </div>
        );
    }

}

export default MainContentImage;