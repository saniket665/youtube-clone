import React, {useState} from 'react'
import {Paper, IconButton} from "@mui/material";
import {Search} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search) {
      navigate(`search/${search}`);
    }
  }
  return (
    <Paper component="form" onSubmit={handleSubmit} style={{display: "flex", alignItems: "center", border: "1px solid #e3e3e3", borderRadius: "20px", boxShadow: "none", background: "#ffffff", mr: {sm: 5}}}>
        <input type="text" className="search-bar" placeholder="Search ..." style={{marginLeft: "1rem", fontSize: "1rem"}} value={search} onChange={(e) => setSearch(e.target.value)} />
        <IconButton type="submit" sx={{p: {xs: "3px 6px", md: "6px 10px"}, color: "red"}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar