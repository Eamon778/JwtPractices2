import React from "react"
import {useDispatch} from 'react-redux'
import { logout } from "../store/authSlice"

const Home = ()=>{
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logout())
    }

    return (
        <>
            <h1>Hello World</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home