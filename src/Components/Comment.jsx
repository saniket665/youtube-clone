import React, {useState} from "react";
import { Box, Stack, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
import {Link} from "react-router-dom";

const Comment = ({ comment, open }) => {
    const [full, setFull] = useState(false);
  return (
    <Stack direction="row" height="min-content" width="inherit" sx={{display: {xs: open, md: "flex"},  alignItems: "flex-start", margin: "1.5rem 0", gap: "1rem", paddingRight: "1rem"}}>
      <Box
        component="img"
        src={comment?.snippet?.authorProfileImageUrl || demoProfilePicture}
        height="2.5rem"
        width="2.5rem"
        sx={{ borderRadius: "50%" }}
      />
      <Box sx={{color: "#e4e4e4", fontWeight: "300"}}>
        <Link to={`/channel/${comment?.snippet?.authorChannelId}`}>
            <Typography variant="subtitle2" sx={{color: "#e4e4e4", fontWeight: "bold"}}>{comment?.snippet?.authorDisplayName}</Typography>
        </Link>
        {
            comment?.snippet?.textDisplay.length <= 250 ? <Typography mt="2px" variant="body1" sx={{ fontSize: "15px", color: "#e4e4e4"}}>{comment?.snippet?.textDisplay}</Typography> :
            full === false ? <Typography mt="2px" variant="body1" sx={{ fontSize: "15px", color: "#e4e4e4"}}>{comment?.snippet?.textDisplay.slice(0, 250)} <span onClick={() => setFull(!full)} style={{fontWeight: "bold", cursor: "pointer"}} > &nbsp; Show more</span> </Typography> :
            <Typography mt="2px" variant="body1" sx={{ fontSize: "15px", color: "#e4e4e4"}}>{comment?.snippet?.textDisplay} <span onClick={() => setFull(!full)} style={{fontWeight: "bold", cursor: "pointer"}} > &nbsp; Show less</span></Typography>
        }
        <Typography mt="6px" variant="body2">{comment?.snippet?.likeCount} likes</Typography>
      </Box>
    </Stack>
  );
};

export default Comment;
