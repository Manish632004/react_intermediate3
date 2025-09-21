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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");
    return (
        <div>
            {/* student - Instructor tab  */}

            <div className='flex bg-richblack-800 gap-10 rounded-full max-w-max  text-richblack-100'>
                <button className={`${accountType === "student" ? "bg-richblack-900  text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all druation-200`} 
                onClick={()=> setAccountType("student")}>Student</button>
                <button className={`${accountType === "instructor" ? "bg-richblack-900  text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all druation-200`} onClick={()=> setAccountType("instructor")}>Instructor</button>
            </div>
            <form action="" onSubmit={submitHandler}>
                {/* firstname and lastname  */}
                <div className='flex gap-x-10'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>First Name<sup>*</sup></p>
                        <input required type="text" name='firstname' onChange={changeHandler} value={formData.firstname} placeholder='Enter First Name' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100' />
                    </label>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Last Name<sup>*</sup></p>
                        <input required type="text" name='lastname' onChange={changeHandler} value={formData.lastname} placeholder='Enter Last Name' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100' />
                    </label>
                </div>

                {/* email */}
                <label>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Email<sup>*</sup></p>
                    <input required type="email" name='email' onChange={changeHandler} value={formData.email} placeholder='Enter Email Address' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100' />
                </label>

                {/* create password  and confirm password*/}
                <div className='flex gap-x-10 mt-2'>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Password<sup>*</sup></p>
                        <input required type={showPassword ? ('text') : 'password'} name='password' onChange={changeHandler} value={formData.password} placeholder='Enter Password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100'/>
                        <span onClick={() => setShowPassword((prev) => (!prev))}  className='absolute right-3 top-[38px] cursor-pointer '>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem]'>Confirm Password<sup>*</sup></p>
                        <input required type={showConfirmPassword ? ('text') : 'password'} name='confirmpassword' onChange={changeHandler} value={formData.confirmpassword} placeholder='Confirm Password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-richblack-100' />
                        <span  className='absolute right-3 top-[38px] cursor-pointer ' onClick={() => setShowConfirmPassword((prev) => (!prev))}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>
                <button type='submit' className='w-full bg-yellow-50 rounded-[8px] mt-3 font-medium text-richblack-900 px-[12px] py-[8px]'>Sign Up</button>
            </form>

        </div>
    )
}

export default Signupform
