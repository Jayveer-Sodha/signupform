import React from 'react'
import './swipeButton.css'

const SwipeButton = (props) => {
    const { activeTab ,setActiveTab} = props
    const handleTab1 = () => {
        setActiveTab("Fan");
    };
    const handleTab2 = () => {
        setActiveTab("Talent");
    };
    return (
        <>
            <div className="Tabs">
                <ul className="nav">
                    <li
                        className={activeTab === "Fan" ? "active" : ""}
                        onClick={handleTab1}
                    >
                        FAN SIGNUP
                    </li>
                    <li
                        className={activeTab === "Talent" ? "active" : ""}
                        onClick={handleTab2}
                    >
                        TALENT SIGNUP
                    </li>
                </ul>
            </div>

        </>
    )
}



export default SwipeButton
