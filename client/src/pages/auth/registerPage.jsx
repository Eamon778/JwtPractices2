import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../../store/authSlice'
import axios from 'axios'

const RegisterPage = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [alert, setAlert] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)

    useEffect(()=>{
        if (isAuthenticated){
            navigate("/")
        }
    }, [isAuthenticated, navigate])

    const handleSubmit =  async (e)=>{
        e.preventDefault();

        const user = {name, username, password, email}
        console.log("hello")
        try{ 
            const response = await axios.post('http://localhost:3000/api/v1/register', user)
            if (response.status === 201) {
                dispatch(login(response.data.user))
                navigate("/")
            }
        } catch(error){
            setAlert(error.response?.data?.message || 'Something went wrong')
        }
    }

    return (
        <>
            <div className="flex justify-center">
                {alert && (
                    <div className="flex items-center mt-[8px]  -mb-[60px] p-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M18 8A8 8 0 118 0a8 8 0 010 16zM9 4h2v5H9V4zm0 6h2v2H9v-2z"></path>
                        </svg>
                        <div className="ml-3">{alert}</div>
                        <button 
                          onClick={() => setAlert(null)} 
                          type="button" 
                          className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-700 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 inline-flex h-8 w-8" 
                          aria-label="Close"
                        >
                          <span className="sr-only">Dismiss</span>
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </button>
                    </div>
                )}
            </div>
            <div className="flex flex-col h-screen justify-center items-center">
            <p className="text-white text-4xl font-bold pb-12">Registration</p>
            <form className="form-control" onSubmit={handleSubmit}>
                <div className="flex gap-20">
                    <div>
                        <label htmlFor="name" className="label">
                            <span className="label-text text-2xl text-white">Name:</span>
                        </label>
                        <input id="name" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="input input-bordered text-white border-white max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="username" className="label">
                            <span className="label-text text-2xl text-white">Username:</span>
                        </label>
                        <input id="username" type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} className="input input-bordered text-white border-white max-w-xs" />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="label">
                        <span className="label-text text-2xl text-white">Password:</span>
                    </label>
                    <input id="password" type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered text-white border-white w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="email" className="label">
                        <span className="label-text text-2xl text-white">Email:</span>
                    </label>
                    <input id="email" type="email" placeholder="someone@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="input input-bordered text-white border-white min-w-full max-w-xs" />
                </div>
                <div className="flex items-center justify-between pt-5">
                    <p>Already have an Account? <a href="/login" className="text-blue-600">Log in Here</a></p>
                    <button type="submit" className="btn bg-blue-600 font-bold w-24">Sign Up</button>
                </div>
            </form>
            </div>
        </>
    );
}

export default RegisterPage;
