import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import toast from 'react-hot-toast'

const Navbar = (props) => {

    let isLoggenIN = props.isLoggedIN;
    let setIsLoggedIN = props.setIsLoggedIN;

    return (
        <div className='bg-red-500 h-10 flex justify-evenly'>


            <Link to='/'>
                <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav >
                <ul className='flex'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='#'>About</Link>
                    </li>
                    <li>
                        <Link to='#'>Contact</Link>
                    </li>
                </ul>

            </nav>

            {/* Login - Signup - Logout - Dashboard  */}

            <div className='flex ml-5 gap-3'>
                {!isLoggenIN &&
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                }
                {!isLoggenIN &&
                    <Link to='/signup' >
                        <button onClick={() =>{
                            setIsLoggedIN(false); toast.success("Logged Out"); }}>Signup</button>
                    </Link>
                }
                {isLoggenIN &&
                    <Link to='/'>
                        <button onClick={() =>{
                            setIsLoggedIN(false); toast.success("Logged Out"); }}>Logout</button>
                    </Link>
                }
                
                {isLoggenIN &&
                    <Link to='/dashboard'>
                        <button>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
