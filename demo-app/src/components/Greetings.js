
import React from 'react';

function Greetings({name}) {
    return (
        <p> { "hello" + (name ? name : 'Stranger')} </p> 
    );
}

export default Greetings;