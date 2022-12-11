import React, {useState} from 'react';
import "./Signup.css";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {colleciton, addDoc, collection} from "firebase/firestore";
import { db } from '../index';
import { useNavigate } from 'react-router-dom';
import {setError, removeError, setLoading, removeLoading} from "../redux/slices/authSlice.js";
import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';

const Signup = () => {
    const auth = getAuth();
    const [data, setData] = useState({name: "", email: "", password: ""});
    const [errorBox, setErrorBox] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const loading = useSelector((state) => state.auth.loading);
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleSignup = async() => {
        await dispatch(setLoading());
        createUserWithEmailAndPassword(auth, data.email, data.password).then(async(userData) => {
            console.log(userData.user.uid);
            const userDoc = await addDoc(collection(db, "users"), {
                id: userData.user.uid,
                name: data.name,
                email: data.email  
            })
            await dispatch(removeLoading());
            navigate("/");
    }).catch(async(err) => {
        await dispatch(removeLoading());
      await dispatch(setError(err.message));
        setErrorBox(true);
        setTimeout(async() => {
          await dispatch(removeError());
          setErrorBox(false);
        }, 3000);
    })
    }
  return (
    <div className="signup-cont">
        <div className="signup-card">
            <div className="signup-title">Sign Up</div>
            <div className="input">
                <label htmlFor="">Name:</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} />
            </div>
            <div className="input">
                <label htmlFor="">Email:</label>
                <input type="email" name="email" value={data.email} onChange={handleChange} />
            </div>
            <div className="input">
                <label htmlFor="">Password:</label>
                <input type="password" name="password" value={data.password} onChange={handleChange} />
            </div>
            {errorBox && <div className='error-message'>{error}</div> }
            <div className="link">Already have an account? <span><Link to="/login" style={{color: "inherit"}}>Login</Link></span></div>
            <button className="signup-btn" onClick={handleSignup} disabled={loading} >{loading ? "Loading..." : "Sign Up"}</button>
        </div>
    </div>
  )
}

export default Signup