import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/Api";
import {Stack, Box} from "@mui/material";
import { channelBannerImage } from '../utils/constants';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {
  const [videos, setVideos] = useState(null);
  const [channelDetail, setChannelDetail] = useState(null);
  const {id}= useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.data.items[0]);
    })
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideos(data.data.items);
    })
  }, [])
  return (
    <Stack sx={{width: "100%"}}>
      <Box sx={{height: "250px"}}>
        <img src={channelDetail?.brandingSettings?.image?.bannerExternalUrl || channelBannerImage} style={{height: "230px", width: "100vw", backgroundRepeat: "none", backgroundSize: "100% 100%", backgorundPosition: "center", objectFit: "cover"}} />
      </Box>
      <ChannelCard channel={channelDetail} />
      <Box>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default ChannelDetail