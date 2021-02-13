import React from 'react';

function Photo(props) {

    return (
        <div>
            <img src={props.photo.thumbnailUrl}/>
        </div>
    );
}

export default Photo;