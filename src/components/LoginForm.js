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
        <form onSubmit={submitHandler}
        className='flex flex-col gap-y-4 mt-4'
    >

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Email Address<sup className='text-pink-200 text-md'>*</sup></p>
                <input required type="email" placeholder='Enter email address' id="email" name='email' value={formData.email}
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100' />
            </label>

            <label className='w-full relative' >
                <p>Password<sup className='text-pink-200 text-md'>*</sup></p>
                <input required type={showpassword ? ("text"):("password")} name='password' placeholder='Enter Password' id="password" value={formData.password}
                    onChange={changeHandler} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100' />

                    <span 
                    className='absolute right-3 top-[38px] cursor-pointer '
                    conClick={() => setShowPassword((prev)=>(!prev))}>
                        {showpassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/ >) : (<AiOutlineEye/>) }
                    </span>
                    
                    <Link to='#'>
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password?</p>
                    </Link>
            </label>
            
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'>Sign In</button>

        </form>
    )
}

export default LoginForm
