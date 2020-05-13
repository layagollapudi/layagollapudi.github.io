function onYouTubeIframeAPIReady(videoId) {
  var player;
  player = new YT.Player('YouTubeBackgroundVideoPlayer', {
      videoId: 'ugcWGt8qRKw', // YouTube Video ID
      width: '100%',
      height: '100%',              // Player height (in px)
      playerVars: {
        autoplay: 1,        // Auto-play the video on load
        autohide: 1,
        disablekb: 1,
        controls: 0,        // Hide pause/play buttons in player
        showinfo: 0,        // Hide the video title
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop
        fs: 0,              // Hide the full screen button
        autohide: 0,         // Hide video controls when playing
        rel: 0,
        enablejsapi: 1
      },
      events: {
        onReady: function(e) {
            console.log('Hello! Initialized.');
            e.target.mute();
            e.target.setPlaybackQuality('hd1080');
        },
        onStateChange: function(e) {
          if(e && e.data === 1){
              console.log('Loading...');
              var videoHolder = document.getElementById('videoplayer');
              if(videoHolder && videoHolder.id){
                videoHolder.classList.remove('loading');
              }
          }else if(e && e.data === 0){
            console.log('Playing...');
            e.target.playVideo()
          }
        }
      }
  });
}
