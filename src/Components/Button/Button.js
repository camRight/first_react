import React from 'react'

const Button = (props) => {
    return (
        <button type="button" class={`btn btn-${props.color}`}>
            {props.text}
        </button>
    
    );
};

export default Button;
