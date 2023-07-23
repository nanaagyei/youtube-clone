import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items));
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{ 
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,108,1) 0%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px',
          // backgroundImage: `url(${ChannelDetail?.snippet?.thumbnails?.high?.url})`,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // height: '300px',
          // width: '100%',
          // display: 'flex',
          // alignItems: 'flex-end',
          // justifyContent: 'center',
          // color: 'white',
          // padding: '20px',
          // boxSizing: 'border-box'
        }} 
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail