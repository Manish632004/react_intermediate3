import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [showpassword, setShowPassword] = useState(false);

    const changeHandler = (e) => {
        setFormData(
            {
                ...formData,

                [e.target.id]: e.target.value
            })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
    return (
        <form onSubmit={submitHandler}>

            <label>
                <p>Email Address<sup>*</sup></p>
                <input required type="email" placeholder='Enter email id' id="email" name='email' value={formData.email}
                    onChange={changeHandler} />
            </label>

            <label>
                <p>Password<sup>*</sup></p>
                <input required type={showpassword ? ("text"):("password")} name='password' placeholder='Enter Password' id="password" value={formData.password}
                    onChange={changeHandler} />

                    <span onClick={() => setShowPassword((prev)=>(!prev))}>
                        {showpassword?(<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                    </span>
                    
                    <Link to='#'>
                    <p>Forgot Password?</p>
                    </Link>
            </label>
            
            <button>Sign IN</button>

        </form>
    )
}

export default LoginForm
