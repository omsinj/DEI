import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

class VideoSimulation extends React.Component {
    componentDidMount() {
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('Video Player Ready');
        });
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div data-vjs-player>
                <video ref={node => (this.videoNode = node)} className="video-js" />
            </div>
        );
    }
}

export default VideoSimulation;
