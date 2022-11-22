import React, {useState} from "react";
import { Typography, Box } from "@mui/material";
import Comment from "./Comment";

const Comments = ({ comments, commentCount }) => {
    const [open, setOpen] = useState("none");
    const handleOpen = () => {
        if(open === "none") {
            setOpen("flex");
        }
        else{ 
            setOpen("none");
        }
    }
  return (
    <Box mt={2}>
      <Typography sx={{cursor: "pointer"}} onClick={handleOpen}>{commentCount} Comments</Typography>
      {comments !== null ? (
        comments.map((comment, idx) => (
          <Comment open={open} comment={comment?.snippet?.topLevelComment} key={idx} />
        ))
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Comments;
