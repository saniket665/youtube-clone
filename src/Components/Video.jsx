import React from 'react';
import {Link} from "react-router-dom";
import {Box, Card, CardMedia, CardContent, Typography} from "@mui/material";
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl } from '../utils/constants';

const Video = ({video}) => {
    // console.log(video);
  return (
    <Card sx={{background: "#292929", height: 265, width: {xs: "90vw", sm: 330}, overflow: "hidden"}}>
        <Link to={`/video/${video?.id?.videoId}`}>
            <CardMedia image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={video.snippet?.title} 
            sx={{ width: "100%", height: 180 }} 
            />
        </Link>
        <CardContent className="card-content" sx={{height: 40, width: "100%", padding: {xs: "16px", sm: "10px"}, overFlow: "hidden"}}>
            <Link to={`/video/${video?.id?.videoId}`}>
                <Typography variant="subtitle1" sx={{color: "#fff", fontWeight: "bold"}}>{video.snippet.title.slice(0, 32)}</Typography>
            </Link>
            <Link to={`/channel/${video?.snippet?.channelId}` || {demoChannelUrl}}>
                <Typography variant="subtitle2" sx={{color: "#e0dfdf", fontWeight: "bold", mt: 1}}>{video.snippet.channelTitle.slice(0, 48)}</Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default Video