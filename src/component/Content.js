import React, {Component} from 'react';
import Data from '../data/data.json'


function Content() {
    return (
        <div className = 'Content'>
            <h2 class="Content_title">{Data.content.title}</h2>
            <p class="Content_description">{Data.content.description}</p>
        </div>
     );
}

export default Content;