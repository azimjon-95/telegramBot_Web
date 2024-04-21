import React from 'react'
import './style.css'
import Buttons from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'

const Header = () => {
    const { user, onClose } = useTelegram()

    return (
        <div className='header'>
            <Buttons onClick={onClose}>Yopish</Buttons>
            <span className={`username`}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header
