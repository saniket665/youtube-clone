import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import { fetchFromAPI } from '../utils/Api';
import Videos from './Videos';

const SearchDetail = () => {
  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      console.log(data.data.items);
      setVideos(data.data.items);
    })
  }, [searchTerm])
  return (
    <Box sx={{color: "#fff", padding: {xs: "12px", md: "12px 24px"}}}>
      <Typography variant="h5" sx={{textAlign: "center", mb: 1.5, fontSize: {md: "1.9rem"}}}>
        Search Results for <span style={{color: "red", textTransform: "capitalize"}}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchDetail