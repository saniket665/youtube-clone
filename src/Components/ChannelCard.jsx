import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelCard = ({ channel }) => {
  console.log(channel);
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ marginTop: "-122px" }}>
        <img
          src={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          style={{ height: 200, width: 200, borderRadius: "50%" }}
        />
      </Box>
      <Box sx={{display: "flex", alignItems: "center"}}>
        <Typography
          variant="h6"
          sx={{ color: "#fff", mt: 1, textAlign: "center"}}
        >
          {channel?.snippet?.title}
        </Typography>
        <CheckCircleIcon sx={{ color: "#fff", mt: "-6px", ml: "3px", fontSize: "1.1rem"}} />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ color: "#909090", fontWeight: "bold"}}
      >
        {channel?.statistics?.subscriberCount} Subscribers
      </Typography>
    </Box>
  );
};

export default ChannelCard;
