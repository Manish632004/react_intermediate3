import React from 'react'
import { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signupform = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const changeHandler = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(formData.password != formData.confirmpassword){
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");

        const accountData ={
            ...formData
        };
        console.log("Printing Account data");
        console.log(accountData);
        navigate("/dashboard");

    }
    const [showpassword, setShowPassword] = useState(false);
    return (
        <div>
            {/* student - Instructor tab  */}

            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form action="" onSubmit={submitHandler}>
                {/* firstname and lastname  */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input required type="text" name='firstname' onChange={changeHandler} value={formData.firstname} placeholder='Enter First Name' />
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input required type="text" name='lastname' onChange={changeHandler} value={formData.lastname} placeholder='Enter Last Name' />
                    </label>
                </div>

                {/* email */}
                <label>
                    <p>Email<sup>*</sup></p>
                    <input required type="email" name='email' onChange={changeHandler} value={formData.email} placeholder='Enter Email Address' />
                </label>

                {/* create password  and confirm password*/}
                <div>
                    <label>
                        <p>Password<sup>*</sup></p>
                        <input required type={showpassword ? ('text') : 'password'} name='password' onChange={changeHandler} value={formData.password} placeholder='Enter Password' />
                        <span onClick={() => setShowPassword((prev) => (!prev))}>
                            {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input required type="password" name='confirmpassword' onChange={changeHandler} value={formData.confirmpassword} placeholder='Confirm Password' />
                        <span onClick={() => setShowPassword((prev) => (!prev))}>
                            {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>
                <button type='submit'>Sign Up</button>
            </form>

        </div>
    )
}

export default Signupform
