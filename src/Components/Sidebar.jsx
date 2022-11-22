import React from 'react';
import {Stack} from "@mui/material"
import { categories } from '../utils/constants';
const Sidebar = ({selected, setSelected}) => {
  return (
    <Stack
    direction="row"
    className="sidebar"
    sx={{
        overflow: "auto",
        height: {sx: "auto", md: "100%"},
        flexDirection: {md: "column"},
        paddingTop: {md: "0.5rem"}
    }}
    >
        {
        categories.map((cat, idx) => (
            <button key={idx} className="category-btn" onClick={() => setSelected(cat.name)}
            style={{background: selected === cat.name && "red", color: "white"}}
            >
                <span className="cat-icon" style={{color: selected === cat.name ? "white" : "red", marginRight: "10px"}}>{cat.icon}</span>
                <span style={{opacity: selected === cat.name ? 1: 0.8}}>{cat.name}</span>
            </button>
        ))
        }
    </Stack>
  )
}

export default Sidebar