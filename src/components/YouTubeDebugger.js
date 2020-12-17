import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitRate = () => {
        this.setState(prevState => {
            return {
                settings: {...prevState.settings, bitrate: prevState.settings.bitrate = 12}
            }
        })
    }

    handleResolution = () => {
        this.setState(prevState => {
            return {
                settings: {...prevState.settings,
                video: {
                    ...prevState.settings.video, resolution: prevState.settings.video.resolution = '720p'
                }
                }
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleBitRate} className='bitrate'>{this.state.settings.bitrate}</button>
                <br />
                <button onClick={this.handleResolution} className='resolution'>{this.state.settings.video.resolution}</button>
            </div>
        )
    }

}

export default YouTubeDebugger