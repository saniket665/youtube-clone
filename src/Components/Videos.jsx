import React from 'react';
import {Stack, Box} from "@mui/material"
import Video from './Video';

const Videos = ({videos}) => {
    // console.log(videos.items.contents);
  return (
    <Stack direction="row" sx={{flexWrap: "wrap", justifyContent: "center", overFlowX: "auto", gap: "1rem", margin: "1rem 0"}}>
        {
            videos !== null && videos.map((video, idx) => (
                <Box key={idx}>
                    <Video video={video} />
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos