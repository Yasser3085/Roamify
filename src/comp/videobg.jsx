import React from 'react';
import { Box } from '@chakra-ui/react';

function VideoBackground() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="50vh"
      overflow="hidden"
      zIndex="-1"
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/images/video.mp4" type="video/mp4" />
        {/* Add more source elements for different video formats if needed */}
      </video>
    </Box>
  );
}

export default VideoBackground;
