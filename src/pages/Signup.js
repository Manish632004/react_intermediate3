import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIN}) => {
    return (
        <Template 
        title="Join the millionns learning to code with StudyNotion for free"
        desc1="BUild Skills for today, tomorrow , and beyond."
        desc2="Education to future-proof your career"
        image={signupImg}
        formtype="signup"
        setIsLoggedIN ={setIsLoggedIN}
        />


    )
}

export default Signup
