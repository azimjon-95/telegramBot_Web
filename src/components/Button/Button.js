import React from 'react';
import './style.css'
import { Button } from 'antd'

const Buttons = (props) => {

    return (
        <Button  {...props} className={`genericButton` + props.className} />
    )
}

export default Buttons
