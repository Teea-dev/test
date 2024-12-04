import Script from 'next/script';
import React, { useState, useId, useCallback } from 'react';



function useCloudinaryVideoPlayer() {
  const [cloudinary, setCloudinary] = useState<any>(null);
  const playerId = useId();


  const handleOnLoad = useCallback(() => {
    if ('cloudinary' in window) {
      setCloudinary(window.cloudinary)
    }
  }, [])

  if (!cloudinary) {
    return (
      <>
        <Script
          id={`cloudinary-videoplayer-${playerId}`}
          src={`https://unpkg.com/cloudinary-video-player@1.9.16/dist/cld-video-player.min.js`}
          onLoad={handleOnLoad}
          onError={(e) => console.error(`Failed to load Cloudinary Video Player: ${e.message}`)}
        />
      </>

    )
  }

  return cloudinary

}

export default useCloudinaryVideoPlayer