import React from 'react';
import './style.css'

const Button = (props) => {

    return (
        <button {...props} className={`genericButton` + props.className} />
    )
}

export default Button
