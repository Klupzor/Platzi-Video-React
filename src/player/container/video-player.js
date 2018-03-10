import React, {Component} from 'react'
import VideoPlayerLayout from './../components/video-player-layout';

class VideoPlayer extends Component {
    render() {
        return (
            <VideoPlayerLayout>
                <video
                    controls
                    autoPlay 
                    src="https://www.youtube.com/watch?v=LKWhVpd9eOk"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer