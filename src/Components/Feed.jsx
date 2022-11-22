import React, {useState, useEffect} from 'react';
import {Stack, Box, Typography} from "@mui/material";
import { categories } from '../utils/constants';
import Sidebar from './Sidebar';
import { fetchFromAPI } from '../utils/Api';
import Videos from './Videos';

const Feed = () => {
  const [selected, setSelected] = useState("New");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    async function fetch() {
      let data = await fetchFromAPI(`search?part=snippet&q=${selected}`);
      setVideos(data.data.items)
    }
    fetch();
  }, [selected])
  return (
    <Stack sx={{display: "flex", flexDirection: {sx: "column", md: "row"}}}>
      <Box className="sidebar-cont" sx={{width:{xs: "100%", md: "200px"}}}>
        <Sidebar selected={selected} setSelected={setSelected} />
      </Box>
      <Box sx={{p: 1, background: "#000000", color: "#fff", width: {xs: "95vw", md: "100%", overflow: "auto"}}} >
        <Typography variant="h4" style={{fontWeight: "bold", margin: "8px 0px 12px 8px", textAlign: "center"}}>
          {selected} <span style={{color: "red"}}>Videos</span>
        </Typography>
        {videos !== null && <Videos videos={videos} />}
      </Box>
    </Stack>
  )
}

export default Feed