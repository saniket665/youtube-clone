import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { SpaOutlined } from "@mui/icons-material";

const VideoDescription = ({ videoDetails }) => {
  const [fullBox, setFullBox] = useState(false);
  return (
    <Box
      mt={2}
      p={1}
      sx={{
        background: "#292929",
        color: "#efefef",
        height: "min-content",
        width: "inherit",
        borderRadius: "4px",
      }}
    >
      {videoDetails?.snippet?.description.length <= 230 ? (
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
          {videoDetails?.snippet?.description}
        </Typography>
      ) : fullBox === true ? (
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
          {videoDetails?.snippet?.description}{" "}
          <span
            onClick={() => setFullBox(!fullBox)}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            {" "}
            &nbsp; Show less
          </span>
        </Typography>
      ) : (
        <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
          {videoDetails?.snippet?.description.slice(0, 230)}{" "}
          <span
            style={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => setFullBox(!fullBox)}
          >
            {" "}
            &nbsp; Show more
          </span>
        </Typography>
      )}
    </Box>
  );
};

export default VideoDescription;
