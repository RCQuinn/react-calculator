import React from 'react';

const Button = (props) => {
    const symbol = props.symbol;
    return (
        <div>
            <button>{symbol}</button>
        </div>
    )
}

export default Button