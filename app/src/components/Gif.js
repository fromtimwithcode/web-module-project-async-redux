import React from 'react';

const Gif = props => {
    const { gif } = props;

    return (
        <div class="gif">
            <h3>{gif.title}</h3>
            <img width="200" src={gif.images.original.url}/>
            <a target="_blank" href={gif.url}><button>View on giphy</button></a>
        </div>
    )
}

export default Gif;