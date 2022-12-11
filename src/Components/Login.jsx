import React, {useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {setError, removeError, setLoading, removeLoading} from "../redux/slices/authSlice.js";
import {Link} from "react-router-dom";
import "./Signup.css"

const Login = () => {
  const [data, setData] = useState({email: "", password: ""});
  const [errorBox, setErrorBox] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);
  const handleChange = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }
  const handleLogin = async() => {
    await dispatch(setLoading());
    signInWithEmailAndPassword(auth, data.email, data.password).then(async(userData) => {
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
        <div className="signup-title">Login</div>
        <div className="input">
            <label htmlFor="">Email:</label>
            <input type="email" name="email" value={data.email} onChange={handleChange} />
        </div>
        <div className="input">
            <label htmlFor="">Password:</label>
            <input type="password" name="password" value={data.password} onChange={handleChange} />
        </div>
        {errorBox && <div className='error-message'>{error}</div> }
        <div className="link">Don't have an account? <span><Link to="/signup" style={{color: "inherit"}}>Sign Up</Link></span></div>
        <button className="signup-btn" onClick={handleLogin} disabled={loading}>{loading ? "Loading..." : "Login"}</button>
    </div>
</div>
  )
}

export default Login