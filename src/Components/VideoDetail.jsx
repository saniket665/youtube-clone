import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import VideoDescription from "./VideoDescription";
import { fetchFromAPI } from "../utils/Api";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import Comments from "./Comments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState(null);
  const [videoDescription, setVideoDescription] = useState(null);
  const [comments, setComments] = useState(null);
  const [commentCount, setCommentCount] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideo(data.data.items[0]);
      setCommentCount(data.data.items[0].statistics.commentCount);
    });
    fetchFromAPI(`search?part=snippet&type=video&maxResults=10&relatedToVideoId=${id}`).then((data) => {
      setSuggestedVideos(data.data.items);
    })
    fetchFromAPI(`videos?part=snippet,statistics,contentDetails&id=${id}`).then((data) => {
      setVideoDescription(data.data.items[0]);
      console.log(data.data.items[0]);
    })
    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) => {
      setComments(data.data.items);
    })
  }, [id]);
  if (video) {
    console.log(id);
  }
  if (video) {
    const {
      snippet: { title, channelTitle },
      statistics: { viewCount, subscriberCount },
    } = video;
  }
  return (
    <Stack p={3} direction="row" sx={{color: "#fff", flexDirection: {xs: "column",  md: "row"}, gap: "1.5rem", justifyContent: "center", maxWidth: "100vw", minHeight: "100vh"}}>
      <Box>
        <Box className="react-player-cont">
          <ReactPlayer
            class="react-player"
            url={`https://youtube.com/watch?v=${id}`}
            controls
            style={{ height: "100%", width: "100%"}}
          />
        </Box>
        <Stack direction="row" mt={1.8} sx={{alignItems: "center", justifyContent: "space-between", pr: "0.8rem"}}>
        <Typography variant="h5" sx={{fontWeight: "bold"}}>{video?.snippet?.channelTitle}</Typography>
          <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
            <Typography variant="subtitle1" sx={{fontWeight: "bold", color: "#e0dfdf"}}>{parseInt(video?.statistics?.viewCount).toLocaleString()} views</Typography>
            <Typography variant="subtitle1" sx={{fontWeight: "bold", color: "#e0dfdf"}}>{parseInt(video?.statistics?.likeCount).toLocaleString()} likes</Typography>
          </Box>
        </Stack>
          <VideoDescription videoDetails={videoDescription} />
          <Comments comments={comments} commentCount = {commentCount} />
      </Box>
      <Box>
        {
        suggestedVideos === null ? <></> : 
        <Videos videos={suggestedVideos.slice(0, 25)} />
        }
      </Box>
    </Stack>
  );
};

export default VideoDetail;
