import React from 'react'
import {Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchBar from './SearchBar';
import {getAuth, signOut} from "firebase/auth";
const Navbar = () => {
    const auth = getAuth();
    const handleLogout = () => {
        console.log("clicked");
        signOut(auth).then(() => {
            console.log("Logout Successful");
        }).catch((err) => {
            console.log(err);
        })
    }
return (
    <Stack direction="row" sx={{padding: {xs: "10px 4px", sm: "12px 18px"}, zIndex: 1, position: "sticky", backgroundColor: "#161616", top: 0, justifyContent: "space-between", alignItems: "center"}}>
        <Link to="/">
            <Stack direction="row" sx={{alignItems: "center", color: '#fff'}}>
            <YouTubeIcon sx={{fontSize: {xs: "2.2rem", sm:"2.6rem"}, color: "red"}} />
            <Typography vaiant="h4" fontSize="0.1rem" sx={{fontSize: {xs: "1.1rem", sm: "1.3rem"}, color: "#fff", fontWeight: "bold", position: "relative"}}>YouTube<span style={{position: "absolute", top: "-1px", left: "100%", fontSize: "0.6rem", fontWeight: "600"}}>IN</span></Typography>
            </Stack>
        </Link>
        <SearchBar/>
        <div className="nav-links">
                <div className="user-info">Hi, Abish</div>
                <div className="logout-btn" style={{cursor: "pointer"}} onClick={handleLogout}>Logout</div>
        </div>
    </Stack> 
)
}

export default Navbar