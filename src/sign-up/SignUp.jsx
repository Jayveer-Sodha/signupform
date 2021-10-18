import React from 'react'
import { Card} from 'reactstrap'
import './sign-up.scss'
import Form from '../component/form/SignUpform';
import Header from '../component/header/Header';
import SwipeButton from '../component/swipeButton/SwipeButton';


const SignUp = () => {
    const [activeTab, setActiveTab] = React.useState("Fan");

    return (
        <>
            <div className="appBackground">
                    <Card className='appBackground__formCard'>
                        <SwipeButton activeTab={activeTab} setActiveTab={setActiveTab}/>
                        <Header activeTab={activeTab}/>
                        <Form activeTab={activeTab} />
                    </Card>
            </div>
        </>
    )
}

export default SignUp
