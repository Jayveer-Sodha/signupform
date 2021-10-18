import React from 'react'

const Header = ({activeTab}) => {
    return (
        <div className='appBackground__formCard__Header'>
            <span className='appBackground__formCard__Header__text'>
                Create Your {activeTab} Acount
            </span>
        </div>
    )
}

export default Header